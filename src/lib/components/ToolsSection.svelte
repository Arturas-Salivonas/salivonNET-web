<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';
	import ToolCard from '#lib/components/ToolCard.svelte';
	import { categories, tools, type CategoryId } from '#lib/content/tools.ts';

	type Filter = CategoryId | 'all';

	const filters: { id: Filter; label: string; count: number }[] = [
		{ id: 'all', label: 'All', count: tools.length },
		...categories.map((category) => ({
			...category,
			count: tools.filter((tool) => tool.category === category.id).length
		}))
	];

	/** Phones, where every card is a tall stack. Keep in step with the CSS below. */
	const phone = new MediaQuery('max-width: 560px');

	/** The filter the visitor picked, if they have picked one. */
	let chosen = $state<Filter>();

	// All fifteen cards stacked is a long scroll on a phone, so until someone chooses, show one group.
	const active = $derived(chosen ?? (phone.current ? categories[0].id : 'all'));
</script>

<section class="wrap section" id="tools" aria-labelledby="tools-title">
	<div class="section-head">
		<h2 id="tools-title">Tools I've built</h2>
		<p>
			Need something like one of these? <a class="text-link" href="#contact">Ask me</a> and I'll demo
			it for you with dummy data.
		</p>
	</div>

	<div class="filters" role="group" aria-label="Filter the tools">
		{#each filters as filter (filter.id)}
			<button
				type="button"
				aria-pressed={active === filter.id}
				onclick={() => (chosen = filter.id)}
			>
				{filter.label} <b>{filter.count}</b>
			</button>
		{/each}
	</div>

	<div class="grid">
		{#each tools as tool (tool.name)}
			<ToolCard {tool} hidden={active !== 'all' && tool.category !== active} />
		{/each}
	</div>
</section>

<style>
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 24px;
	}

	.filters button {
		display: inline-flex;
		flex: none;
		align-items: center;
		gap: 8px;
		min-height: 44px;
		padding: 0 14px;
		border: 0;
		border-radius: 3px;
		background: var(--color-surface);
		box-shadow: inset 0 0 0 1.5px var(--color-line);
		color: var(--color-text);
		font: 700 15px/1 var(--font-body);
		cursor: pointer;
	}

	.filters button:hover {
		box-shadow: inset 0 0 0 1.5px var(--color-line-strong);
		color: var(--color-ink);
	}

	.filters b {
		color: var(--color-muted);
	}

	.filters button[aria-pressed='true'] {
		background: var(--color-accent);
		box-shadow: none;
		color: var(--color-on-accent);
	}

	.filters button[aria-pressed='true'] b {
		color: inherit;
	}

	/* One tool per row. */
	.grid {
		display: grid;
		gap: 22px;
	}

	@media (max-width: 560px) {
		/* "All" on its own row, then the groups two by two, so every filter is in view. */
		.filters {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.filters button {
			justify-content: center;
			padding: 8px 10px;
			line-height: 1.2;
			text-align: center;
		}

		.filters button:first-child {
			grid-column: 1 / -1;
		}

		.grid {
			gap: 18px;
		}
	}
</style>
