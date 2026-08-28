<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import type { Project } from '$lib/data/site';

	interface Props {
		platforms: Project[];
		clientProjects: Project[];
		moreClients: string[];
	}

	let { platforms, clientProjects, moreClients }: Props = $props();
</script>

{#snippet card(project: Project, index: number)}
	<Reveal className="pcard-wrap" delay={index * 60 + 40}>
		<a class="pcard" href={project.url} target="_blank" rel="noopener noreferrer">
			<div class="pcard__media">
				<img src={project.image} alt="{project.name} screenshot" loading="lazy" width="386" height="200" />
				<div class="pcard__shade"></div>
				{#if project.tag}
					<span class="pcard__tag" class:pcard__tag--dark={project.tagStyle === 'dark'}>{project.tag}</span>
				{/if}
			</div>
			<div class="pcard__body">
				<div class="pcard__title-row">
					<h3>{project.name}</h3>
					{#if project.domain}<span class="pcard__domain">{project.domain}</span>{/if}
				</div>
				<p>{project.summary}</p>
				<p class="pcard__stack">{project.stack}</p>
			</div>
		</a>
	</Reveal>
{/snippet}

<section class="section" id="platforms">
	<div class="container">
		<Reveal className="section-head" delay={40}>
			<p class="kicker">Proof of work</p>
			<h2 class="section-title">I don't just build platforms. I run them.</h2>
			<p class="section-intro">
				Three products of my own, live in production. Every architecture, SEO and monetisation decision is
				mine to live with - that is the experience I bring to client work.
			</p>
		</Reveal>
		<div class="grid">
			{#each platforms as project, index}
				{@render card(project, index)}
			{/each}
		</div>
	</div>
</section>

<section class="section" id="work">
	<div class="container">
		<Reveal className="section-head" delay={40}>
			<p class="kicker">Selected client work</p>
			<h2 class="section-title">Agencies, brands and clinics.</h2>
		</Reveal>
		<div class="grid">
			{#each clientProjects as project, index}
				{@render card(project, index)}
			{/each}
		</div>
		<Reveal className="more-line" delay={80}>
			<p>
				Also:
				{#each moreClients as name, i}<b>{name}</b>{#if i < moreClients.length - 1} - {/if}{/each}
				and more.
			</p>
		</Reveal>
	</div>
</section>

<style>
	.section {
		padding: clamp(3rem, 7vw, 4.75rem) 0 0;
	}

	:global(.section-head) {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
		margin-bottom: 2.25rem;
	}

	.kicker {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.22em;
		color: var(--accent);
	}

	.section-title {
		max-width: 18ch;
		font-size: clamp(1.9rem, 4vw, 2.625rem);
		line-height: 1.05;
		letter-spacing: -0.03em;
		font-weight: 600;
	}

	.section-intro {
		max-width: 64ch;
		font-size: 1rem;
		color: var(--text-soft);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.875rem;
	}

	:global(.pcard-wrap) {
		height: 100%;
	}

	.pcard {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: linear-gradient(180deg, rgba(13, 16, 22, 0.92), rgba(9, 10, 15, 0.98));
		border: 1px solid rgba(160, 182, 227, 0.12);
		overflow: hidden;
		transition:
			transform 240ms ease,
			border-color 240ms ease,
			box-shadow 240ms ease;
	}

	.pcard:hover {
		transform: translateY(-4px);
		border-color: rgba(255, 193, 7, 0.28);
		box-shadow: var(--shadow-panel);
	}

	.pcard__media {
		position: relative;
		height: 200px;
		overflow: hidden;
		border-bottom: 1px solid rgba(160, 182, 227, 0.1);
		background: rgba(255, 255, 255, 0.03);
	}

	.pcard__media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		transition: transform 340ms ease;
	}

	.pcard:hover .pcard__media img {
		transform: scale(1.03);
	}

	.pcard__shade {
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, transparent 55%, rgba(8, 10, 15, 0.5));
	}

	.pcard__tag {
		position: absolute;
		top: 12px;
		left: 12px;
		padding: 5px 10px;
		font-family: var(--font-mono);
		font-size: 0.625rem;
		text-transform: uppercase;
		letter-spacing: 0.16em;
		color: var(--ink);
		background: var(--accent);
		font-weight: 500;
	}

	.pcard__tag--dark {
		color: var(--accent);
		background: rgba(7, 9, 13, 0.85);
		border: 1px solid rgba(255, 193, 7, 0.4);
	}

	.pcard__body {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1.25rem;
	}

	.pcard__title-row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 0.75rem;
	}

	.pcard__body h3 {
		font-size: 1.1875rem;
		font-weight: 600;
	}

	.pcard__domain {
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		color: rgba(191, 203, 230, 0.5);
	}

	.pcard__body p {
		font-size: 0.84rem;
		color: var(--text-soft);
	}

	.pcard__stack {
		font-family: var(--font-mono);
		font-size: 0.66rem !important;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: rgba(191, 203, 230, 0.5) !important;
		margin-top: 0.25rem;
	}

	:global(.more-line) {
		margin-top: 1.4rem;
	}

	:global(.more-line) p {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		letter-spacing: 0.06em;
		color: rgba(191, 203, 230, 0.55);
		line-height: 1.9;
	}

	:global(.more-line) b {
		color: rgba(233, 240, 255, 0.85);
		font-weight: 500;
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 560px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
