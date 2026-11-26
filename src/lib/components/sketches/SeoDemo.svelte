<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';

	const audits = ['Schema', 'Crawl', 'Links', 'E-E-A-T'];
</script>

<!-- Technical SEO: the speed score fills up, then the other audits tick off one by one. -->
<div class="seo">
	<div class="speed">
		<span>Speed</span>
		<span class="meter"><span class="a-fill-1"></span></span>
		<b>90</b>
	</div>

	<ul class="audits">
		{#each audits as audit, index}
			<li class="a-step-{index + 2}"><Icon name="check" />{audit}</li>
		{/each}
	</ul>
</div>

<style>
	.seo {
		display: grid;
		gap: 10px;
		width: 100%;
	}

	.speed {
		display: flex;
		align-items: center;
		gap: 8px;
		color: var(--panel-ink);
		font: 800 13px/1 var(--font-display);
	}

	.meter {
		flex: 1;
		height: 8px;
		overflow: hidden;
		border-radius: 99px;
		background: #ffffff;
	}

	.meter span {
		display: block;
		width: 90%;
		height: 100%;
		border-radius: inherit;
		background: var(--color-accent);
	}

	.audits {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
	}

	.audits li {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		padding: 4px 7px 4px 5px;
		border-radius: 3px;
		background: #ffffff;
		color: var(--panel-ink);
		font: 700 11.5px/1 var(--font-body);
	}

	.audits :global(.icon) {
		width: 11px;
		height: 11px;
		color: var(--status-ok);
		stroke-width: 3.6;
	}
</style>
