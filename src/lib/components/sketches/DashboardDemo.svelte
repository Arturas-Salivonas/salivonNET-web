<script lang="ts">
	import Bars from '#lib/components/sketches/Bars.svelte';

	const heights = [42, 64, 50, 78, 58, 88, 100];
</script>

<!-- Dashboards: headline figures on top, live bars underneath. -->
<div class="dashboard">
	<div class="figures"><span></span><span></span><span></span></div>
	<Bars {heights} highlightLast />
</div>

<style>
	.dashboard {
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
		gap: 7px;
		width: 100%;
		height: 100%;
	}

	.figures {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5px;
	}

	.figures span {
		position: relative;
		height: 16px;
		border-radius: 3px;
		background: #ffffff;
	}

	.figures span::before {
		content: '';
		position: absolute;
		left: 5px;
		top: 6px;
		width: 55%;
		height: 4px;
		border-radius: 2px;
		background: var(--panel-shape);
	}

	.figures span:last-child::before {
		background: var(--color-accent);
	}
</style>
