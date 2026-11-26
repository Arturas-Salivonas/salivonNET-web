<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
</script>

<!-- CRM connector: a booking becomes a deal, moves through the pipeline, and a reminder goes out. -->
<div class="sk-canvas layout">
	<div class="sk-panel source">
		<span class="sk-label is-ink">Booking</span>
		<span class="sk-block detail"></span>
		<span class="sk-block is-soft detail"></span>
	</div>

	<span class="sk-link"><span class="sk-runner"></span></span>

	<div class="sk-grid pipeline">
		<div class="sk-panel stage">
			<span class="sk-block is-soft heading"></span>
			<span class="sk-block is-accent deal a-step-2"></span>
			<span class="sk-block deal"></span>
		</div>
		<div class="sk-panel stage">
			<span class="sk-block is-soft heading"></span>
			<span class="sk-block is-warn deal a-step-3"></span>
		</div>
		<div class="sk-panel stage">
			<span class="sk-block is-soft heading"></span>
			<span class="sk-block is-ok deal a-step-4"></span>
			<span class="sk-row a-step-5">
				<span class="sk-badge is-accent"><Icon name="bell" /></span>
				<span class="sk-block is-line"></span>
			</span>
		</div>
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 0.52fr auto 1.6fr;
		align-items: center;
		gap: 4%;
	}

	.source {
		gap: 6px;
	}

	.detail {
		height: 5px;
	}

	.pipeline {
		grid-template-columns: repeat(3, 1fr);
		height: 100%;
	}

	.stage {
		align-content: start;
	}

	.heading {
		width: 65%;
		height: 5px;
	}

	.deal {
		height: 13px;
	}
</style>
