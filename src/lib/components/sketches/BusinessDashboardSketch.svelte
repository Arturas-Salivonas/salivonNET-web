<script lang="ts">
	import Bars from '#lib/components/sketches/Bars.svelte';

	/** Headline figures, as bar widths. The last one is the one that matters. */
	const figures = [75, 60, 80];
	const trend = [42, 64, 50, 78, 58, 88, 100];

	/** From ad click to paid sale: each stage is narrower than the one before. */
	const funnel = [
		{ width: 100, colour: 'var(--color-accent)' },
		{ width: 74, colour: '#5d83f4' },
		{ width: 48, colour: '#8fabff' },
		{ width: 28, colour: 'var(--status-ok)' }
	];
</script>

<!-- Business dashboard: headline figures, a live trend, and the funnel from click to sale. -->
<div class="sk-canvas layout">
	<div class="sk-grid figures">
		{#each figures as width, index}
			<div class="sk-panel">
				<span class="sk-block is-soft caption"></span>
				<span
					class="sk-block value"
					class:is-ink={index < figures.length - 1}
					class:is-accent={index === figures.length - 1}
					style:width="{width}%"
				></span>
			</div>
		{/each}
	</div>

	<div class="sk-panel charts">
		<Bars heights={trend} highlightLast />

		<div class="sk-grid funnel">
			{#each funnel as stage, index}
				<span
					class="sk-block stage a-fill-{index + 1}"
					style:width="{stage.width}%"
					style:background={stage.colour}
				></span>
			{/each}
		</div>
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
		gap: 7%;
	}

	.figures {
		grid-template-columns: repeat(3, 1fr);
	}

	.caption {
		width: 55%;
		height: 5px;
	}

	.value {
		height: 7px;
	}

	.charts {
		grid-template-columns: 1.5fr 1fr;
		gap: 10px;
	}

	.funnel {
		align-content: center;
		gap: 4px;
	}

	.stage {
		height: 7px;
	}
</style>
