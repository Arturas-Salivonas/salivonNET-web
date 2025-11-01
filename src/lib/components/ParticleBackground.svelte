<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let particles: Particle[] = [];
	let animationId: number;

	class Particle {
		x: number;
		y: number;
		size: number;
		speedX: number;
		speedY: number;
		opacity: number;

		constructor(canvasWidth: number, canvasHeight: number) {
			this.x = Math.random() * canvasWidth;
			this.y = Math.random() * canvasHeight;
			this.size = Math.random() * 2 + 1;
			this.speedX = (Math.random() - 0.5) * 0.5;
			this.speedY = (Math.random() - 0.5) * 0.5;
			this.opacity = Math.random() * 0.5 + 0.2;
		}

		update(canvasWidth: number, canvasHeight: number) {
			this.x += this.speedX;
			this.y += this.speedY;

			if (this.x < 0 || this.x > canvasWidth) this.speedX *= -1;
			if (this.y < 0 || this.y > canvasHeight) this.speedY *= -1;
		}

		draw(context: CanvasRenderingContext2D) {
			context.fillStyle = `rgba(245, 225, 89, ${this.opacity})`;
			context.beginPath();
			context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			context.fill();
		}
	}

	function initParticles() {
		if (!canvas || !ctx) return;
		particles = [];
		const numberOfParticles = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
		for (let i = 0; i < numberOfParticles; i++) {
			particles.push(new Particle(canvas.width, canvas.height));
		}
	}

	function animate() {
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		particles.forEach(particle => {
			particle.update(canvas.width, canvas.height);
			particle.draw(ctx!);
		});

		// Draw connections
		particles.forEach((particle, index) => {
			for (let j = index + 1; j < particles.length; j++) {
				const dx = particle.x - particles[j].x;
				const dy = particle.y - particles[j].y;
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < 120) {
					ctx!.strokeStyle = `rgba(245, 225, 89, ${0.15 * (1 - distance / 120)})`;
					ctx!.lineWidth = 0.5;
					ctx!.beginPath();
					ctx!.moveTo(particle.x, particle.y);
					ctx!.lineTo(particles[j].x, particles[j].y);
					ctx!.stroke();
				}
			}
		});

		animationId = requestAnimationFrame(animate);
	}

	function handleResize() {
		// Only calculate height for hero section (70vh)
		const heroHeight = window.innerHeight * 0.7;
		canvas.width = window.innerWidth;
		canvas.height = heroHeight;
		initParticles();
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
		handleResize();
		animate();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(animationId);
		};
	});
</script>

<canvas bind:this={canvas} class="particle-canvas"></canvas>

<style>
	.particle-canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 70vh;
		pointer-events: none;
		z-index: 1;
		opacity: 0.4;
	}
</style>
