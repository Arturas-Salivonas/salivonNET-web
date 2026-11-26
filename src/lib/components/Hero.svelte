<script lang="ts">
	import { untrack } from 'svelte';
	import { prefersReducedMotion } from 'svelte/motion';
	import { inView } from '#lib/attachments/in-view.ts';
	import Button from '#lib/components/Button.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { answer, lead, problems, skills } from '#lib/content/hero.ts';

	/** One lap of a demo's animation (see `--loop` in styles/sketch.css). */
	const TURN_MS = 4200;

	/*
	 * The four skill tiles take turns. While a tile plays, the headline problem it
	 * answers lights up with it. Pointing at a tile or a headline line holds the turn.
	 */
	let turn = $state(-1);
	let held = $state(false);
	let onScreen = $state(false);
	let tabVisible = $state(true);

	const running = $derived(onScreen && tabVisible && !prefersReducedMotion.current);
	const playing = $derived(running ? turn : -1);
	const litProblem = $derived(skills[playing]?.answers ?? -1);

	$effect(() => {
		if (!running || held) return;

		const advance = () => (turn = (untrack(() => turn) + 1) % skills.length);
		advance();

		const timer = setInterval(advance, TURN_MS);
		return () => clearInterval(timer);
	});

	function hold(index: number) {
		turn = index;
		held = true;
	}

	function release() {
		held = false;
	}
</script>

<svelte:document onvisibilitychange={() => (tabVisible = !document.hidden)} />

<section class="wrap hero" id="top">
	<div>
		<h1>
			{#each problems as problem, index (problem)}
				<span
					class:is-lit={index === litProblem}
					role="presentation"
					onmouseenter={() => hold(skills.findIndex((skill) => skill.answers === index))}
					onmouseleave={release}
				>
					{problem}
				</span>
			{/each}
			<em>{answer}</em>
		</h1>

		<p class="lead">{lead}</p>

		<div class="actions">
			<Button href="#contact" variant="primary">Let's talk <Icon name="arrow" /></Button>
			<Button href="#tools">See what I've built</Button>
		</div>
	</div>

	<div class="tiles" {@attach inView((visible) => (onScreen = visible), { threshold: 0.15 })}>
		{#each skills as skill, index (skill.name)}
			<a
				class="tile cut cut-piece sketch-host"
				class:is-live={index === playing}
				href="#tools"
				onmouseenter={() => hold(index)}
				onmouseleave={release}
			>
				<div class="sketch demo" aria-hidden="true"><skill.demo /></div>
				<p class="name">{skill.name}</p>
				<p class="caption">
					{skill.caption}
					{#if skill.detail}<span class="sr-only">{skill.detail}</span>{/if}
				</p>
			</a>
		{/each}
	</div>
</section>

<style>
	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
		gap: clamp(28px, 5vw, 64px);
		align-items: center;
		padding-block: clamp(32px, 6vw, 76px) clamp(28px, 4vw, 56px);
	}

	h1 {
		font-size: clamp(34px, 5vw, 60px);
		font-weight: 900;
		line-height: 1.02;
		letter-spacing: -0.035em;
		text-wrap: wrap;
	}

	h1 span,
	h1 em {
		display: block;
		font-style: normal;
		transition: color 0.3s ease;
	}

	h1 em,
	h1 .is-lit {
		color: var(--color-accent-bright);
	}

	.lead {
		max-width: 24em;
		margin-top: 22px;
		font-size: clamp(18px, 1.7vw, 22px);
		font-weight: 500;
		line-height: 1.4;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-top: 28px;
	}

	.tiles {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 18px;
	}

	.tile {
		display: flex;
		flex-direction: column;
		gap: 9px;
		min-width: 0;
		padding: 12px 12px 16px;
		color: var(--panel-text);
		transition: transform 0.3s ease;
	}

	.tile:is(:hover, .is-live) {
		transform: translateY(-4px);
	}

	.demo {
		display: grid;
		align-items: center;
		height: 104px;
		padding: 11px;
	}

	.name {
		padding-inline: 4px;
		color: var(--panel-ink);
		font-family: var(--font-display);
		font-size: 18px;
		font-weight: 800;
		line-height: 1.15;
		letter-spacing: -0.015em;
	}

	.caption {
		padding-inline: 4px;
		color: var(--panel-muted);
		font-size: 14.5px;
		font-weight: 600;
		line-height: 1.3;
	}

	@media (max-width: 980px) {
		.hero {
			grid-template-columns: minmax(0, 1fr);
		}
	}

	@media (max-width: 560px) {
		/* Slimmer buttons, so both fit on one row on all but the narrowest phones. */
		.actions {
			gap: 12px;
		}

		.actions :global(.button) {
			flex: 1 1 auto;
			min-height: 50px;
			padding-inline: 16px;
			font-size: 15.5px;
		}

		/* One tile per row, with the demo on the left and the words beside it. */
		.tiles {
			grid-template-columns: minmax(0, 1fr);
			gap: 14px;
		}

		.tile {
			display: grid;
			grid-template-columns: 52% minmax(0, 1fr);
			grid-template-rows: 1fr 1fr;
			gap: 5px 12px;
			padding: 10px 14px 10px 10px;
		}

		.demo {
			grid-row: span 2;
			height: 100px;
			padding: 9px;
		}

		.name {
			align-self: end;
			padding: 0;
			font-size: 17px;
		}

		.caption {
			align-self: start;
			padding: 0;
			font-size: 14px;
		}
	}
</style>
