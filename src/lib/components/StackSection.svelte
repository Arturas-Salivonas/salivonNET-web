<script lang="ts">
	import { stack } from '#lib/content/stack.ts';
</script>

<section class="wrap section" id="stack" aria-labelledby="stack-title">
	<div class="section-head">
		<h2 id="stack-title">What I build with</h2>
		<p>Already running on one of these? I can pick it up from where it is.</p>
	</div>

	<div class="groups">
		{#each stack as group (group.label)}
			<div class="group cut">
				<h3>{group.label}</h3>
				<ul>
					{#each group.items as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<style>
	.groups {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 18px;
	}

	.group {
		--cut-fill: var(--color-surface);
		display: grid;
		align-content: start;
		gap: 14px;
		padding: 20px 20px 24px;
	}

	h3 {
		font-size: 18px;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	li {
		padding: 6px 11px;
		border-radius: 3px;
		background: var(--color-bg);
		box-shadow: inset 0 0 0 1px var(--color-line);
		color: var(--color-ink);
		font-size: 14.5px;
		font-weight: 600;
		line-height: 1.3;
	}

	@media (max-width: 980px) {
		.groups {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 600px) {
		/* Phones: drop the boxes and list the groups as rows, which halves the scroll. */
		.groups {
			grid-template-columns: minmax(0, 1fr);
			gap: 0;
			border-bottom: 1px solid var(--color-line);
		}

		.group {
			gap: 10px;
			padding: 16px 0;
			border-top: 1px solid var(--color-line);
			border-radius: 0;
			background: none;
		}

		h3 {
			font-size: 16px;
		}

		ul {
			gap: 6px;
		}

		li {
			padding: 5px 9px;
			font-size: 14px;
		}
	}
</style>
