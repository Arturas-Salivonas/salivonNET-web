<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
</script>

<!-- Business hub: a job moves along the board, the team row shows who is in, and an invoice gets paid. -->
<div class="sk-canvas layout">
	<div class="sk-panel board">
		<div class="sk-grid stage">
			<span class="sk-block is-soft heading"></span>
			<span class="sk-block job"></span>
			<span class="sk-block job"></span>
		</div>
		<div class="sk-grid stage">
			<span class="sk-block is-soft heading"></span>
			<span class="sk-block is-accent job moving a-move"></span>
		</div>
		<div class="sk-grid stage">
			<span class="sk-block is-soft heading"></span>
			<span class="sk-block is-ok job"></span>
			<span class="sk-block is-ok job a-step-4"></span>
		</div>
	</div>

	<div class="sk-panel strip">
		<span class="sk-block is-avatar is-accent"></span>
		<span class="sk-block is-avatar is-violet"></span>
		<span class="sk-block is-avatar a-dim"></span>
		<span class="sk-block is-avatar is-ok"></span>
		<span class="sk-label is-ink headcount a-step-3">3 in</span>
	</div>

	<div class="sk-panel strip">
		<span class="sk-label is-ink">£</span>
		<span class="sk-block is-line"></span>
		<span class="sk-badge is-ok a-step-5"><Icon name="check" /></span>
	</div>
</div>

<style>
	/* The board on the left, with people and money stacked beside it. */
	.layout {
		display: grid;
		grid-template-columns: 1.25fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 6px;
	}

	.board {
		grid-row: span 2;
		grid-template-columns: repeat(3, 1fr);
		align-content: start;
	}

	.stage {
		gap: 4px;
	}

	.heading {
		height: 5px;
	}

	.job {
		height: 11px;
	}

	/* Starts one column to the left and a row lower, where it was before it moved. */
	.moving {
		--from-x: -108%;
		--from-y: 15px;
	}

	.strip {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.headcount {
		margin-left: auto;
	}
</style>
