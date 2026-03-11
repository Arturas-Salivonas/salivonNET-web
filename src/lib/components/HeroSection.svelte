<script lang="ts">
	import type { Metric, SocialLink } from '$lib/data/site';
	import Reveal from '$lib/components/Reveal.svelte';

	interface SiteHero {
		name: string;
		heroRoleHtml: string;
		heroHeadlineHtml: string;
		intro: string;
		profileImage: string;
		socials: SocialLink[];
	}

	interface Props {
		site: SiteHero;
		metrics: Metric[];
	}

	let { site, metrics }: Props = $props();
</script>

<section class="hero" id="top">
	<div class="hero__noise"></div>
	<div class="hero__grid"></div>
	<div class="hero__orb hero__orb--a"></div>
	<div class="hero__orb hero__orb--b"></div>

	<div class="container hero__inner">


		<div class="hero__content">
			<Reveal className="hero__copy" delay={80}>
				<p class="hero__eyebrow">{@html site.heroRoleHtml}</p>
				<h1>{@html site.heroHeadlineHtml}</h1>
				<p class="hero__lede">{site.intro}</p>

							<div class="panel-card__actions">
								{#each site.socials as social}
									<a
										class:button--compact={!social.detail}
										class="button button--social"
										data-social={social.label.toLowerCase()}
										href={social.href}
										target="_blank"
										rel="noreferrer"
									>
										<span>{social.label}</span>
										{#if social.detail}
											<small>{social.detail}</small>
										{/if}
									</a>
								{/each}
							</div>
			</Reveal>

			<Reveal className="hero__panel" delay={180}>
				<div class="panel-card">


					<div class="panel-card__body">
						<div class="panel-card__portrait-wrap">
							<img class="panel-card__portrait" src={site.profileImage} alt={site.name} width="420" height="520" />
						</div>

						<div class="panel-card__terminal">
						<p class="panel-card__label">Short.intro</p>
							<p class="panel-card__value">UK based / Remote first / Love Web3 & AI</p>
							<p class="panel-card__label">Preferred.tech.stack</p>
							<p class="panel-card__value">WordPress / TypeScript / SvelteKit  / React / Next.js / GraphQL</p>
							<p class="panel-card__label">What.i.care.about</p>
							<p class="panel-card__value">Technical SEO / performance / clean UI</p>



						</div>
					</div>
				</div>
			</Reveal>
		</div>

		<Reveal className="signal-strip" delay={260}>
			{#each metrics as metric}
				<article>
					<strong>{metric.value}</strong>
					<h2>{metric.label}</h2>
					<p>{metric.detail}</p>
				</article>
			{/each}
		</Reveal>
	</div>
</section>

<style>
	.hero {
		position: relative;
		padding: 4.5rem 0 4rem;
		overflow: clip;
	}

	.hero__inner {
		position: relative;
		z-index: 1;
	}

	.hero__noise,
	.hero__grid {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.hero__noise {
		background-image: radial-gradient(rgba(255, 255, 255, 0.04) 0.6px, transparent 0.6px);
		background-size: 14px 14px;
		opacity: 0.15;
		mask-image: radial-gradient(circle at center, black 0%, transparent 82%);
	}

	.hero__grid {
		background-image:
			linear-gradient(rgba(255, 193, 7, 0.08) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 193, 7, 0.08) 1px, transparent 1px);
		background-size: 80px 80px;
		opacity: 0.1;
		transform: perspective(1000px) rotateX(76deg) translateY(-18%);
		transform-origin: top center;
	}

	.hero__orb {
		position: absolute;

		filter: blur(60px);
		opacity: 0.35;
		animation: drift 12s ease-in-out infinite;
	}

	.hero__orb--a {
		right: -10rem;
		top: 4rem;
		width: 24rem;
		height: 24rem;
		background: rgba(255, 193, 7, 0.2);
	}

	.hero__orb--b {
		left: -8rem;
		bottom: 2rem;
		width: 20rem;
		height: 20rem;
		background: rgba(255, 179, 0, 0.1);
		animation-delay: -4s;
	}

	.hero__content {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
		gap: 2rem;
		 align-items: end;
	}

	:global(.hero__copy) h1 {
		max-width: 12ch;
		font-size: clamp(3.2rem, 8vw, 5rem);
		line-height: 1;
		letter-spacing: -0.06em;
		margin-bottom: 1.25rem;
	}

	.hero__eyebrow {
		margin-bottom: 1rem;
		color: var(--accent-2);
		text-transform: uppercase;
		letter-spacing: 0.22em;
		font-size: 0.82rem;
	}

	.hero__eyebrow :global(.hero__role-name) {
		color: #ffffff;
		font-weight: 700;
	}

	.hero__lede {
		max-width: 62ch;
		font-size: 1.08rem;
		color: var(--text-soft);
		margin-bottom: 1.75rem;
	}

	:global(.hero__headline-line) {
		display: inline;
	}

	:global(.hero__headline-break) {
		display: block;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 3.25rem;
		padding: 0 1.25rem;

		border: 1px solid rgba(160, 182, 227, 0.16);
		font-size: 0.95rem;
		transition:
			transform 220ms ease,
			border-color 220ms ease,
			background-color 220ms ease,
			box-shadow 220ms ease;
	}

	.button:hover {
		transform: translateY(-2px);
		box-shadow: 0 14px 34px rgba(0, 0, 0, 0.24);
	}

	.button--social {
		min-width: 0;
		justify-content: center;
		gap: 0.75rem;
		padding: 0.85rem 1rem;

		width: 100%;
	}

	.button--social span,
	.button--social small {
		display: block;
	}

	.button--social span {
		font-size: 0.95rem;
		font-weight: 500;
	}

	.button--compact {
		min-height: 3.5rem;
	}

	.button--social small {
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--muted);
	}

	.button--social[data-social='github'] {
		background:
			linear-gradient(180deg, rgba(14, 17, 24, 0.92), rgba(8, 10, 14, 0.98)),
			repeating-linear-gradient(90deg, rgba(255, 193, 7, 0.06) 0 1px, transparent 1px 14px);
		border-color: rgba(255, 193, 7, 0.24);
	}

	.button--social[data-social='linkedin'] {
		background: linear-gradient(135deg, rgba(255, 193, 7, 0.18), rgba(255, 145, 0, 0.08));
		border-color: rgba(255, 193, 7, 0.28);
	}

	.button--social:hover {
		border-color: rgba(255, 193, 7, 0.34);
	}




	:global(.hero__panel) {
		min-height: 100%;
	}

	.panel-card {
		position: relative;
		padding: 1.1rem;

		background: linear-gradient(180deg, rgba(18, 22, 32, 0.94), rgba(10, 12, 18, 0.92));
		border: 1px solid rgba(160, 182, 227, 0.14);
		box-shadow: var(--shadow-panel);
		overflow: hidden;
		transition:
			transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1),
			border-color 260ms ease,
			box-shadow 260ms ease,
			background-color 260ms ease;
	}

	.panel-card::after {
		content: '';
		position: absolute;
		inset: auto -20% -40% auto;
		width: 14rem;
		height: 14rem;

		background: radial-gradient(circle, rgba(255, 193, 7, 0.16) 0%, transparent 70%);
	}

	.panel-card:hover {
		transform: translate3d(0, -6px, 0);
		border-color: rgba(255, 193, 7, 0.26);
		box-shadow: 0 34px 90px rgba(0, 0, 0, 0.42);
	}

	.panel-card__body {
		display: grid;
		gap: 1rem;
	}

	.panel-card__portrait-wrap {
		position: relative;

		overflow: hidden;
		background:
			linear-gradient(135deg, rgba(255, 193, 7, 0.16), transparent 56%),
			radial-gradient(circle at top, rgba(255, 153, 0, 0.1), transparent 46%),
			#0d1017;
		transition: transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1);
	}

	.panel-card__portrait-wrap::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, transparent, rgba(7, 8, 11, 0.46));
	}

	.panel-card__portrait {
		width: 100%;
		height: clamp(18rem, 34vw, 22rem);
		object-fit: cover;
		object-position: center top;
		filter: saturate(0.92) contrast(1.04);
		transition: transform 380ms cubic-bezier(0.2, 0.8, 0.2, 1);
	}

	.panel-card:hover .panel-card__portrait-wrap {
		transform: translate3d(0, -2px, 0);
	}

	.panel-card:hover .panel-card__portrait {
		transform: scale(1.02);
	}

	.panel-card__terminal {
		display: grid;
		gap: 0.4rem;
		padding: 1rem;

		background: rgba(8, 9, 13, 0.78);
		border: 1px solid rgba(160, 182, 227, 0.1);
		transition:
			border-color 260ms ease,
			background-color 260ms ease,
			transform 260ms ease;
	}

	.panel-card:hover .panel-card__terminal {
		border-color: rgba(255, 193, 7, 0.16);
		background: rgba(10, 11, 16, 0.86);
	}

	.panel-card__terminal p {
		font-family: var(--font-mono);
		font-size: 0.84rem;
		color: var(--text-soft);
	}

	.panel-card__label {
		color: #ffc107 !important;
		letter-spacing: 0.12em;
		text-transform: lowercase;
	}

	.panel-card__value {
		margin-bottom: 0.3rem;
	}

	.panel-card__actions {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.75rem;
		margin-top: 0.55rem;
	}

	:global(.signal-strip) {
		margin-top: 1.8rem;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 1rem;
	}

	:global(.signal-strip) article {
		padding: 1.2rem;

		background: rgba(12, 14, 20, 0.7);
		border: 1px solid rgba(160, 182, 227, 0.11);
		transition:
			transform 220ms ease,
			border-color 220ms ease,
			background-color 220ms ease;
	}

	:global(.signal-strip) article:hover {
		transform: translateY(-3px);
		border-color: rgba(255, 193, 7, 0.18);
		background: rgba(16, 18, 25, 0.84);
	}

	:global(.signal-strip) strong {
		display: block;
		font-size: 1.6rem;
		font-weight: 500;
		letter-spacing: -0.05em;
		margin-bottom: 0.4rem;
		color:#ffc107;
	}

	:global(.signal-strip) h2 {
		font-size: 0.92rem;
		font-weight: 500;
		margin-bottom: 0.45rem;
		text-transform: lowercase;
	}

	:global(.signal-strip) p {
		font-size: 0.85rem;
		color: var(--muted);
	}

	@keyframes drift {
		0%,
		100% {
			transform: translate3d(0, 0, 0);
		}
		50% {
			transform: translate3d(0, -18px, 0);
		}
	}

	@media (max-width: 960px) {
		.hero__content,
		:global(.signal-strip) {
			grid-template-columns: 1fr;
		}

		:global(.hero__copy) h1 {
			max-width: 10ch;
		}
	}

	@media (max-width: 640px) {
		.hero {
			padding-top: 1.1rem;
		}

		:global(.hero__copy) h1 {
			font-size: clamp(2.8rem, 18vw, 3rem);
		}
	}

	@media (pointer: coarse) {
		.hero__grid {
			transform: none;
			opacity: 0.05;
		}

		.hero__orb {
			display: none;
		}

		.panel-card,
		.panel-card__portrait-wrap,
		.panel-card__portrait,
		.panel-card__terminal {
			transition: none;
		}

		.panel-card__portrait {
			filter: none;
		}
	}
</style>