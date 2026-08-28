<script lang="ts">
	import { onMount } from 'svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import type { TerminalLine } from '$lib/data/site';

	interface Props {
		lines: TerminalLine[];
	}

	let { lines }: Props = $props();

	// SSR / no-JS default: everything already typed out (keeps text in the HTML).
	let termEl = $state<HTMLDivElement | undefined>();
	let visibleCount = $state(lines.length);
	let typed = $state(lines.map((l) => l.desc.length));
	let done = $state(true);
	let shown = $state(true);

	const CHARS_PER_SECOND = 105;
	const LINE_PAUSE_MS = 110;

	onMount(() => {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduceMotion || typeof IntersectionObserver === 'undefined') {
			return;
		}

		// Reset to the animated starting state now that JS has taken over.
		shown = false;
		visibleCount = 0;
		typed = lines.map(() => 0);
		done = false;

		let raf = 0;
		let cancelled = false;

		// Time-based typewriter: rate stays consistent regardless of frame
		// throttling, and it self-corrects after a background-tab pause.
		const run = () => {
			shown = true;
			let lineIndex = 0;
			let charFloat = 0;
			let pauseUntil = 0;
			let last = performance.now();
			visibleCount = 1;

			const step = (now: number) => {
				if (cancelled) return;
				const delta = now - last;
				last = now;

				if (now >= pauseUntil) {
					charFloat += (delta / 1000) * CHARS_PER_SECOND;
					const desc = lines[lineIndex].desc;
					typed[lineIndex] = Math.min(desc.length, Math.floor(charFloat));

					if (typed[lineIndex] >= desc.length) {
						lineIndex += 1;
						charFloat = 0;
						if (lineIndex >= lines.length) {
							done = true;
							return;
						}
						visibleCount = lineIndex + 1;
						pauseUntil = now + LINE_PAUSE_MS;
					}
				}

				raf = requestAnimationFrame(step);
			};

			raf = requestAnimationFrame(step);
		};

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting) {
					observer.disconnect();
					run();
				}
			},
			{ threshold: 0.35 }
		);

		if (termEl) {
			observer.observe(termEl);
		}

		return () => {
			cancelled = true;
			observer.disconnect();
			if (raf) {
				cancelAnimationFrame(raf);
			}
		};
	});
</script>

<section class="section" id="automation">
	<div class="container">
		<div class="auto-grid">
			<Reveal className="auto-head" delay={40}>
				<p class="kicker">Automation &amp; internal tools</p>
				<h2 class="auto-title">Software that gives people their time back.</h2>
				<p class="auto-intro">
					I sit with the team, find the workflow that wastes their afternoon, and replace it. Understanding
					the business need comes first - the code is the easy part. Recent builds:
				</p>
			</Reveal>

			<div class="terminal" class:is-shown={shown} bind:this={termEl}>
				<div class="terminal__head" aria-hidden="true">
					<span></span><span></span><span></span>
				</div>
				{#each lines as line, i}
					{#if i < visibleCount}
						<div class="tline">
							<span class="tname">{line.name}</span>
							<span class="tdesc"
								>{line.desc.slice(0, typed[i])}{#if !done && i === visibleCount - 1}<span
										class="cursor"
									></span>{/if}</span
							>
						</div>
					{/if}
				{/each}
				{#if done}
					<div class="tline"><span class="cursor" aria-hidden="true"></span></div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.section {
		padding: clamp(3rem, 7vw, 4.75rem) 0 0;
	}

	.auto-grid {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: 2.75rem;
		align-items: start;
	}

	:global(.auto-head) {
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

	.auto-title {
		font-size: clamp(1.7rem, 3.6vw, 2.625rem);
		line-height: 1.05;
		letter-spacing: -0.03em;
		font-weight: 600;
	}

	.auto-intro {
		max-width: 52ch;
		font-size: 1rem;
		color: var(--text-soft);
	}

	.terminal {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1.4rem 1.5rem;
		background: #05070a;
		border: 1px solid rgba(160, 182, 227, 0.14);
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		opacity: 1;
		transition: opacity 400ms ease;
	}

	.terminal:not(.is-shown) {
		opacity: 0;
	}

	.terminal__head {
		display: flex;
		gap: 7px;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid rgba(160, 182, 227, 0.1);
	}

	.terminal__head span {
		width: 9px;
		height: 9px;
		background: rgba(160, 182, 227, 0.25);
	}

	.tline {
		display: flex;
		gap: 0.875rem;
		align-items: baseline;
	}

	.tname {
		color: var(--accent);
		flex: 0 0 8.25rem;
	}

	.tdesc {
		color: var(--text-soft);
	}

	.cursor {
		display: inline-block;
		width: 8px;
		height: 15px;
		margin-left: 2px;
		transform: translateY(2px);
		background: var(--accent);
		animation: term-blink 1.1s steps(1) infinite;
	}

	@keyframes term-blink {
		50% {
			opacity: 0;
		}
	}

	@media (max-width: 860px) {
		.auto-grid {
			grid-template-columns: 1fr;
			gap: 1.75rem;
		}
	}

	@media (max-width: 520px) {
		.tline {
			flex-direction: column;
			gap: 0.15rem;
		}

		.tname {
			flex: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.terminal {
			opacity: 1;
		}

		.cursor {
			animation: none;
		}
	}
</style>
