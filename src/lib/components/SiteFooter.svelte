<script lang="ts">
	import { site } from '#lib/content/site.ts';

	const year = new Date().getFullYear();
</script>

<footer class="wrap footer">
	<span>&copy; {year} {site.company}</span>
	<span>Registered in England and Wales, company no. {site.companyNumber}</span>
</footer>

<style>
	.footer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 8px 24px;
		padding-block: 30px 44px;
		color: var(--color-muted);
		font-size: 14.5px;
		font-weight: 500;
	}
</style>
