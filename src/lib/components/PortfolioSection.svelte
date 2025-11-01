<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(false);

	interface Portfolio {
		name: string;
		image: string;
		url: string;
		description?: string;
	}

	interface Props {
		projects?: Portfolio[];
	}

	let { projects = [] }: Props = $props();

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					visible = true;
				}
			});
		}, { threshold: 0.1 });

		const element = document.querySelector('.portfolio-section');
		if (element) observer.observe(element);

		return () => observer.disconnect();
	});
</script>

<section class="portfolio-section section" style="min-height: 500px;">
	<div class="container">
		<h2 class="section-title" style="opacity: {visible ? 1 : 0}; transform: translateY({visible ? 0 : 20}px); transition: opacity 0.6s ease, transform 0.6s ease;">
			Portfolio
		</h2>
		<div class="portfolio-grid" style="opacity: {visible ? 1 : 0}; transform: translateY({visible ? 0 : 20}px); transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;">
			{#each projects as project, i}
				<article class="portfolio-card" style="transition-delay: {i * 0.1}s;">
					<a href={project.url} target="_blank" rel="noopener noreferrer" class="portfolio-link">
						<div class="portfolio-image-wrapper">
							<img
								src={project.image}
								alt={project.name}
								class="portfolio-image"
								loading="lazy"
								width="800"
								height="500"
								decoding="async"
							/>
							<div class="portfolio-overlay">
								<span class="visit-text">Visit Website →</span>
							</div>
						</div>
						<div class="portfolio-content">
							<h3 class="portfolio-title">{project.name}</h3>
							{#if project.description}
								<p class="portfolio-description">{project.description}</p>
							{/if}
						</div>
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.portfolio-section {
		background: linear-gradient(180deg, var(--color-dark) 0%, #1a1f28 100%);
		padding: var(--spacing-lg) 0 var(--spacing-xl) 0;
		position: relative;
		z-index: 1;
	}

	.section-title {
		font-size: clamp(1.8rem, 4vw, 2.5rem);
		font-weight: 700;
		text-align: center;
		margin-bottom: var(--spacing-lg);
		color: var(--color-white);
		position: relative;
		display: inline-block;
		width: 100%;
	}

	.section-title::after {
		content: '';
		position: absolute;
		bottom: -0.75rem;
		left: 50%;
		transform: translateX(-50%);
		width: 60px;
		height: 3px;
		background: var(--color-primary);
		border-radius: 2px;
	}

	.portfolio-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: var(--spacing-lg);
		margin-top: var(--spacing-lg);
	}

	.portfolio-card {
		background: var(--color-gray);
		border-radius: var(--border-radius);
		overflow: hidden;
		transition: all var(--transition-speed) ease;
		border: 2px solid transparent;
		position: relative;
	}

	.portfolio-card:hover {
		transform: translateY(-10px);
		border-color: rgba(245, 225, 89, 0.3);
		box-shadow: 0 20px 50px rgba(245, 225, 89, 0.25);
	}

	.portfolio-link {
		display: block;
		text-decoration: none;
		color: inherit;
	}

	.portfolio-image-wrapper {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 10;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.05);
	}

	.portfolio-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		min-height: 250px;
		transition: transform 0.5s ease;
	}

	.portfolio-card:hover .portfolio-image {
		transform: scale(1.1);
	}

	.portfolio-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(17, 21, 27, 0.85);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity var(--transition-speed) ease;
	}

	.portfolio-card:hover .portfolio-overlay {
		opacity: 1;
	}

	.visit-text {
		color: var(--color-primary);
		font-weight: 700;
		font-size: 1.2rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.portfolio-content {
		padding: var(--spacing-md);
	}

	.portfolio-title {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: var(--spacing-xs);
		color: var(--color-white);
	}

	.portfolio-description {
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		.portfolio-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-md);
		}
	}
</style>
