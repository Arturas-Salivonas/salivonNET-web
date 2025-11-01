<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(false);

	interface Skill {
		name: string;
		icon: string;
		category?: string;
	}

	interface Props {
		skills?: Skill[];
	}

	let { skills = [] }: Props = $props();

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					visible = true;
				}
			});
		}, { threshold: 0.1 });

		const element = document.querySelector('.skills-section');
		if (element) observer.observe(element);

		return () => observer.disconnect();
	});
</script>

<section class="skills-section">
	<div class="container">
		<h2 class="section-title" style="opacity: {visible ? 1 : 0}; transform: translateY({visible ? 0 : 20}px); transition: opacity 0.6s ease, transform 0.6s ease;">
			Tech Stack & Expertise
		</h2>
		<div class="skills-grid" style="opacity: {visible ? 1 : 0}; transform: translateY({visible ? 0 : 20}px); transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;">
			{#each skills as skill, i}
				<div class="skill-card" style="transition-delay: {i * 0.05}s;">
					<div class="skill-name">{skill.name}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.skills-section {
		background: var(--color-dark);
		padding: var(--spacing-lg) 0;
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

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: var(--spacing-sm);
		max-width: 900px;
		margin: 0 auto;
	}

	.skill-card {
		background: var(--color-gray);
		border-radius: var(--border-radius);
		padding: var(--spacing-md) var(--spacing-sm);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-xs);
		transition: all var(--transition-speed) ease;
		border: 2px solid transparent;
	}

	.skill-card:hover {
		transform: translateY(-6px);
		border-color: var(--color-primary);
		box-shadow: 0 10px 25px rgba(245, 225, 89, 0.15);
	}

	.skill-name {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--color-white);
		text-align: center;
		white-space: nowrap;
	}

	@media (max-width: 768px) {
		.skills-grid {
			grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		}

		.skill-card {
			padding: var(--spacing-sm);
		}

		.skill-name {
			font-size: 0.75rem;
		}
	}
</style>
