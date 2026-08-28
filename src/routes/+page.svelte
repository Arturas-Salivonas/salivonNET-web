<script lang="ts">
	import SiteNav from '$lib/components/SiteNav.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import StatsBar from '$lib/components/StatsBar.svelte';
	import CapabilityGrid from '$lib/components/CapabilityGrid.svelte';
	import FeaturedWorkSection from '$lib/components/FeaturedWorkSection.svelte';
	import MedicalBand from '$lib/components/MedicalBand.svelte';
	import AutomationSection from '$lib/components/AutomationSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import {
		capabilities,
		clientProjects,
		contact,
		medicalCards,
		moreClients,
		navLinks,
		platforms,
		site,
		stats,
		terminalLines
	} from '$lib/data/site';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': 'https://salivon.net/#person',
				name: site.name,
				jobTitle: site.titleRole,
				url: 'https://salivon.net/',
				email: site.email,
				description: site.intro,
				image: 'https://salivon.net/arturas.webp',
				sameAs: site.socials.map((s) => s.href),
				knowsAbout: [
					'Front-End Development',
					'SvelteKit',
					'React',
					'Next.js',
					'TypeScript',
					'WordPress Development',
					'Technical SEO',
					'E-E-A-T',
					'Core Web Vitals',
					'Ecommerce Development',
					'Stripe',
					'Worldpay',
					'Automation',
					'API Integration',
					'Semble.io',
					'HubSpot',
					'Cloudflare',
					'Web Security'
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
	<meta name="theme-color" content="#07090d" />
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
	<SiteNav links={navLinks} />
	<HeroSection {site} />
	<StatsBar {stats} />
	<CapabilityGrid groups={capabilities} />
	<FeaturedWorkSection {platforms} {clientProjects} {moreClients} />
	<MedicalBand cards={medicalCards} />
	<AutomationSection lines={terminalLines} />
	<ContactSection {contact} email={site.email} />
</main>

<style>
	.page-shell {
		position: relative;
		min-height: 100vh;
	}
</style>
