<script lang="ts">
	import ConfirmButton from '#lib/components/sketches/ConfirmButton.svelte';

	const shiftTones = ['is-accent', 'is-ok', 'is-violet'] as const;

	/** One row per person, Monday to Friday. `null` is a day off; a number picks the shift colour. */
	const week: (number | null)[][] = [
		[0, null, 1, null, 0],
		[null, 2, 0, null, 1],
		[1, null, null, 0, 2],
		[null, 0, 2, 1, null]
	];

	/** Shifts land left to right: Monday and Tuesday first, Friday last. */
	const stepFor = (day: number) => 2 + Math.floor(day / 2);
</script>

<!-- Shift planner: the diary is read, shifts fill the week, one click sends it to Teams. -->
<div class="sk-canvas layout">
	<div class="sk-row toolbar">
		<span class="sk-button is-ink a-step-1"><span class="sk-label">Diary</span></span>
		<ConfirmButton label="Teams" step={5} />
	</div>

	<div class="sk-panel week">
		{#each week as shifts}
			<span class="sk-block is-soft"></span>
			{#each shifts as shift, day}
				{#if shift === null}
					<span class="sk-block is-soft"></span>
				{:else}
					<span class="sk-block {shiftTones[shift]} a-step-{stepFor(day)}"></span>
				{/if}
			{/each}
		{/each}
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
		gap: 7%;
	}

	.toolbar {
		justify-content: space-between;
	}

	/* A narrow column for names, then the five days. */
	.week {
		grid-template-columns: 0.55fr repeat(5, 1fr);
		grid-auto-rows: 1fr;
		gap: 3px;
	}
</style>
