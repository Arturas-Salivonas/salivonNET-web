<script lang="ts">
	import ConfirmButton from '#lib/components/sketches/ConfirmButton.svelte';

	/** Three rows of eight. */
	const seats = 24;
	const taken = new Set([1, 2, 6, 8, 20, 21, 22]);
	/** Seat number -> the step at which it gets picked. */
	const picked = new Map([
		[11, 2],
		[12, 3]
	]);
</script>

<!-- Seat and table booking: choose what and where, two places light up on the map, pay. -->
<div class="sk-canvas layout">
	<div class="sk-panel options">
		<span class="sk-block is-violet"></span>
		<span class="sk-block is-soft"><span class="sk-over is-accent a-step-1"></span></span>
		<span class="sk-block is-soft"></span>
	</div>

	<div class="sk-panel room">
		<span class="sk-block is-ink is-pill screen"></span>

		<div class="sk-grid seats">
			{#each { length: seats }, seat}
				<span class="sk-block" class:is-soft={!taken.has(seat)}>
					{#if picked.has(seat)}
						<span class="sk-over is-accent a-step-{picked.get(seat)}"></span>
					{/if}
				</span>
			{/each}
		</div>

		<span class="sk-row pay"><ConfirmButton label="Pay" step={4} /></span>
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 0.5fr 1.5fr;
		gap: 5%;
	}

	.options {
		grid-auto-rows: 1fr;
	}

	.room {
		grid-template-rows: auto minmax(0, 1fr) auto;
		gap: 6px;
	}

	.screen {
		justify-self: center;
		width: 70%;
		height: 4px;
	}

	.seats {
		grid-template-columns: repeat(8, 1fr);
		grid-auto-rows: 1fr;
		gap: 3px;
	}

	.pay {
		justify-content: flex-end;
	}
</style>
