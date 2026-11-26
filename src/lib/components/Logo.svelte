<script lang="ts">
	interface Props {
		size?: number;
	}

	let { size = 30 }: Props = $props();
</script>

<!-- The Salivon mark: an "A" drawn as a delta, with the crossbar in the accent colour. -->
<svg width={size} height={size} viewBox="0 0 96 96" fill="none" aria-hidden="true">
	<path d="M48 12 86 80H10z" stroke="currentColor" stroke-width="9" stroke-linejoin="round" />
	<path class="bar" d="M31 59h34" stroke-width="9" />
</svg>

<style>
	svg {
		flex: none;
	}

	.bar {
		stroke: var(--color-accent);
	}
</style>
