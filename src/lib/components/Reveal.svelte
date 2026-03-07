<script lang="ts">
	import type { Snippet } from 'svelte';
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		children?: Snippet;
		className?: string;
		tag?: keyof HTMLElementTagNameMap;
		delay?: number;
		y?: number;
		duration?: number;
		once?: boolean;
	}

	let {
		children,
		className = '',
		tag = 'div',
		delay = 0,
		y = 18,
		duration = 700,
		once = true
	}: Props = $props();
</script>

<svelte:element
	this={tag}
	use:reveal={{ once }}
	class={`reveal ${className}`.trim()}
	style={`--reveal-delay:${delay}ms; --reveal-y:${y}px; --reveal-duration:${duration}ms;`}
>
	{@render children?.()}
</svelte:element>