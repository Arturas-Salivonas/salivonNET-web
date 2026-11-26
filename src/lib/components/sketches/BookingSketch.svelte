<script lang="ts">
	import ConfirmButton from '#lib/components/sketches/ConfirmButton.svelte';

	const days = 12;
	const pickedDay = 5;
	const times = 4;
	const pickedTime = 1;
</script>

<!-- Booking and payments: pick a day, pick a time, the right person is assigned, pay. -->
<div class="sk-canvas layout">
	<div class="sk-panel calendar">
		{#each { length: days }, day}
			<span class="sk-block is-soft">
				{#if day === pickedDay}<span class="sk-over is-accent a-step-1"></span>{/if}
			</span>
		{/each}
	</div>

	<div class="sk-panel times">
		{#each { length: times }, time}
			<span class="sk-block is-soft">
				{#if time === pickedTime}<span class="sk-over is-accent a-step-2"></span>{/if}
			</span>
		{/each}
	</div>

	<div class="sk-panel checkout">
		<span class="sk-row">
			<span class="sk-block is-avatar is-violet a-step-3"></span>
			<span class="sk-block is-line"></span>
		</span>
		<span class="sk-block is-soft"></span>
		<ConfirmButton label="Pay" step={4} />
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 1.15fr 0.62fr 1fr;
		gap: 5%;
	}

	.calendar {
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: 1fr;
	}

	.times {
		grid-auto-rows: 1fr;
	}

	.checkout {
		grid-template-rows: auto minmax(0, 1fr) auto;
	}
</style>
