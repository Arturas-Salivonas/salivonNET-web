<script lang="ts">
	import Bars from '#lib/components/sketches/Bars.svelte';

	const volume = [40, 70, 55, 90, 60, 45, 80, 65, 100, 50, 75, 58];
</script>

<!-- Trading bots: the price line draws itself, a buy and a sell are marked, volume ticks along below. -->
<div class="sk-canvas">
	<div class="sk-panel market">
		<svg class="price" viewBox="0 0 240 70" preserveAspectRatio="none">
			<path
				class="a-draw"
				pathLength="1"
				d="M2 58 26 50 48 56 72 38 96 44 120 28 144 36 168 20 192 26 216 10 238 14"
			/>
		</svg>

		<span class="trade buy a-step-2"></span>
		<span class="trade sell a-step-4"></span>

		<Bars heights={volume} class="volume" />
	</div>
</div>

<style>
	.market {
		position: relative;
		display: block;
		height: 100%;
	}

	.price {
		position: absolute;
		inset: 8px 8px auto;
		width: calc(100% - 16px);
		height: calc(70% - 8px);
		fill: none;
		stroke: var(--color-accent);
		stroke-width: 2.5;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	/* Buys point up in green, sells point down in red. */
	.trade {
		position: absolute;
		width: 11px;
		height: 10px;
		margin: -5px 0 0 -5px;
	}

	.buy {
		left: 22%;
		top: 60%;
		background: var(--status-ok);
		clip-path: polygon(50% 0, 100% 100%, 0 100%);
	}

	.sell {
		left: 88%;
		top: 9%;
		background: var(--status-bad);
		clip-path: polygon(0 0, 100% 0, 50% 100%);
	}

	.market :global(.volume) {
		position: absolute;
		inset: auto 8px 6px;
		height: 20%;
		gap: 3px;
	}
</style>
