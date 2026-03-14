<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import type { Project } from '$lib/data/site';

	interface Props {
		projects: Project[];
	}

	let { projects }: Props = $props();
</script>

<section class="section work" id="work">
	<div class="container">
		<Reveal className="work__header" delay={0}>
			<p class="section-kicker">Selected work</p>
			<h2>A few projects that I worked on.</h2>
		</Reveal>

		<div class="work-grid">
			{#each projects as project, index}
				<Reveal className="work-card" delay={index * 80 + 40}>
					<a href={project.url} target="_blank" rel="noreferrer">
						<div class="work-card__media">
							<img src={project.image} alt={project.name} loading="lazy" width="1200" height="760" />
						</div>

						<div class="work-card__content">
							<p class="work-card__eyebrow">{project.eyebrow}</p>
							<div class="work-card__title-row">
								<h3>{project.name}</h3>

							</div>
							<p class="work-card__summary">{project.summary}</p>
							<p class="work-card__stack">{project.stack}</p>
						</div>
					</a>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<style>
	:global(.work__header) {
		margin-bottom: 1.4rem;
	}

	:global(.work__header) h2 {
		max-width: 14ch;
		font-size: clamp(2rem, 4vw, 3.2rem);
		line-height: 1;
		letter-spacing: -0.05em;
	}

	.section-kicker,
	.work-card__eyebrow,
	.work-card__stack {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}

	.section-kicker,
	.work-card__eyebrow {
		color: var(--accent-2);
	}

	.work-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
	}

	:global(.work-card) {
		height: 100%;
	}

	:global(.work-card) a {
		display: grid;
		height: 100%;

		overflow: hidden;
		background: linear-gradient(180deg, rgba(13, 16, 22, 0.92), rgba(9, 10, 15, 0.98));
		border: 1px solid rgba(160, 182, 227, 0.12);
		transition:
			transform 240ms ease,
			border-color 240ms ease,
			box-shadow 240ms ease;
	}

	:global(.work-card) a:hover {
		transform: translateY(-4px);
		border-color: rgba(255, 193, 7, 0.28);
		box-shadow: var(--shadow-panel);
	}

	.work-card__media {
		position: relative;
		aspect-ratio: 1.34;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.04);
	}

	.work-card__media::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, transparent 50%, rgba(8, 10, 15, 0.56));
	}

	.work-card__media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 340ms ease;
	}

	:global(.work-card) a:hover img {
		transform: scale(1.04);
	}

	.work-card__content {
		display: grid;
		gap: 0.9rem;
		padding: 1.2rem;
		position: relative;
	}

	.work-card__content::after {
		content: '';
		position: absolute;
		inset: auto 1.2rem 0.9rem 1.2rem;
		height: 1px;
		background: linear-gradient(90deg, rgba(255, 193, 7, 0.3), transparent 72%);
		transform: scaleX(0.4);
		transform-origin: left center;
		transition: transform 260ms ease;
	}

	:global(.work-card) a:hover .work-card__content::after {
		transform: scaleX(1);
	}

	.work-card__title-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.work-card__title-row h3 {
		font-size: 1.35rem;
		font-weight: 500;
	}

	.work-card__stack {
		color: var(--muted);
	}

	.work-card__summary {
		color: var(--text-soft);
	}

	@media (max-width: 960px) {
		.work-grid {
			grid-template-columns: 1fr;
		}
	}
</style>