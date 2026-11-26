<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import type { IconName } from '#lib/components/icons.ts';

	interface Invoice {
		status: 'warn' | 'bad' | 'ok';
		/** The step at which the invoice turns paid. */
		paidAt?: number;
		/** The chase that goes out, and the step it happens at. */
		chase?: { by: IconName; step: number };
	}

	const invoices: Invoice[] = [
		{ status: 'warn', chase: { by: 'phone', step: 2 } },
		{ status: 'warn', paidAt: 3 },
		{ status: 'bad', chase: { by: 'mail', step: 4 } },
		{ status: 'ok' }
	];
</script>

<!-- Invoice chaser: unpaid invoices by urgency. One gets a call, one an email, one turns paid. -->
<div class="sk-canvas">
	<div class="sk-panel invoices">
		{#each invoices as invoice}
			<span class="sk-row">
				<span class="sk-block is-avatar"></span>
				<span class="sk-block is-line"></span>
				<span class="sk-block is-ink amount"></span>
				<span class="sk-block is-pill status is-{invoice.status}">
					{#if invoice.paidAt}<span class="sk-over is-ok a-step-{invoice.paidAt}"></span>{/if}
				</span>
				{#if invoice.chase}
					<span class="sk-badge is-accent a-step-{invoice.chase.step}">
						<Icon name={invoice.chase.by} />
					</span>
				{:else}
					<span class="sk-badge placeholder"></span>
				{/if}
			</span>
		{/each}
	</div>
</div>

<style>
	.invoices {
		height: 100%;
		grid-auto-rows: 1fr;
		gap: 3px;
	}

	.amount {
		width: 14%;
		height: 6px;
	}

	.status {
		width: 18%;
		height: 9px;
	}

	/* Keeps the columns aligned on rows with nothing to chase. */
	.placeholder {
		visibility: hidden;
	}
</style>
