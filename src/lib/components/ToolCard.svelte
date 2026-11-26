<script module lang="ts">
	import { MediaQuery } from 'svelte/reactivity';

	// Touch screens cannot hover, so there a card plays while it is on screen instead.
	const touchOnly = new MediaQuery('hover: none');
</script>

<script lang="ts">
	import { inView } from '#lib/attachments/in-view.ts';
	import type { Tool } from '#lib/content/tools.ts';

	interface Props {
		tool: Tool;
		hidden?: boolean;
	}

	let { tool, hidden = false }: Props = $props();

	let live = $state(false);
</script>

<!--
	A tool, presented as a product: the animated sketch on one side, and on the other what it
	is, what the business gets and who else it suits.
-->
<article
	class="tool cut cut-piece sketch-host"
	class:is-live={live}
	{hidden}
	{@attach touchOnly.current && inView((visible) => (live = visible), { threshold: 0.5 })}
>
	<div class="visual" aria-hidden="true">
		<div class="sketch stage"><tool.sketch /></div>
	</div>

	<div class="body">
		<p class="result">{tool.result}</p>
		<h3>{tool.name}</h3>
		<p class="pitch">{tool.pitch}</p>

		<ul class="points">
			{#each tool.points as point (point.benefit)}
				<li><b>{point.benefit}</b> {point.how}</li>
			{/each}
		</ul>

		<p class="fit"><span>I'd build this for</span>{tool.fit}</p>
	</div>
</article>

<style>
	/* Wide screens: the sketch panel on the left, the words on the right. */
	.tool {
		display: grid;
		grid-template-columns: minmax(0, 0.82fr) minmax(0, 1fr);
		gap: clamp(24px, 3vw, 40px);
		padding: 12px;
		color: var(--panel-text);
	}

	/*
	 * The panel runs the full height of the card. The sketch keeps its own 16:9 shape and
	 * sits in the middle of it, so a long description never stretches the drawing.
	 */
	.visual {
		display: grid;
		align-items: center;
		border-radius: 3px;
		background: var(--panel-stage);
	}

	.stage {
		width: 100%;
		aspect-ratio: 16 / 9;
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: clamp(14px, 2vw, 24px) clamp(16px, 2.6vw, 32px) clamp(14px, 2vw, 20px) 0;
	}

	.result {
		color: var(--panel-accent);
		font-size: 12.5px;
		font-weight: 700;
		line-height: 1.3;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	h3 {
		color: var(--panel-ink);
		font-size: clamp(21px, 2.2vw, 25px);
	}

	.pitch {
		max-width: 40em;
		color: var(--panel-ink);
		font-size: 16px;
		font-weight: 500;
		line-height: 1.45;
	}

	.points {
		display: grid;
		gap: 9px;
		margin-block: 12px 20px;
	}

	.points li {
		position: relative;
		padding-left: 18px;
		font-size: 15px;
		line-height: 1.45;
	}

	/* A small delta, like the logo, instead of a bullet. */
	.points li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.42em;
		width: 9px;
		height: 8px;
		background: var(--color-accent);
		clip-path: polygon(50% 0, 100% 100%, 0 100%);
	}

	.points b {
		color: var(--panel-ink);
		font-weight: 700;
	}

	/* Pinned to the bottom, so it lines up with the foot of the sketch panel. */
	.fit {
		margin-top: auto;
		padding-top: 14px;
		border-top: 1px solid var(--panel-line);
		color: var(--panel-ink);
		font-size: 15px;
		font-weight: 600;
		line-height: 1.4;
	}

	.fit span {
		display: block;
		margin-bottom: 2px;
		color: var(--panel-muted);
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	/* Tablets: the sketch moves above the words, kept to a sensible size in a full-width band. */
	@media (max-width: 900px) {
		.tool {
			grid-template-columns: minmax(0, 1fr);
			gap: 0;
		}

		.visual {
			justify-items: center;
		}

		.stage {
			max-width: 440px;
		}

		.body {
			padding: 18px 10px 8px;
		}
	}

	/* Phones: the sketch fills the width of the card. */
	@media (max-width: 560px) {
		.stage {
			max-width: none;
		}

		.body {
			padding: 14px 6px 8px;
		}

		.pitch,
		.points li,
		.fit {
			font-size: 15px;
		}
	}
</style>
