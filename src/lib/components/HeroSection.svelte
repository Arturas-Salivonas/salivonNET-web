<script lang="ts">
	import type { SocialLink } from '$lib/data/site';
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
	}

	let { site }: Props = $props();
</script>

<section class="hero" id="top">
	<div class="hero__noise"></div>
	<div class="hero__grid"></div>

	<div class="container hero__inner">


		<div class="hero__content">
			<Reveal className="hero__copy" delay={80}>
				<p class="hero__eyebrow">{@html site.heroRoleHtml}</p>
				<h1>{@html site.heroHeadlineHtml}</h1>
				<p class="hero__lede">{site.intro}</p>

							<div class="panel-card__actions">
								{#each site.socials as social}
									<a
									class="button button--social"
									data-social={social.label.toLowerCase()}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="{social.label} profile"
								>
									{#if social.label === 'GitHub'}
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
									{:else if social.label === 'LinkedIn'}
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
									{/if}
									<span>{social.label}</span>
									</a>
								{/each}
							</div>
			</Reveal>

			<Reveal className="hero__panel" delay={180}>
				<div class="panel-card">


					<div class="panel-card__body">
						<div class="panel-card__portrait-wrap">
							<img class="panel-card__portrait" src={site.profileImage} alt={site.name} width="420" height="520" fetchpriority="high" loading="eager" decoding="async" />
						</div>

						<div class="panel-card__terminal">
						<p class="panel-card__label">Short.intro</p>
							<p class="panel-card__value">UK based / Remote first / Interested in Web3 & AI</p>
							<p class="panel-card__label">Preferred.tech.stack</p>
							<p class="panel-card__value">WordPress / TypeScript / Svelte  / React / Next.js / GraphQL</p>
							<p class="panel-card__label">What.i.care.about</p>
							<p class="panel-card__value">Technical SEO / Performance / Clean UI</p>



						</div>
					</div>
				</div>
			</Reveal>
		</div>

	</div>
</section>

<style>
	.hero {
		position: relative;
		padding: 4.5rem 0 1rem;
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


	.hero__content {
		display: grid;
		grid-template-columns: minmax(0, 1.6fr) minmax(382px, 0.4fr);
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

	.button--social span {
		font-size: 0.95rem;
		font-weight: 500;
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
		height: clamp(16rem, 34vw, 16rem);
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
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
		margin-top: 0.55rem;
	}

	@media (max-width: 960px) {
		.hero__content {
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