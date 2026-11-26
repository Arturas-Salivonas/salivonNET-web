<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import type { IconName } from '#lib/components/icons.ts';

	const products = 3;

	/** Where a paid order goes next. */
	const handoffs: { label: string; icon: IconName; tone: string }[] = [
		{ label: 'Lab', icon: 'doc', tone: 'is-accent' },
		{ label: 'CRM', icon: 'sync', tone: 'is-ink' },
		{ label: 'Email', icon: 'mail', tone: 'is-ok' }
	];
</script>

<!-- Online shop: an item goes in the basket, then the order fans out to the lab, the CRM and an email. -->
<div class="sk-canvas layout">
	<div class="sk-grid products">
		{#each { length: products }, product}
			<div class="sk-panel product">
				<span class="sk-block is-soft"></span>
				<span class="sk-block name"></span>
				<span class="sk-block is-accent is-pill add">
					{#if product === 0}<span class="sk-over is-ok a-step-1"></span>{/if}
				</span>
			</div>
		{/each}
	</div>

	<span class="sk-link"><span class="sk-runner"></span></span>

	<div class="sk-grid handoffs">
		{#each handoffs as handoff, index}
			<span class="sk-row a-step-{index + 3}">
				<span class="sk-badge {handoff.tone}"><Icon name={handoff.icon} /></span>
				<span class="sk-label is-ink">{handoff.label}</span>
			</span>
		{/each}
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 1.5fr auto 0.8fr;
		align-items: center;
		gap: 5%;
	}

	.products {
		grid-template-columns: repeat(3, 1fr);
		height: 100%;
	}

	.product {
		grid-template-rows: minmax(0, 1fr) auto auto;
	}

	.name {
		height: 5px;
	}

	.add {
		height: 7px;
	}

	.handoffs {
		gap: 7px;
	}
</style>
