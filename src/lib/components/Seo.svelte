<script lang="ts">
	import { site } from '#lib/content/site.ts';

	const shareImage = new URL(site.shareImage.path, site.url).href;

	const personId = `${site.url}#person`;
	const companyId = `${site.url}#company`;

	/** Structured data: who I am, the company I trade through, and this page as my profile. */
	const schema = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': personId,
				name: site.name,
				jobTitle: site.role,
				description: site.description,
				url: site.url,
				email: site.email,
				image: new URL(site.portrait, site.url).href,
				sameAs: site.socials.map((social) => social.href),
				address: {
					'@type': 'PostalAddress',
					addressLocality: site.locality,
					addressCountry: site.country
				},
				worksFor: { '@id': companyId },
				knowsAbout: site.knowsAbout
			},
			{
				'@type': 'Organization',
				'@id': companyId,
				name: site.company,
				url: site.url,
				email: site.email,
				founder: { '@id': personId },
				identifier: {
					'@type': 'PropertyValue',
					propertyID: 'Companies House number',
					value: site.companyNumber
				}
			},
			{
				'@type': 'WebSite',
				'@id': `${site.url}#website`,
				url: site.url,
				name: site.company,
				description: site.description,
				inLanguage: 'en-GB',
				publisher: { '@id': companyId }
			},
			{
				'@type': 'ProfilePage',
				'@id': `${site.url}#profile`,
				url: site.url,
				name: site.title,
				description: site.description,
				inLanguage: 'en-GB',
				isPartOf: { '@id': `${site.url}#website` },
				mainEntity: { '@id': personId }
			}
		]
	};

	// `<` is escaped so no string in the data can ever close the script tag early.
	const schemaJson = JSON.stringify(schema).replaceAll('<', '\\u003c');
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<meta name="author" content={site.name} />
	<link rel="canonical" href={site.url} />

	<meta property="og:type" content="profile" />
	<meta property="og:site_name" content={site.company} />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:url" content={site.url} />
	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:image" content={shareImage} />
	<meta property="og:image:width" content={String(site.shareImage.width)} />
	<meta property="og:image:height" content={String(site.shareImage.height)} />
	<meta property="og:image:alt" content="{site.company}: {site.description}" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site.title} />
	<meta name="twitter:description" content={site.description} />
	<meta name="twitter:image" content={shareImage} />
	<meta name="twitter:image:alt" content="{site.company}: {site.description}" />

	<!-- eslint-disable-next-line svelte/no-at-html-tags -- our own static data, escaped above -->
	{@html `<script type="application/ld+json">${schemaJson}</` + `script>`}
</svelte:head>
