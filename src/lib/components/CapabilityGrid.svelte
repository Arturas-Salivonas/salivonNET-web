<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import type { Capability } from '$lib/data/site';

	interface Props {
		groups: Capability[];
	}

	let { groups }: Props = $props();
</script>

{#snippet icon(num: string)}
	{#if num === '01'}
		<!-- Front-end: code brackets with a blinking cursor -->
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M8.5 7.5 L4.5 12 L8.5 16.5" />
			<path d="M15.5 7.5 L19.5 12 L15.5 16.5" />
			<line class="ico-blink" x1="12" y1="7.5" x2="12" y2="16.5" stroke="var(--accent)" />
		</svg>
	{:else if num === '02'}
		<!-- WordPress / CMS: a window with a running scanline -->
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<rect x="3.5" y="5" width="17" height="14" rx="1.2" />
			<path d="M3.5 8.6 H20.5" />
			<line class="ico-scan" x1="6" y1="12" x2="18" y2="12" stroke="var(--accent)" />
		</svg>
	{:else if num === '03'}
		<!-- SEO: rising bars that breathe, with a magnifier -->
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true">
			<line x1="4.5" y1="20" x2="4.5" y2="15" />
			<line class="ico-bar ico-bar-a" x1="9" y1="20" x2="9" y2="12" />
			<line class="ico-bar ico-bar-b" x1="13.5" y1="20" x2="13.5" y2="9" />
			<circle cx="17.5" cy="8.5" r="3.1" stroke="var(--accent)" stroke-width="1.6" />
			<line x1="19.8" y1="10.8" x2="21.6" y2="12.6" stroke="var(--accent)" stroke-width="1.6" />
		</svg>
	{:else if num === '04'}
		<!-- Ecommerce: a price tag with a pinging pulse -->
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M12.8 3.5 H20.5 V11.2 L12 19.7 L4.3 12 L12.8 3.5 Z" />
			<circle cx="16.6" cy="7.4" r="1.15" fill="currentColor" stroke="none" />
			<circle class="ico-ping" cx="11.5" cy="12" r="2.3" stroke="var(--accent)" stroke-width="1.5" />
		</svg>
	{:else if num === '05'}
		<!-- Automation / AI: connected nodes with signal flowing between them -->
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path class="ico-flow" d="M7 7 H17 M7.9 8.6 L11.4 15 M16.1 8.6 L12.6 15" stroke="var(--accent)" />
			<circle cx="6" cy="7" r="2" />
			<circle cx="18" cy="7" r="2" />
			<circle cx="12" cy="17" r="2" />
		</svg>
	{:else if num === '06'}
		<!-- Security: a shield with a checkmark, softly glowing -->
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path class="ico-shield" d="M12 3 L20 6 V11 C20 16 16.5 19.5 12 21 C7.5 19.5 4 16 4 11 V6 Z" />
			<path d="M8.5 11.6 L11 14.1 L15.6 8.8" stroke="var(--accent)" stroke-width="1.8" />
		</svg>
	{/if}
{/snippet}

<section class="section" id="expertise">
	<div class="container">
		<Reveal className="section-head" delay={40}>
			<p class="kicker">What I do</p>
			<h2 class="section-title">One person. The whole system.</h2>
		</Reveal>

		<div class="grid">
			{#each groups as group, index}
				<Reveal className="xcard" delay={index * 60 + 40}>
					<span class="xcard__glow" aria-hidden="true"></span>

					<div class="xcard__top">
						<span class="xcard__icon">{@render icon(group.num)}</span>
						<span class="xcard__num">{group.num}</span>
					</div>

					<h3>{group.title}</h3>
					<p>{group.description}</p>
					<ul>
						{#each group.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</Reveal>
			{/each}
		</div>
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
		font-size: clamp(1.9rem, 4vw, 2.625rem);
		line-height: 1.05;
		letter-spacing: -0.03em;
		font-weight: 600;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.875rem;
	}

	:global(.xcard) {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
		padding: 1.5rem 1.375rem;
		background: linear-gradient(180deg, rgba(14, 17, 24, 0.94), rgba(10, 12, 18, 0.94));
		border: 1px solid rgba(160, 182, 227, 0.12);
		transition:
			transform 240ms ease,
			border-color 240ms ease,
			background-color 240ms ease;
	}

	:global(.xcard)::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 82% 8%, rgba(255, 179, 0, 0.09), transparent 46%);
		opacity: 0;
		transition: opacity 300ms ease;
		pointer-events: none;
	}

	:global(.xcard):hover {
		transform: translateY(-4px);
		border-color: rgba(255, 193, 7, 0.28);
	}

	:global(.xcard):hover::before {
		opacity: 1;
	}

	/* A single amber arc that sweeps around the card border on hover */
	@property --xcard-ang {
		syntax: '<angle>';
		inherits: false;
		initial-value: 0deg;
	}

	.xcard__glow {
		position: absolute;
		inset: 0;
		padding: 1.5px;
		pointer-events: none;
		opacity: 0;
		transition: opacity 240ms ease;
		background: conic-gradient(
			from var(--xcard-ang),
			transparent 0deg 288deg,
			rgba(255, 179, 0, 0.12) 312deg,
			var(--accent) 344deg,
			transparent 360deg
		);
		-webkit-mask:
			linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask:
			linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		mask-composite: exclude;
		filter: drop-shadow(0 0 3px rgba(255, 179, 0, 0.5));
	}

	:global(.xcard):hover .xcard__glow {
		opacity: 1;
		animation: xcard-sweep 2.6s linear infinite;
	}

	@keyframes xcard-sweep {
		to {
			--xcard-ang: 360deg;
		}
	}

	.xcard__top {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.xcard__icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 46px;
		height: 46px;
		color: rgba(233, 240, 255, 0.72);
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(160, 182, 227, 0.14);
		transition:
			color 240ms ease,
			border-color 240ms ease,
			background-color 240ms ease;
	}

	.xcard__icon svg {
		width: 26px;
		height: 26px;
	}

	:global(.xcard):hover .xcard__icon {
		color: #ffffff;
		border-color: rgba(255, 193, 7, 0.36);
		background: rgba(255, 179, 0, 0.06);
	}

	.xcard__num {
		font-family: var(--font-mono);
		font-size: 0.82rem;
		letter-spacing: 0.24em;
		color: rgba(191, 203, 230, 0.5);
	}

	:global(.xcard) h3 {
		font-size: 1.1875rem;
		font-weight: 600;
		letter-spacing: -0.01em;
	}

	:global(.xcard) p {
		font-size: 0.84rem;
		color: var(--text-soft);
	}

	:global(.xcard) ul {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 0.15rem;
		list-style: none;
	}

	:global(.xcard) li {
		position: relative;
		padding-left: 0.95rem;
		font-size: 0.84rem;
		color: var(--text-main);
	}

	:global(.xcard) li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.5rem;
		width: 5px;
		height: 5px;
		background: var(--accent);
		box-shadow: 0 0 10px rgba(255, 179, 0, 0.4);
	}

	/* --- icon idle animations (subtle, always on) --- */
	.ico-blink {
		animation: ico-blink 1.4s steps(1) infinite;
	}

	@keyframes ico-blink {
		50% {
			opacity: 0;
		}
	}

	.ico-scan {
		transform-box: fill-box;
		transform-origin: center;
		animation: ico-scan 3.2s ease-in-out infinite;
	}

	@keyframes ico-scan {
		0%,
		100% {
			transform: translateY(-3px);
			opacity: 0.35;
		}
		50% {
			transform: translateY(3.5px);
			opacity: 1;
		}
	}

	.ico-bar {
		transform-box: fill-box;
		transform-origin: bottom;
		animation: ico-bar 2.8s ease-in-out infinite;
	}

	.ico-bar-b {
		animation-delay: 0.5s;
	}

	@keyframes ico-bar {
		0%,
		100% {
			transform: scaleY(1);
		}
		50% {
			transform: scaleY(0.55);
		}
	}

	.ico-ping {
		transform-box: fill-box;
		transform-origin: center;
		animation: ico-ping 2.6s ease-out infinite;
	}

	@keyframes ico-ping {
		0% {
			transform: scale(0.5);
			opacity: 0.9;
		}
		70% {
			transform: scale(1.5);
			opacity: 0;
		}
		100% {
			transform: scale(1.5);
			opacity: 0;
		}
	}

	.ico-flow {
		stroke-dasharray: 4 7;
		animation: ico-flow 1.6s linear infinite;
	}

	@keyframes ico-flow {
		to {
			stroke-dashoffset: -11;
		}
	}

	.ico-shield {
		animation: ico-shield 3s ease-in-out infinite;
	}

	@keyframes ico-shield {
		0%,
		100% {
			opacity: 0.62;
		}
		50% {
			opacity: 1;
		}
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

	@media (prefers-reduced-motion: reduce) {
		.ico-blink,
		.ico-scan,
		.ico-bar,
		.ico-ping,
		.ico-flow,
		.ico-shield,
		:global(.xcard):hover .xcard__glow {
			animation: none;
		}

		.ico-scan,
		.ico-shield {
			opacity: 1;
		}
	}
</style>
