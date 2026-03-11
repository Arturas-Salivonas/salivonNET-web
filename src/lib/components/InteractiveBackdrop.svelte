<script lang="ts">
	import { onMount } from 'svelte';

	interface RgbColor {
		r: number;
		g: number;
		b: number;
	}

	interface Segment {
		x: number;
		y: number;
		collected: boolean;
	}

	interface Collectible {
		x: number;
		y: number;
		vx: number;
		vy: number;
		size: number;
		phase: number;
	}

	interface PickupBurst {
		x: number;
		y: number;
		life: number;
		maxLife: number;
		radius: number;
		fragments: Array<{
			vx: number;
			vy: number;
			size: number;
		}>;
	}

	const hexToRgb = (hex: string): RgbColor => {
		const sanitizedHex = hex.replace('#', '');
		const normalizedHex =
			sanitizedHex.length === 3
				? sanitizedHex
						.split('')
						.map((character) => character + character)
						.join('')
				: sanitizedHex;

		const parsed = Number.parseInt(normalizedHex, 16);

		return {
			r: (parsed >> 16) & 255,
			g: (parsed >> 8) & 255,
			b: parsed & 255
		};
	};

	const rgba = (color: RgbColor, alpha: number) => `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
	const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

	const BACKDROP_CONFIG = {
		counts: {
			segments: 14,
			collectibles: 6
		},
		gridSize: 24,
		spawnPaddingMultiplier: 3,
		spawnDistanceFactor: 0.22,
		pixelRatioCap: 2,
		pointerIdleMotion: {
			xSpeed: 0.0012,
			ySpeed: 0.0017,
			xRangeFactor: 0.16,
			yRangeFactor: 0.12,
			xRangeCap: 180,
			yRangeCap: 120,
			yCenterFactor: 0.45
		},
		trail: {
			delayedTargetLerp: 0.085,
			headLerp: 0.16,
			segmentLerp: 0.18,
			pickupRadiusFactor: 0.92
		},
		collectible: {
			speedXRange: [0.045, 0.095] as const,
			speedYRange: [0.03, 0.075] as const,
			sizeRange: [0.8, 1.15] as const,
			pulse: {
				base: 0.78,
				amplitude: 0.11,
				speed: 0.00135
			},
			drift: {
				xSpeed: 0.00055,
				ySpeed: 0.0007,
				xAmplitude: 3.5,
				yAmplitude: 3,
				yPhaseMultiplier: 1.3
			},
			inset: 10,
			glowPadding: 4,
			strokeInset: 1,
			opacity: {
				glowBase: 0.12,
				glowPulse: 0.08,
				fillBase: 0.42,
				fillPulse: 0.08,
				strokeBase: 0.24,
				strokePulse: 0.14
			}
		},
		burst: {
			lifeRange: [28, 40] as const,
			radiusRange: [0.9, 1.35] as const,
			fragmentCount: 8,
			fragmentVelocityRange: [-1.1, 1.1] as const,
			fragmentSizeRange: [3, 6] as const,
			ringExpansionFactor: 1.4,
			fragmentTravelFactor: 1.8,
			strokeWidth: 1.5,
			minFragmentSize: 1.5
		},
		snake: {
			segmentInset: 4,
			strokeOffset: 0.5,
			strokeInset: 1,
			eye: {
				blinkSpeed: 0.008,
				blinkThreshold: 0.15,
				offset: 5,
				yOffset: -2,
				size: 3
			}
		},
		theme: {
			background: '#050505',
			grid: rgba(hexToRgb('#FFFFFF'), 0.05),
			collectible: {
				glow: hexToRgb('#2AD506'),
				fill: hexToRgb('#2AD506'),
				stroke: hexToRgb('#C39BFF')
			},
			burst: {
				ring: hexToRgb('#FFD967'),
				fragment: hexToRgb('#FFD967')
			},
			snake: {
				base: { r: 255, g: 179, b: 87 },
				strokeBoost: 12
			},
			eyes: {
				open: 'rgba(212, 255, 208, 0.95)',
				closed: 'rgba(7, 34, 18, 0.9)'
			},
			cursor: {
				ring: hexToRgb('#ffc107'),
				ringShadow: rgba(hexToRgb('#ffc107'), 0.4),
				dot: rgba(hexToRgb('#ffc107'), 0.95),
				dotShadow: rgba(hexToRgb('#ffc107'), 0.7)
			}
		}
	} as const;

	const BACKDROP_CSS_VARIABLES = [
		`--backdrop-cursor-ring:${BACKDROP_CONFIG.theme.cursor.ring}`,
		`--backdrop-cursor-ring-shadow:${BACKDROP_CONFIG.theme.cursor.ringShadow}`,
		`--backdrop-cursor-dot:${BACKDROP_CONFIG.theme.cursor.dot}`,
		`--backdrop-cursor-dot-shadow:${BACKDROP_CONFIG.theme.cursor.dotShadow}`
	].join(';');

	let canvas = $state<HTMLCanvasElement | undefined>();
	let isDisabled = $state(false);
	let pointerX = $state(72);
	let pointerY = $state(34);
	let pointerActive = $state(false);

	onMount(() => {
		const media = window.matchMedia('(prefers-reduced-motion: reduce)');
		const coarsePointer = window.matchMedia('(pointer: coarse)');
		if (media.matches || coarsePointer.matches) {
			isDisabled = true;
			return;
		}

		if (!canvas) {
			return;
		}

		const backdropCanvas = canvas;

		const context = backdropCanvas.getContext('2d');
		if (!context) {
			return;
		}

		const { burst, collectible: collectibleSettings, counts, gridSize, pixelRatioCap, pointerIdleMotion, spawnDistanceFactor, spawnPaddingMultiplier, trail } = BACKDROP_CONFIG;
		const { theme } = BACKDROP_CONFIG;
		const randomRange = (min: number, max: number) => min + Math.random() * (max - min);
		const target = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };
		const delayedTarget = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };
		let width = window.innerWidth;
		let height = window.innerHeight;
		let dpr = Math.min(window.devicePixelRatio || 1, pixelRatioCap);
		const createSegment = (): Segment => ({ x: target.x, y: target.y, collected: false });
		const segments: Segment[] = Array.from({ length: counts.segments }, createSegment);
		const bursts: PickupBurst[] = [];

		const snapToGrid = (value: number) => Math.round(value / gridSize) * gridSize;
		const distanceBetween = (firstX: number, firstY: number, secondX: number, secondY: number) => {
			const deltaX = firstX - secondX;
			const deltaY = firstY - secondY;
			return Math.hypot(deltaX, deltaY);
		};

		const spawnCollectible = (originX = target.x, originY = target.y): Collectible => {
			const padding = gridSize * spawnPaddingMultiplier;
			let nextX = originX;
			let nextY = originY;

			for (let attempt = 0; attempt < 16; attempt += 1) {
				nextX = snapToGrid(randomRange(padding, Math.max(padding, width - padding)));
				nextY = snapToGrid(randomRange(padding, Math.max(padding, height - padding)));

				if (distanceBetween(nextX, nextY, originX, originY) > Math.min(width, height) * spawnDistanceFactor) {
					break;
				}
			}

			const speed = randomRange(...collectibleSettings.speedXRange);

			return {
				x: nextX,
				y: nextY,
				vx: (Math.random() > 0.5 ? 1 : -1) * speed,
				vy: (Math.random() > 0.5 ? 1 : -1) * randomRange(...collectibleSettings.speedYRange),
				size: randomRange(...collectibleSettings.sizeRange),
				phase: randomRange(0, Math.PI * 2)
			};
		};

		const createPickupBurst = (x: number, y: number) => {
			bursts.push({
				x,
				y,
				life: 0,
				maxLife: randomRange(...burst.lifeRange),
				radius: randomRange(gridSize * burst.radiusRange[0], gridSize * burst.radiusRange[1]),
				fragments: Array.from({ length: burst.fragmentCount }, () => ({
					vx: randomRange(...burst.fragmentVelocityRange),
					vy: randomRange(...burst.fragmentVelocityRange),
					size: randomRange(...burst.fragmentSizeRange)
				}))
			});
		};

		const collectibles: Collectible[] = Array.from({ length: counts.collectibles }, () => spawnCollectible());

		const resize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			dpr = Math.min(window.devicePixelRatio || 1, pixelRatioCap);
			backdropCanvas.width = Math.floor(width * dpr);
			backdropCanvas.height = Math.floor(height * dpr);
			backdropCanvas.style.width = `${width}px`;
			backdropCanvas.style.height = `${height}px`;
			context.setTransform(dpr, 0, 0, dpr, 0, 0);

			for (const collectible of collectibles) {
				collectible.x = clamp(collectible.x, gridSize * 2, width - gridSize * 2);
				collectible.y = clamp(collectible.y, gridSize * 2, height - gridSize * 2);
			}
		};

		const handlePointerMove = (event: PointerEvent) => {
			pointerX = event.clientX;
			pointerY = event.clientY;
			pointerActive = true;
			target.x = event.clientX;
			target.y = event.clientY;
		};

		const handlePointerLeave = () => {
			pointerActive = false;
		};

		const drawGrid = () => {
			context.strokeStyle = theme.grid;
			context.lineWidth = 1;
			context.beginPath();
			for (let x = 0; x <= width; x += gridSize) {
				context.moveTo(x + 0.5, 0);
				context.lineTo(x + 0.5, height);
			}
			for (let y = 0; y <= height; y += gridSize) {
				context.moveTo(0, y + 0.5);
				context.lineTo(width, y + 0.5);
			}
			context.stroke();
		};

		const drawCollectibles = (time: number) => {
			for (const collectible of collectibles) {
				collectible.x += collectible.vx;
				collectible.y += collectible.vy;

				const minBound = gridSize * 2;
				const maxX = width - gridSize * 2;
				const maxY = height - gridSize * 2;

				if (collectible.x <= minBound || collectible.x >= maxX) {
					collectible.vx *= -1;
					collectible.x = clamp(collectible.x, minBound, maxX);
				}

				if (collectible.y <= minBound || collectible.y >= maxY) {
					collectible.vy *= -1;
					collectible.y = clamp(collectible.y, minBound, maxY);
				}

				const pulse =
					collectibleSettings.pulse.base +
					(Math.sin(time * collectibleSettings.pulse.speed + collectible.phase) + 1) * collectibleSettings.pulse.amplitude;
				const blockSize = (gridSize - collectibleSettings.inset) * collectible.size;
				const driftX = Math.cos(time * collectibleSettings.drift.xSpeed + collectible.phase) * collectibleSettings.drift.xAmplitude;
				const driftY =
					Math.sin(time * collectibleSettings.drift.ySpeed + collectible.phase * collectibleSettings.drift.yPhaseMultiplier) *
					collectibleSettings.drift.yAmplitude;
				const x = collectible.x + driftX - blockSize * 0.5;
				const y = collectible.y + driftY - blockSize * 0.5;

				context.fillStyle = rgba(
					theme.collectible.glow,
					collectibleSettings.opacity.glowBase + pulse * collectibleSettings.opacity.glowPulse
				);
				context.fillRect(
					x - collectibleSettings.glowPadding,
					y - collectibleSettings.glowPadding,
					blockSize + collectibleSettings.glowPadding * 2,
					blockSize + collectibleSettings.glowPadding * 2
				);
				context.fillStyle = rgba(
					theme.collectible.fill,
					collectibleSettings.opacity.fillBase + pulse * collectibleSettings.opacity.fillPulse
				);
				context.fillRect(x, y, blockSize, blockSize);
				context.strokeStyle = rgba(
					theme.collectible.stroke,
					collectibleSettings.opacity.strokeBase + pulse * collectibleSettings.opacity.strokePulse
				);
				context.strokeRect(
					x + 0.5,
					y + 0.5,
					blockSize - collectibleSettings.strokeInset,
					blockSize - collectibleSettings.strokeInset
				);
			}
		};

		const drawBursts = () => {
			for (let index = bursts.length - 1; index >= 0; index -= 1) {
				const burst = bursts[index];
				const progress = burst.life / burst.maxLife;
				const alpha = 1 - progress;
				const ringRadius = burst.radius + progress * gridSize * BACKDROP_CONFIG.burst.ringExpansionFactor;

				context.strokeStyle = rgba(theme.burst.ring, alpha * 0.55);
				context.lineWidth = BACKDROP_CONFIG.burst.strokeWidth;
				context.beginPath();
				context.arc(burst.x, burst.y, ringRadius, 0, Math.PI * 2);
				context.stroke();

				for (const fragment of burst.fragments) {
					const fragmentX = burst.x + fragment.vx * burst.life * BACKDROP_CONFIG.burst.fragmentTravelFactor;
					const fragmentY = burst.y + fragment.vy * burst.life * BACKDROP_CONFIG.burst.fragmentTravelFactor;
					const size = Math.max(BACKDROP_CONFIG.burst.minFragmentSize, fragment.size * alpha);
					context.fillStyle = rgba(theme.burst.fragment, alpha * 0.7);
					context.fillRect(fragmentX - size * 0.5, fragmentY - size * 0.5, size, size);
				}

				burst.life += 1;

				if (burst.life >= burst.maxLife) {
					bursts.splice(index, 1);
				}
			}
		};

		const drawSnake = (time: number) => {
			delayedTarget.x += (target.x - delayedTarget.x) * trail.delayedTargetLerp;
			delayedTarget.y += (target.y - delayedTarget.y) * trail.delayedTargetLerp;

			const head = segments[0];
			head.x += (delayedTarget.x - head.x) * trail.headLerp;
			head.y += (delayedTarget.y - head.y) * trail.headLerp;

			for (let index = 1; index < segments.length; index += 1) {
				const previous = segments[index - 1];
				const current = segments[index];
				current.x += (previous.x - current.x) * trail.segmentLerp;
				current.y += (previous.y - current.y) * trail.segmentLerp;
			}

			for (let index = 0; index < collectibles.length; index += 1) {
				const collectible = collectibles[index];
				const collectibleX = collectible.x;
				const collectibleY = collectible.y;

				if (distanceBetween(head.x, head.y, collectibleX, collectibleY) <= gridSize * trail.pickupRadiusFactor) {
					const tail = segments[segments.length - 1];
					segments.push({ x: tail.x, y: tail.y, collected: true });
					createPickupBurst(collectibleX, collectibleY);
					collectibles[index] = spawnCollectible(head.x, head.y);
				}
			}

			for (let index = segments.length - 1; index >= 0; index -= 1) {
				const segment = segments[index];
				const x = snapToGrid(segment.x) - gridSize * 0.5;
				const y = snapToGrid(segment.y) - gridSize * 0.5;
				const progress = (segments.length - index) / segments.length;
				const alpha = 0.08 + progress * 0.24;
				const fillColor = segment.collected
					? theme.collectible.fill
					: {
							r: theme.snake.base.r,
							g: Math.round(theme.snake.base.g + progress * 52),
							b: theme.snake.base.b
						};
				const strokeColor = segment.collected
					? theme.collectible.stroke
					: {
							r: theme.snake.base.r,
							g: Math.min(235, fillColor.g + theme.snake.strokeBoost),
							b: 117
						};
				context.fillStyle = rgba(fillColor, alpha);
				context.fillRect(x + BACKDROP_CONFIG.snake.segmentInset, y + BACKDROP_CONFIG.snake.segmentInset, gridSize - BACKDROP_CONFIG.snake.segmentInset * 2, gridSize - BACKDROP_CONFIG.snake.segmentInset * 2);
				context.strokeStyle = rgba(strokeColor, 0.08 + alpha * 0.42);
				context.strokeRect(
					x + BACKDROP_CONFIG.snake.segmentInset + BACKDROP_CONFIG.snake.strokeOffset,
					y + BACKDROP_CONFIG.snake.segmentInset + BACKDROP_CONFIG.snake.strokeOffset,
					gridSize - BACKDROP_CONFIG.snake.segmentInset * 2 - BACKDROP_CONFIG.snake.strokeInset,
					gridSize - BACKDROP_CONFIG.snake.segmentInset * 2 - BACKDROP_CONFIG.snake.strokeInset
				);
			}

			const blink = Math.sin(time * BACKDROP_CONFIG.snake.eye.blinkSpeed) > BACKDROP_CONFIG.snake.eye.blinkThreshold;
			const eyeY = snapToGrid(head.y) + BACKDROP_CONFIG.snake.eye.yOffset;
			context.fillStyle = blink ? theme.eyes.closed : theme.eyes.open;
			context.fillRect(snapToGrid(head.x) - BACKDROP_CONFIG.snake.eye.offset, eyeY, BACKDROP_CONFIG.snake.eye.size, BACKDROP_CONFIG.snake.eye.size);
			context.fillRect(
				snapToGrid(head.x) + BACKDROP_CONFIG.snake.eye.offset - BACKDROP_CONFIG.snake.eye.size,
				eyeY,
				BACKDROP_CONFIG.snake.eye.size,
				BACKDROP_CONFIG.snake.eye.size
			);
		};

		let animationFrame = 0;
		const update = (time: number) => {
			if (!pointerActive) {
				target.x = width * 0.5 + Math.cos(time * pointerIdleMotion.xSpeed) * Math.min(width * pointerIdleMotion.xRangeFactor, pointerIdleMotion.xRangeCap);
				target.y = height * pointerIdleMotion.yCenterFactor + Math.sin(time * pointerIdleMotion.ySpeed) * Math.min(height * pointerIdleMotion.yRangeFactor, pointerIdleMotion.yRangeCap);
			}

			context.clearRect(0, 0, width, height);
			context.fillStyle = theme.background;
			context.fillRect(0, 0, width, height);
			drawGrid();
			drawCollectibles(time);
			drawSnake(time);
			drawBursts();

			animationFrame = window.requestAnimationFrame(update);
		};

		resize();
		window.addEventListener('resize', resize);
		window.addEventListener('pointermove', handlePointerMove);
		window.addEventListener('pointerleave', handlePointerLeave);
		animationFrame = window.requestAnimationFrame(update);

		return () => {
			window.cancelAnimationFrame(animationFrame);
			window.removeEventListener('resize', resize);
			window.removeEventListener('pointermove', handlePointerMove);
			window.removeEventListener('pointerleave', handlePointerLeave);
		};
	});
</script>

{#if !isDisabled}
	<div class="backdrop" aria-hidden="true" style={BACKDROP_CSS_VARIABLES}>
		<canvas class="backdrop__canvas" bind:this={canvas}></canvas>
		<div class:backdrop__cursor--active={pointerActive} class="backdrop__cursor" style={`transform: translate3d(${pointerX}px, ${pointerY}px, 0);`}>
			<div class="backdrop__cursor-ring"></div>
			<div class="backdrop__cursor-dot"></div>
		</div>
	</div>
{/if}

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		pointer-events: none;
		overflow: hidden;
		z-index: 0;
	}

	.backdrop :global(.backdrop__canvas) {
		width: 100%;
		height: 100%;
		display: block;
		opacity: 1;
	}

	.backdrop__cursor {
		position: absolute;
		left: 0;
		top: 0;
		opacity: 0;
		transition: opacity 220ms ease;
	}

	.backdrop__cursor--active {
		opacity: 1;
	}

	.backdrop__cursor-ring,
	.backdrop__cursor-dot {
		position: absolute;
		left: 0;
		top: 0;
		transform: translate(-50%, -50%);
	}

	.backdrop__cursor-ring {
		width: 2.1rem;
		height: 2.1rem;

		border: 1px solid var(--backdrop-cursor-ring);
		box-shadow: 0 0 18px var(--backdrop-cursor-ring-shadow);
	}

	.backdrop__cursor-dot {
		width: 0.34rem;
		height: 0.34rem;

		background: var(--backdrop-cursor-dot);
		box-shadow: 0 0 12px var(--backdrop-cursor-dot-shadow);
	}

	@media (pointer: coarse), (prefers-reduced-motion: reduce) {
		.backdrop__cursor {
			display: none;
		}
	}
</style>