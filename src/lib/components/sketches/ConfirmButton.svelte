<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';

	interface Props {
		label: string;
		/** The step of the loop at which the button turns into a tick. */
		step: 1 | 2 | 3 | 4 | 5;
		/** Dark instead of the accent colour. */
		ink?: boolean;
	}

	let { label, step, ink = false }: Props = $props();
</script>

<!-- A small button whose label gives way to a green tick once its step arrives. -->
<span class="sk-button" class:is-ink={ink}>
	<span class="sk-label">{label}</span>
	<span class="sk-over is-ok a-step-{step}"><Icon name="check" /></span>
</span>
