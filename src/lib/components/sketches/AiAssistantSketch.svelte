<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';

	/** Line lengths of the answer, as percentages. */
	const answer = [92, 78, 55];
</script>

<!-- AI assistant: a question is asked, the documents are consulted, and the answer writes itself. -->
<div class="sk-canvas layout">
	<span class="sk-block is-accent question a-step-1"></span>

	<div class="sources">
		<span class="sk-badge is-ink a-step-2"><Icon name="doc" /></span>
		<span class="sk-badge is-ink a-step-2"><Icon name="doc" /></span>
		<span class="sk-link"><span class="sk-runner"></span></span>
	</div>

	<div class="sk-panel answer">
		{#each answer as width, index}
			<span class="sk-block line a-fill-{index + 2}" style:width="{width}%"></span>
		{/each}
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		grid-template-rows: auto minmax(0, 1fr);
		gap: 9% 5%;
	}

	/* The question sits on the right, like a sent message. */
	.question {
		grid-column: 1 / -1;
		justify-self: end;
		width: 46%;
		height: 15px;
		border-radius: 9px 9px 2px 9px;
	}

	.sources {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.answer {
		align-content: center;
		gap: 6px;
		padding: 9px 10px;
		border-radius: 9px 9px 9px 2px;
	}

	.line {
		height: 6px;
	}
</style>
