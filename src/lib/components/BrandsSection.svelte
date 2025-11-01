<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = $state(false);

	interface Brand {
		name: string;
		logo: string;
		url?: string;
	}

	interface Props {
		brands?: Brand[];
	}

	let { brands = [] }: Props = $props();

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					visible = true;
				}
			});
		}, { threshold: 0.1 });

		const element = document.querySelector('.brands-section');
		if (element) observer.observe(element);

		return () => observer.disconnect();
	});
</script>

<section class="brands-section section">
	<div class="container">
		{#if visible}
			<h2 class="section-title" in:fly={{ y: 30, duration: 600 }}>
				Brands I Worked On
			</h2>
			<div class="brands-grid">
				{#each brands as brand, i}
					<div
						class="brand-card"
						in:fly={{ y: 50, duration: 500, delay: i * 100 }}
					>
						{#if brand.url}
							<a href={brand.url} target="_blank" rel="noopener noreferrer" class="brand-link">
								<div class="brand-logo-wrapper">
									<img
										src={brand.logo}
										alt={brand.name}
										class="brand-logo"
										loading="lazy"
										decoding="async"
									/>
								</div>
								<span class="brand-name">{brand.name}</span>
							</a>
						{:else}
							<div class="brand-content">
								<div class="brand-logo-wrapper">
									<img
										src={brand.logo}
										alt={brand.name}
										class="brand-logo"
										loading="lazy"
										decoding="async"
									/>
								</div>
								<span class="brand-name">{brand.name}</span>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	.brands-section {
		background: linear-gradient(180deg, var(--color-dark) 0%, #1a1f28 100%);
		padding: var(--spacing-xl) 0;
	}

	.section-title {
		font-size: clamp(2rem, 5vw, 3rem);
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
		bottom: -1rem;
		left: 50%;
		transform: translateX(-50%);
		width: 80px;
		height: 3px;
		background: var(--color-primary);
		border-radius: 2px;
	}

	.brands-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--spacing-md);
		margin-top: var(--spacing-lg);
	}

	.brand-card {
		background: var(--color-gray);
		border-radius: var(--border-radius);
		padding: var(--spacing-md);
		transition: all var(--transition-speed) ease;
		border: 2px solid transparent;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.brand-card:hover {
		transform: translateY(-8px);
		border-color: var(--color-primary);
		box-shadow: 0 15px 40px rgba(245, 225, 89, 0.15);
	}

	.brand-link,
	.brand-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-sm);
		width: 100%;
		text-decoration: none;
		color: inherit;
	}

	.brand-logo-wrapper {
		width: 100%;
		aspect-ratio: 16 / 9;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		padding: var(--spacing-sm);
	}

	.brand-logo {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		filter: grayscale(100%) brightness(1.2);
		transition: filter var(--transition-speed) ease;
	}

	.brand-card:hover .brand-logo {
		filter: grayscale(0%) brightness(1);
	}

	.brand-name {
		font-weight: 600;
		font-size: 1rem;
		color: var(--color-white);
		text-align: center;
	}

	@media (max-width: 768px) {
		.brands-grid {
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
			gap: var(--spacing-sm);
		}
	}
</style>
