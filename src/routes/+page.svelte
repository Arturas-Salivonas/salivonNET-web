<script lang="ts">
	import CapabilityGrid from '$lib/components/CapabilityGrid.svelte';
	import FeaturedWorkSection from '$lib/components/FeaturedWorkSection.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import InteractiveBackdrop from '$lib/components/InteractiveBackdrop.svelte';
	import { capabilities, metrics, projects, site } from '$lib/data/site';
</script>

<svelte:head>
	<title>{site.name} | {site.titleRole}</title>
	<meta name="description" content={site.intro} />
	<meta name="theme-color" content="#050505" />
</svelte:head>

<main class="page-shell">
	<InteractiveBackdrop />

	<HeroSection {site} {metrics} />
	<FeaturedWorkSection {projects} />
	<CapabilityGrid groups={capabilities} />
</main>

<style>
	.page-shell {
		position: relative;
		min-height: 100vh;
		padding-bottom: 4rem;
	}
</style>
