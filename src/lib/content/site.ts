/** Who the site is about, plus the details the header, footer and search engines need. */
export const site = {
	name: 'Arturas Salivonas',
	firstName: 'Arturas',
	role: 'Senior Full-Stack Developer',
	company: 'Salivon Ltd',
	companyNumber: '17564646',
	url: 'https://salivon.net/',
	email: 'arturas@salivon.net',
	locality: 'Bournemouth',
	country: 'GB',
	title: 'Arturas Salivonas - Technical SEO, Automation & Internal Tools',
	description:
		'I fix slow websites, manual admin and messy data. Technical SEO, business automation, internal tools and dashboards, built by one senior developer in the UK.',
	/** Paths are relative to the site root. */
	portrait: 'images/arturas.webp',
	/** The card shown when the site is shared. */
	shareImage: { path: 'og.png', width: 1200, height: 630 },
	socials: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/salivonas/' },
		{ label: 'GitHub', href: 'https://github.com/Arturas-Salivonas' }
	],
	/** Topics for the Person schema. */
	knowsAbout: [
		'Technical SEO',
		'Core Web Vitals',
		'Structured data',
		'Business process automation',
		'Internal tools',
		'Dashboards and reporting',
		'Full-stack web development',
		'WordPress development',
		'TypeScript',
		'PHP',
		'React',
		'SvelteKit',
		'Payment integration',
		'Semble',
		'HubSpot'
	]
} as const;

/** Header links. Root-relative, so they also work from the 404 page. */
export const navLinks = [
	{ label: 'Tools', href: '/#tools' },
	{ label: 'Websites', href: '/#sites' }
] as const;
