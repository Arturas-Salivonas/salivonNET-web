<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import ConfirmButton from '#lib/components/sketches/ConfirmButton.svelte';
</script>

<!-- No-code builder: a block is dragged from the palette onto the page, then published. -->
<div class="sk-canvas layout">
	<div class="sk-panel palette">
		<span class="sk-block is-soft"></span>
		<span class="sk-block is-soft"></span>
		<span class="sk-block is-soft"></span>
	</div>

	<div class="sk-panel page">
		<span class="sk-block"></span>
		<span class="sk-block is-accent dragged a-move"></span>
		<span class="sk-row publish"><ConfirmButton label="Publish" step={4} ink /></span>
	</div>

	<span class="sk-cursor pointer a-move"><Icon name="cursor" solid /></span>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 0.4fr 1fr;
		gap: 5%;
	}

	.palette {
		grid-auto-rows: 1fr;
	}

	.page {
		grid-template-rows: 1fr 1fr auto;
	}

	/* The block and the pointer both start over the palette and travel together. */
	.dragged {
		--from-x: -78%;
		--from-y: -30%;
	}

	.pointer {
		--from-x: -92px;
		--from-y: -24px;
		left: 61%;
		top: 50%;
	}

	.publish {
		justify-content: flex-end;
	}
</style>
