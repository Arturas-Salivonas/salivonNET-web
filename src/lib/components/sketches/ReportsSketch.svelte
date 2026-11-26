<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';

	const records = 4;
	/** The record the scan picks up. */
	const flagged = 2;
</script>

<!-- Reports and alerts: the records are scanned, one is flagged, and a report goes out. -->
<div class="sk-canvas layout">
	<div class="sk-panel records">
		{#each { length: records }, record}
			<span class="sk-row">
				<span class="sk-block is-line"></span>
				<span class="sk-block is-soft is-pill status">
					{#if record === flagged}<span class="sk-over is-bad a-step-3"></span>{/if}
				</span>
			</span>
		{/each}
		<span class="sk-scan"></span>
	</div>

	<span class="sk-link"><span class="sk-runner"></span></span>

	<span class="report">
		<span class="sk-badge is-ink is-big"><Icon name="mail" /></span>
		<span class="sk-badge is-bad count a-step-4"><span class="sk-label">1</span></span>
	</span>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 1.3fr auto 0.7fr;
		align-items: center;
		gap: 5%;
	}

	.records {
		position: relative;
		height: 100%;
		overflow: hidden;
		grid-auto-rows: 1fr;
	}

	.status {
		width: 24%;
		height: 8px;
	}

	.report {
		position: relative;
		display: grid;
		justify-self: center;
	}

	.count {
		position: absolute;
		right: -7px;
		top: -7px;
		width: 16px;
		height: 16px;
	}
</style>
