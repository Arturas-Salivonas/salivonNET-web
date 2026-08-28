<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import type { MedicalCard } from '$lib/data/site';

	interface Props {
		cards: MedicalCard[];
	}

	let { cards }: Props = $props();
</script>

<section class="section" id="medical">
	<div class="container">
		<Reveal className="band" delay={40}>
			<div class="band__head">
				<p class="kicker">Medical &amp; regulated</p>
				<h2 class="band__title">Healthcare work is different. I build for that.</h2>
				<p class="band__intro">
					Clinics and health platforms live with regulation, patient trust and real consequences. My medical
					work runs in production today.
				</p>
			</div>
			<div class="ecg" aria-hidden="true">
				<svg viewBox="0 0 1000 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
					<path
						class="ecg__base"
						d="M0 36 H300 l12 0 l6 6 l8 -34 l8 40 l6 -18 l10 6 H640 l6 6 l8 -34 l8 40 l6 -18 l10 6 H1000"
					/>
					<path
						class="ecg__pulse"
						d="M0 36 H300 l12 0 l6 6 l8 -34 l8 40 l6 -18 l10 6 H640 l6 6 l8 -34 l8 40 l6 -18 l10 6 H1000"
					/>
				</svg>
			</div>

			<div class="band__cards">
				{#each cards as card}
					<div class="bcard">
						<h3>{card.title}</h3>
						<p>{card.body}</p>
					</div>
				{/each}
			</div>
			<p class="band__foot">
				In production for <b>London Gynaecology</b> and <b>TreatmentCosts</b> - private clinic tooling, patient
				booking, clinical content.
			</p>
		</Reveal>
	</div>
</section>

<style>
	.section {
		padding: clamp(3rem, 7vw, 4.75rem) 0 0;
	}

	:global(.band) {
		display: flex;
		flex-direction: column;
		gap: 1.9rem;
		padding: clamp(1.75rem, 4vw, 2.75rem);
		border: 1px solid rgba(255, 193, 7, 0.18);
		background: linear-gradient(180deg, rgba(14, 17, 24, 0.9), rgba(9, 11, 16, 0.96));
	}

	.band__head {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.kicker {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.22em;
		color: var(--accent);
	}

	.band__title {
		font-size: clamp(1.7rem, 3.6vw, 2.625rem);
		line-height: 1.05;
		letter-spacing: -0.03em;
		font-weight: 600;
	}

	.band__intro {
		max-width: 64ch;
		font-size: 1rem;
		color: var(--text-soft);
	}

	.ecg {
		margin: 0.2rem 0 0.1rem;
	}

	.ecg svg {
		display: block;
		width: 100%;
		height: 46px;
	}

	.ecg__base {
		fill: none;
		stroke: rgba(160, 182, 227, 0.16);
		stroke-width: 1.4;
	}

	.ecg__pulse {
		fill: none;
		stroke: var(--accent);
		stroke-width: 2.2;
		stroke-linecap: round;
		stroke-dasharray: 74 1180;
		filter: drop-shadow(0 0 5px rgba(255, 179, 0, 0.6));
		animation: ecg-run 4.6s linear infinite;
	}

	@keyframes ecg-run {
		from {
			stroke-dashoffset: 0;
		}
		to {
			stroke-dashoffset: -1254;
		}
	}

	.band__cards {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.75rem;
	}

	@media (prefers-reduced-motion: reduce) {
		.ecg__pulse {
			animation: none;
			opacity: 0.5;
		}
	}

	.bcard {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		padding-top: 1rem;
		border-top: 1px solid rgba(160, 182, 227, 0.14);
	}

	.bcard h3 {
		font-size: 1.0625rem;
		font-weight: 600;
	}

	.bcard p {
		font-size: 0.84rem;
		color: var(--text-soft);
	}

	.band__foot {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		color: rgba(191, 203, 230, 0.55);
		line-height: 1.7;
	}

	.band__foot b {
		color: var(--accent);
		font-weight: 500;
	}

	@media (max-width: 760px) {
		.band__cards {
			grid-template-columns: 1fr;
			gap: 1.25rem;
		}
	}
</style>
