<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import type { IconName } from '#lib/components/icons.ts';

	// On a schedule, read the data, sync it, done.
	const stages: IconName[] = ['clock', 'doc', 'sync', 'check'];
</script>

<!-- Business automation: a job runs through its stages on its own, left to right. -->
<div class="flow">
	<span class="sk-runner"></span>

	{#each stages as icon, index}
		<span class="stage a-step-{index + 1}" class:is-done={index === stages.length - 1}>
			<Icon name={icon} />
		</span>
	{/each}
</div>

<style>
	.flow {
		--inset: 16px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	/* The line the job travels along, drawn behind the stages. */
	.flow::before {
		content: '';
		position: absolute;
		inset: 50% var(--inset) auto;
		height: 2px;
		margin-top: -1px;
		background: var(--panel-shape);
	}

	.sk-runner {
		inset: 50% var(--inset) auto;
		height: 0;
	}

	.stage {
		position: relative;
		z-index: 1;
		display: grid;
		place-items: center;
		width: 34px;
		height: 34px;
		border-radius: 4px;
		background: #ffffff;
		box-shadow: inset 0 0 0 1.5px var(--panel-shape);
		color: var(--panel-ink);
	}

	.stage.is-done {
		background: var(--status-ok);
		box-shadow: none;
		color: #ffffff;
	}

	.stage :global(.icon) {
		width: 16px;
		height: 16px;
	}

	@media (max-width: 560px) {
		.flow {
			--inset: 13px;
		}

		.stage {
			width: 28px;
			height: 28px;
		}
	}
</style>
