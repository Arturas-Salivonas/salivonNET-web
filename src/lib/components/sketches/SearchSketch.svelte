<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';

	/** The three kinds of thing the search can find. */
	const results = [
		{ kind: 'Fee', tone: 'is-accent' },
		{ kind: 'PDF', tone: 'is-violet' },
		{ kind: 'Page', tone: 'is-ok' }
	];
</script>

<!-- Smart search: a query types itself and three kinds of result drop in. -->
<div class="sk-canvas layout">
	<div class="sk-searchbox">
		<Icon name="search" />
		<span class="sk-block is-ink query a-fill-1"></span>
		<span class="sk-caret"></span>
	</div>

	<div class="sk-panel results">
		{#each results as result, index}
			<span class="sk-row a-step-{index + 2}">
				<span class="sk-block dot {result.tone}"></span>
				<span class="sk-block is-line"></span>
				<span class="sk-label is-ink">{result.kind}</span>
			</span>
		{/each}
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
		gap: 8%;
	}

	.query {
		width: 34%;
		height: 5px;
	}

	.results {
		grid-auto-rows: 1fr;
	}

	.dot {
		flex: none;
		width: 9px;
		height: 9px;
	}
</style>
