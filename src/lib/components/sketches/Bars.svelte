<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		/** Bar heights, as percentages of the chart's height. */
		heights: readonly number[];
		/** Paint the last bar in the accent colour. */
		highlightLast?: boolean;
		class?: ClassValue;
	}

	let { heights, highlightLast = false, class: className }: Props = $props();

	// Each bar dips to its own low point and starts at its own moment, so the row never moves in step.
	const low = (index: number) => 0.5 + (index % 4) * 0.1;
	const delay = (index: number) => `-${((index * 0.37) % 1).toFixed(2)}s`;
</script>

<!-- A bar chart that gently rises and falls while its sketch is playing. -->
<div class={['sk-bars', className]}>
	{#each heights as height, index}
		<span
			class="a-breathe"
			class:is-accent={highlightLast && index === heights.length - 1}
			style:height="{height}%"
			style:--low={low(index)}
			style:--delay={delay(index)}
		></span>
	{/each}
</div>
