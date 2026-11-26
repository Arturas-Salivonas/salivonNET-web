<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';

	type Status = 'ok' | 'warn' | 'bad';

	/** Three checks a day over the last six days: done, late or missed. */
	const history: Status[][] = [
		['ok', 'ok', 'ok', 'ok', 'ok', 'ok'],
		['ok', 'warn', 'ok', 'ok', 'ok', 'ok'],
		['ok', 'ok', 'ok', 'bad', 'ok', 'ok']
	];

	/** How many of today's three checks get done while we watch. */
	const doneToday = 2;
</script>

<!-- Checks and audits: today's list gets ticked off, the week's calendar fills in, then the PDF. -->
<div class="sk-canvas layout">
	<div class="sk-panel checklist">
		{#each { length: 3 }, check}
			<span class="sk-row">
				<span class="sk-checkbox">
					<span class="sk-over is-ok a-step-{check + 1}"><Icon name="check" /></span>
				</span>
				<span class="sk-block is-line"></span>
			</span>
		{/each}
		<span class="sk-row">
			<span class="sk-checkbox"></span>
			<span class="sk-block is-soft is-line"></span>
		</span>
	</div>

	<div class="sk-grid side">
		<div class="sk-panel calendar">
			{#each history as days, check}
				{#each days as status}
					<span class="sk-block is-{status}"></span>
				{/each}
				<span class="sk-block is-soft">
					{#if check < doneToday}<span class="sk-over is-ok a-step-4"></span>{/if}
				</span>
			{/each}
		</div>

		<span class="sk-row export">
			<span class="sk-button is-ink a-step-5"><span class="sk-label">PDF</span></span>
		</span>
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 1fr 1.1fr;
		gap: 5%;
	}

	.checklist {
		grid-auto-rows: 1fr;
	}

	.side {
		grid-template-rows: minmax(0, 1fr) auto;
	}

	/* Six past days plus today. */
	.calendar {
		grid-template-columns: repeat(7, 1fr);
		grid-auto-rows: 1fr;
		gap: 3px;
	}

	.export {
		justify-content: flex-end;
	}
</style>
