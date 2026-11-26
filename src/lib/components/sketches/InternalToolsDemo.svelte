<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';

	const jobs = 3;
	/** The job the pointer clicks. */
	const clicked = 1;
</script>

<!-- Internal tools: a small app where one click moves a job from "waiting" to "done". -->
<div class="app">
	<div class="sidebar"><span></span><span></span><span></span></div>

	<div class="jobs">
		{#each { length: jobs }, job}
			<span class="job">
				<span class="sk-block is-avatar"></span>
				<span class="sk-block is-line"></span>
				<span
					class="sk-block is-pill status"
					class:is-ok={job !== clicked}
					class:is-warn={job === clicked}
				>
					{#if job === clicked}<span class="sk-over is-ok a-step-3"></span>{/if}
				</span>
			</span>
		{/each}
	</div>

	<span class="sk-cursor a-move pointer"><Icon name="cursor" solid /></span>
</div>

<style>
	.app {
		position: relative;
		display: grid;
		grid-template-columns: 22px minmax(0, 1fr);
		gap: 6px;
		width: 100%;
		height: 100%;
	}

	.sidebar {
		display: grid;
		align-content: start;
		gap: 5px;
		padding: 7px 5px;
		border-radius: 3px;
		background: var(--panel-ink);
	}

	.sidebar span {
		height: 5px;
		border-radius: 2px;
		background: #3b4659;
	}

	.sidebar span:first-child {
		background: var(--color-accent-bright);
	}

	.jobs {
		display: grid;
		grid-auto-rows: 1fr;
		gap: 4px;
		min-width: 0;
	}

	.job {
		display: flex;
		align-items: center;
		gap: 6px;
		min-width: 0;
		padding: 0 7px;
		border-radius: 3px;
		background: #ffffff;
	}

	.status {
		flex: none;
		width: 26px;
		height: 9px;
	}

	.pointer {
		--from-x: -70px;
		--from-y: 24px;
		right: 12px;
		top: 50%;
	}
</style>
