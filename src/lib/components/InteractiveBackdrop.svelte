<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let pointerX = $state(72);
	let pointerY = $state(34);
	let pointerActive = $state(false);

	onMount(() => {
		const media = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (media.matches) {
			return;
		}

		const context = canvas.getContext('2d');
		if (!context) {
			return;
		}

		const segmentCount = 14;
		const gridSize = 24;
		const segments = Array.from({ length: segmentCount }, () => ({ x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 }));
		const target = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };
		const delayedTarget = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };
		let width = window.innerWidth;
		let height = window.innerHeight;
		let dpr = Math.min(window.devicePixelRatio || 1, 2);

		const resize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			context.setTransform(dpr, 0, 0, dpr, 0, 0);
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

		const snapToGrid = (value: number) => Math.round(value / gridSize) * gridSize;

		const drawGrid = () => {
			context.strokeStyle = 'rgba(255, 255, 255, 0.05)';
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

		const drawSnake = (time: number) => {
			delayedTarget.x += (target.x - delayedTarget.x) * 0.085;
			delayedTarget.y += (target.y - delayedTarget.y) * 0.085;

			const head = segments[0];
			head.x += (delayedTarget.x - head.x) * 0.16;
			head.y += (delayedTarget.y - head.y) * 0.16;

			for (let index = 1; index < segments.length; index += 1) {
				const previous = segments[index - 1];
				const current = segments[index];
				current.x += (previous.x - current.x) * 0.18;
				current.y += (previous.y - current.y) * 0.18;
			}

			for (let index = segments.length - 1; index >= 0; index -= 1) {
				const segment = segments[index];
				const x = snapToGrid(segment.x) - gridSize * 0.5;
				const y = snapToGrid(segment.y) - gridSize * 0.5;
				const alpha = 0.08 + ((segments.length - index) / segments.length) * 0.24;
				context.fillStyle = `rgba(255, 193, 7, ${alpha})`;
				context.fillRect(x + 4, y + 4, gridSize - 8, gridSize - 8);
				context.strokeStyle = `rgba(255, 193, 7, ${0.08 + alpha * 0.42})`;
				context.strokeRect(x + 4.5, y + 4.5, gridSize - 9, gridSize - 9);
			}

			const blink = Math.sin(time * 0.008) > 0.15;
			const eyeOffset = 5;
			const eyeY = snapToGrid(head.y) - 2;
			context.fillStyle = blink ? 'rgba(28, 21, 0, 0.9)' : 'rgba(255, 230, 149, 0.95)';
			context.fillRect(snapToGrid(head.x) - eyeOffset, eyeY, 3, 3);
			context.fillRect(snapToGrid(head.x) + eyeOffset - 3, eyeY, 3, 3);
		};

		let animationFrame = 0;
		const update = (time: number) => {
			if (!pointerActive) {
				target.x = width * 0.5 + Math.cos(time * 0.0012) * Math.min(width * 0.16, 180);
				target.y = height * 0.45 + Math.sin(time * 0.0017) * Math.min(height * 0.12, 120);
			}

			context.clearRect(0, 0, width, height);
			context.fillStyle = '#050505';
			context.fillRect(0, 0, width, height);
			drawGrid();
			drawSnake(time);

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

<div class="backdrop" aria-hidden="true">
	<canvas class="backdrop__canvas" bind:this={canvas}></canvas>
	<div class:backdrop__cursor--active={pointerActive} class="backdrop__cursor" style={`transform: translate3d(${pointerX}px, ${pointerY}px, 0);`}>
		<div class="backdrop__cursor-ring"></div>
		<div class="backdrop__cursor-dot"></div>
	</div>
</div>

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
		border-radius: 999px;
		border: 1px solid rgba(255, 193, 7, 0.5);
		box-shadow: 0 0 18px rgba(255, 193, 7, 0.1);
	}

	.backdrop__cursor-dot {
		width: 0.34rem;
		height: 0.34rem;
		border-radius: 999px;
		background: rgba(255, 193, 7, 0.95);
		box-shadow: 0 0 12px rgba(255, 193, 7, 0.26);
	}

	@media (pointer: coarse), (prefers-reduced-motion: reduce) {
		.backdrop__cursor {
			display: none;
		}
	}
</style>