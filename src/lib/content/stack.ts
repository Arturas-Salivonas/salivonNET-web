export interface StackGroup {
	label: string;
	items: readonly string[];
}

/** The platforms, frameworks and services I work with, grouped the way a client would ask. */
export const stack: StackGroup[] = [
	{
		label: 'Websites and shops',
		items: ['WordPress', 'WooCommerce', 'Shopify', 'Umbraco', 'Drupal']
	},
	{
		label: 'Frameworks',
		items: ['React', 'Next.js', 'Svelte', 'SvelteKit', 'Node.js']
	},
	{
		label: 'Languages and data',
		items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'GraphQL', 'PostgreSQL']
	},
	{
		label: 'Payments and integrations',
		items: ['Stripe', 'Worldpay', 'HubSpot', 'Semble', 'REST APIs']
	},
	{
		label: 'SEO and analytics',
		items: ['GA4', 'Google Tag Manager', 'Search Console', 'WhatConverts', 'Contentsquare']
	},
	{
		label: 'Hosting and delivery',
		items: ['Cloudflare', 'AWS', 'Azure', 'Vercel', 'Git and CI/CD']
	}
];
