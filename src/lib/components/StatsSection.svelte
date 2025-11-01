<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(false);

	interface Stat {
		value: string;
		label: string;
		icon?: string;
	}

	interface Props {
		stats?: Stat[];
	}

	let { stats = [] }: Props = $props();

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					visible = true;
				}
			});
		}, { threshold: 0.1 });

		const element = document.querySelector('.stats-section');
		if (element) observer.observe(element);

		return () => observer.disconnect();
	});
</script>

<section class="stats-section" >
	<div class="container">
		<div class="stats-grid" style="opacity: {visible ? 1 : 0}; transform: translateY({visible ? 0 : 20}px); transition: opacity 0.6s ease, transform 0.6s ease;">
			{#each stats as stat, i}
				<div class="stat-card" style="transition-delay: {i * 0.1}s;">
					<div class="stat-value">{stat.value}</div>
					<div class="stat-label">{stat.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.stats-section {
		background: var(--color-dark);
		padding: var(--spacing-lg) 0;
		position: relative;
		z-index: 1;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--spacing-md);
		max-width: 1000px;
		margin: 0 auto;
	}

	.stat-card {
		background: linear-gradient(135deg, var(--color-gray) 0%, #1f252e 100%);
		border-radius: var(--border-radius);
		padding: var(--spacing-md);
		text-align: center;
		transition: all var(--transition-speed) ease;
		border: 2px solid transparent;
		position: relative;
		overflow: hidden;
	}

	.stat-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, var(--color-primary), rgba(245, 225, 89, 0.4));
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.5s ease;
	}

	.stat-card:hover::before {
		transform: scaleX(1);
	}

	.stat-card:hover {
		transform: translateY(-6px);
		border-color: rgba(245, 225, 89, 0.3);
		box-shadow: 0 10px 30px rgba(245, 225, 89, 0.15);
	}

	.stat-value {
		font-size: clamp(2rem, 4vw, 2.5rem);
		font-weight: 800;
		color: var(--color-primary);
		margin-bottom: var(--spacing-xs);
		line-height: 1;
	}

	.stat-label {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.7);
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--spacing-sm);
		}

		.stat-value {
			font-size: 1.75rem;
		}

		.stat-label {
			font-size: 0.8rem;
		}
	}
</style>
