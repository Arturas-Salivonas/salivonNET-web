<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import ConfirmButton from '#lib/components/sketches/ConfirmButton.svelte';
</script>

<!--
	Self check-in: the form is filled in online beforehand, so at the reception tablet the
	details are already there and checking in is one tap.
-->
<div class="sk-canvas layout">
	<div class="device">
		<div class="sk-panel phone">
			<span class="sk-block field a-fill-1"></span>
			<span class="sk-block is-soft field a-fill-1"></span>
			<svg class="signature" viewBox="0 0 60 24">
				<path class="a-draw" pathLength="1" d="M3 17C10 2 14 22 21 12s11-9 16 2 11 6 20-7" />
			</svg>
			<span class="sk-block is-accent is-pill send"></span>
		</div>
		<span class="sk-label is-ink">Online</span>
	</div>

	<div class="device">
		<div class="sk-panel tablet">
			<span class="sk-row">
				<span class="sk-block is-avatar"></span>
				<span class="sk-block is-line a-fill-2"></span>
			</span>
			<span class="sk-block is-soft field a-fill-2"></span>
			<ConfirmButton label="Check in" step={3} />
		</div>
		<span class="sk-label is-ink">Reception</span>
	</div>

	<span class="sk-link"><span class="sk-runner"></span></span>

	<div class="sk-panel record">
		<span class="sk-row">
			<span class="sk-block is-avatar"></span>
			<span class="sk-block is-line"></span>
		</span>
		<span class="sk-block is-soft field"></span>
		<span class="sk-row">
			<span class="sk-badge is-ok a-step-4"><Icon name="check" /></span>
			<span class="sk-label is-ink">Arrived</span>
		</span>
	</div>
</div>

<style>
	/* A phone, a tablet, then the record they both feed. */
	.layout {
		display: grid;
		grid-template-columns: 0.42fr 1fr auto 0.9fr;
		align-items: center;
		gap: 4%;
	}

	/* A screen with its caption underneath. */
	.device {
		display: grid;
		grid-template-rows: minmax(0, 1fr) auto;
		justify-items: center;
		gap: 5px;
		min-width: 0;
		height: 100%;
	}

	.phone {
		width: 100%;
		grid-template-rows: auto auto minmax(0, 1fr) auto;
		border-radius: 7px;
	}

	.tablet {
		align-self: center;
		gap: 7px;
		width: 100%;
		padding: 8px;
		border-radius: 6px;
	}

	.field {
		height: 5px;
	}

	.signature {
		width: 100%;
		height: 100%;
		min-height: 0;
		fill: none;
		stroke: var(--panel-ink);
		stroke-width: 2.2;
		stroke-linecap: round;
	}

	.send {
		height: 7px;
	}

	.record {
		gap: 8px;
	}
</style>
