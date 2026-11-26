<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { icons, type IconName } from '#lib/components/icons.ts';

	interface Props extends SVGAttributes<SVGSVGElement> {
		name: IconName;
		/** Filled rather than outlined. Used for the pointer in sketches. */
		solid?: boolean;
	}

	let { name, solid = false, class: className, ...rest }: Props = $props();
</script>

<!-- Decorative by default: the text next to an icon carries the meaning. -->
<svg
	class={['icon', solid && 'is-solid', className]}
	viewBox="0 0 24 24"
	aria-hidden="true"
	{...rest}
>
	<path d={icons[name]} />
</svg>

<style>
	/* Global and low in specificity on purpose, so any parent can resize or recolour an icon. */
	:global(:where(.icon)) {
		flex: none;
		width: 18px;
		height: 18px;
		fill: none;
		stroke: currentColor;
		stroke-width: 2.4;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	:global(:where(.icon.is-solid)) {
		fill: var(--panel-ink);
		stroke: #ffffff;
		stroke-width: 1.6;
	}
</style>
