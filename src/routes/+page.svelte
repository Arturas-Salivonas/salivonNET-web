<script lang="ts">
	import CapabilityGrid from '$lib/components/CapabilityGrid.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import FeaturedWorkSection from '$lib/components/FeaturedWorkSection.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import InteractiveBackdrop from '$lib/components/InteractiveBackdrop.svelte';
	import { capabilities, projects, site } from '$lib/data/site';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': 'https://salivon.net/#person',
				name: site.name,
				jobTitle: site.titleRole,
				url: 'https://salivon.net/',
				email: site.contact.email,
				description: site.intro,
				image: 'https://salivon.net/arturas.webp',
				sameAs: site.socials.map((s) => s.href),
				knowsAbout: [
					'Front-End Development',
					'SvelteKit',
					'React',
					'Next.js',
					'TypeScript',
					'WordPress',
					'Technical SEO',
					'Core Web Vitals',
					'Performance Optimization',
					'Web Accessibility'
				]
			},
			{
				'@type': 'WebSite',
				'@id': 'https://salivon.net/#website',
				url: 'https://salivon.net/',
				name: `${site.name} | ${site.titleRole}`,
				description: site.intro,
				author: { '@id': 'https://salivon.net/#person' }
			},
			{
				'@type': 'ProfilePage',
				'@id': 'https://salivon.net/#profilepage',
				url: 'https://salivon.net/',
				name: `${site.name} – ${site.titleRole} Portfolio`,
				description: site.intro,
				mainEntity: { '@id': 'https://salivon.net/#person' }
			}
		]
	};
</script>

<svelte:head>
	<title>{site.name} | {site.titleRole}</title>
	<meta name="description" content={site.intro} />
	<meta name="robots" content="index, follow" />
	<meta name="author" content={site.name} />
	<meta name="theme-color" content="#050505" />
	<link rel="canonical" href="https://salivon.net/" />
	<meta property="og:type" content="profile" />
	<meta property="og:title" content="{site.name} | {site.titleRole}" />
	<meta property="og:description" content={site.intro} />
	<meta property="og:url" content="https://salivon.net/" />
	<meta property="og:image" content="https://salivon.net/arturas.webp" />
	<meta property="og:image:width" content="420" />
	<meta property="og:image:height" content="520" />
	<meta property="og:image:alt" content="{site.name} – {site.titleRole}" />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:site_name" content={site.name} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{site.name} | {site.titleRole}" />
	<meta name="twitter:description" content={site.intro} />
	<meta name="twitter:image" content="https://salivon.net/arturas.webp" />
	<meta name="twitter:image:alt" content="{site.name} – {site.titleRole}" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}
</svelte:head>

<main class="page-shell">
	<InteractiveBackdrop />

	<HeroSection {site} />
	<CapabilityGrid groups={capabilities} />
	<FeaturedWorkSection {projects} />

	<ContactSection contact={site.contact} />
</main>

<style>
	.page-shell {
		position: relative;
		min-height: 100vh;
		padding-bottom: 4rem;
	}
</style>
