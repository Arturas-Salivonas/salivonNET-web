<script lang="ts">
	import type { SiteData } from '$lib/data/site';
	import Reveal from '$lib/components/Reveal.svelte';

	interface Props {
		site: SiteData;
	}

	let { site }: Props = $props();
</script>

<section class="hero" id="top">
	<div class="hero__grid" aria-hidden="true"></div>
	<div class="container">
		<div class="hero__inner">
			<Reveal className="hero__copy" delay={60}>
				<p class="kicker">{@html site.kickerHtml}</p>
				<h1 class="hero__title">{@html site.headlineHtml}</h1>
				<p class="hero__lede">{site.intro}</p>
				<div class="hero__cta">
					<a class="btn btn--primary" href="mailto:{site.email}">Email me</a>
					{#each site.socials as social}
						<a
							class="btn btn--ghost"
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="{social.label} profile"
						>
							{#if social.label === 'GitHub'}
								<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
							{:else if social.label === 'LinkedIn'}
								<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
							{/if}
							<span>{social.label}</span>
						</a>
					{/each}
				</div>
			</Reveal>

			<Reveal className="hero__delta" delay={160}>
				<div class="delta">
					<svg viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Build, Rank, Automate - the three disciplines Arturas works across, with Arturas at the centre">
						<defs>
							<clipPath id="delta-avatar-clip"><circle cx="260" cy="301" r="38" /></clipPath>
						</defs>
						<path class="delta__frame" d="M260 70 L440 416 L80 416 Z" stroke="rgba(160,182,227,0.22)" stroke-width="1.5" fill="none" />
						<g class="delta__rotor">
							<path d="M260 134.6 L389.6 383.7 L130.4 383.7 Z" stroke="var(--accent)" stroke-opacity="0.34" stroke-width="1" fill="none" />
							<path d="M260 189.9 L346.4 356 L173.6 356 Z" stroke="var(--accent)" stroke-opacity="0.2" stroke-width="1" fill="none" />
							<path d="M260 236.1 L310.4 333 L209.6 333 Z" stroke="var(--accent)" stroke-opacity="0.12" stroke-width="1" fill="none" />
						</g>
						<path class="delta__pulse" d="M260 70 L440 416 L80 416 Z" />
						<path class="delta__pulse delta__pulse--2" d="M260 70 L440 416 L80 416 Z" />
						<circle class="delta__ring" cx="260" cy="70" r="8" stroke="var(--accent)" stroke-width="1.5" fill="none" />
						<circle class="delta__ring delta__ring--2" cx="80" cy="416" r="8" stroke="var(--accent)" stroke-width="1.5" fill="none" />
						<circle class="delta__ring delta__ring--3" cx="440" cy="416" r="8" stroke="var(--accent)" stroke-width="1.5" fill="none" />
						<circle cx="260" cy="70" r="4.5" fill="var(--accent)" />
						<circle cx="80" cy="416" r="4.5" fill="var(--accent)" />
						<circle cx="440" cy="416" r="4.5" fill="var(--accent)" />
						<text class="delta__label" x="260" y="36" text-anchor="middle">BUILD</text>
						<text class="delta__cap" x="260" y="53" text-anchor="middle">front-end - wordpress - ecommerce</text>
						<text class="delta__label" x="80" y="447" text-anchor="middle">RANK</text>
						<text class="delta__cap" x="80" y="464" text-anchor="middle">technical seo - e-e-a-t</text>
						<text class="delta__label" x="440" y="447" text-anchor="middle">AUTOMATE</text>
						<text class="delta__cap" x="440" y="464" text-anchor="middle">apis - internal tools</text>
						<circle cx="260" cy="301" r="42" fill="#07090d" />
						<circle class="delta__scan" cx="260" cy="301" r="46" fill="none" stroke="var(--accent)" stroke-width="1" stroke-opacity="0.3" stroke-dasharray="3 7" />
						<image href="/arturas-avatar.webp" x="222" y="263" width="76" height="76" preserveAspectRatio="xMidYMid slice" clip-path="url(#delta-avatar-clip)" />
						<circle cx="260" cy="301" r="38" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-opacity="0.85" />
					</svg>
					<p class="delta__note">// where the three meet is where I work</p>
				</div>
			</Reveal>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		overflow: hidden;
	}

	.hero__grid {
		position: absolute;
		inset: 0;
		pointer-events: none;
		background-image:
			linear-gradient(rgba(255, 193, 7, 0.07) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 193, 7, 0.07) 1px, transparent 1px);
		background-size: 80px 80px;
		opacity: 0.12;
		transform: perspective(1000px) rotateX(74deg) translateY(-20%);
		transform-origin: top center;
	}

	.hero__inner {
		position: relative;
		display: grid;
		grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
		gap: 3.5rem;
		align-items: center;
		padding: clamp(2.5rem, 6vw, 5.25rem) 0 3.5rem;
	}

	.kicker {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.22em;
		color: var(--accent);
	}

	.kicker :global(.who) {
		color: var(--text-main);
	}

	.hero__title {
		margin: 1.1rem 0 1.35rem;
		font-size: clamp(2.6rem, 6vw, 3.875rem);
		line-height: 1.02;
		letter-spacing: -0.035em;
		font-weight: 600;
	}

	.hero__title :global(.hl) {
		color: var(--accent);
	}

	.hero__lede {
		max-width: 54ch;
		font-size: 1.0625rem;
		color: var(--text-soft);
	}

	.hero__cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 1.85rem;
		align-items: center;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.625rem;
		padding: 0.875rem 1.375rem;
		font-size: 0.9375rem;
		font-weight: 500;
		border: 1px solid transparent;
		transition:
			transform 200ms ease,
			border-color 200ms ease,
			filter 200ms ease;
	}

	.btn:hover {
		transform: translateY(-2px);
	}

	.btn :global(svg) {
		display: block;
	}

	.btn--primary {
		background: var(--accent);
		color: var(--ink);
		font-weight: 600;
	}

	.btn--primary:hover {
		color: var(--ink);
		filter: brightness(1.06);
	}

	.btn--ghost {
		border-color: rgba(160, 182, 227, 0.24);
		color: var(--text-main);
	}

	.btn--ghost:hover {
		border-color: var(--accent);
		color: var(--text-main);
	}

	:global(.hero__delta) {
		display: flex;
		justify-content: center;
	}

	.delta {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.9rem;
		width: 100%;
		max-width: 30rem;
	}

	.delta svg {
		width: 100%;
		height: auto;
	}

	.delta__note {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.14em;
		color: rgba(191, 203, 230, 0.55);
	}

	.delta__label {
		font-family: var(--font-mono);
		font-size: 13px;
		letter-spacing: 0.24em;
		fill: var(--text-main);
	}

	.delta__cap {
		font-family: var(--font-mono);
		font-size: 10.5px;
		letter-spacing: 0.06em;
		fill: rgba(191, 203, 230, 0.55);
	}

	.delta__rotor {
		transform-origin: 260px 301px;
		animation: delta-spin 60s linear infinite;
	}

	.delta__pulse {
		stroke: var(--accent);
		stroke-width: 2;
		fill: none;
		stroke-dasharray: 70 1070;
		animation: delta-travel 6s linear infinite;
	}

	.delta__pulse--2 {
		animation-delay: -3s;
		opacity: 0.65;
	}

	.delta__ring {
		transform-box: fill-box;
		transform-origin: center;
		animation: delta-ping 2.8s ease-out infinite;
	}

	.delta__ring--2 {
		animation-delay: 0.9s;
	}

	.delta__ring--3 {
		animation-delay: 1.8s;
	}

	.delta__scan {
		transform-box: fill-box;
		transform-origin: center;
		animation: delta-scan 24s linear infinite;
	}

	@keyframes delta-scan {
		to {
			transform: rotate(-360deg);
		}
	}

	@keyframes delta-spin {
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes delta-travel {
		to {
			stroke-dashoffset: -1140;
		}
	}

	@keyframes delta-ping {
		0% {
			transform: scale(0.4);
			opacity: 0.9;
		}
		75% {
			transform: scale(2.3);
			opacity: 0;
		}
		100% {
			transform: scale(2.3);
			opacity: 0;
		}
	}

	@media (max-width: 960px) {
		.hero__inner {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.hero__grid {
			opacity: 0.07;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.delta__rotor,
		.delta__pulse,
		.delta__ring,
		.delta__scan {
			animation: none;
		}

		.btn:hover {
			transform: none;
		}
	}
</style>
