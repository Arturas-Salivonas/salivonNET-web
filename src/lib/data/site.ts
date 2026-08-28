export interface SocialLink {
	label: string;
	href: string;
}

export interface NavLink {
	label: string;
	href: string;
}

export interface SiteData {
	name: string;
	titleRole: string;
	kickerHtml: string;
	headlineHtml: string;
	intro: string;
	profileImage: string;
	email: string;
	socials: SocialLink[];
}

export interface Stat {
	key: string;
	value: string;
	sub: string;
	kind: 'spark' | 'live' | 'nodes' | 'status';
}

export interface Capability {
	num: string;
	title: string;
	description: string;
	items: string[];
}

export interface Project {
	name: string;
	url: string;
	image: string;
	domain?: string;
	summary: string;
	stack: string;
	tag?: string;
	tagStyle?: 'accent' | 'dark';
}

export interface MedicalCard {
	title: string;
	body: string;
}

export interface TerminalLine {
	name: string;
	desc: string;
}

export interface ContactData {
	eyebrow: string;
	title: string;
	description: string;
	buttonLabel: string;
	chips: string[];
	note: string;
}

export const site: SiteData = {
	name: 'Arturas Salivonas',
	titleRole: 'Front-End Web Developer',
	kickerHtml: 'Front-End Web Developer / <span class="who">Arturas Salivonas</span>',
	headlineHtml:
		'I build platforms that <span class="hl">rank</span>, <span class="hl">convert</span> and <span class="hl">run themselves</span>.',
	intro:
		'Ten years of front-end development for ecommerce, medical and editorial businesses. I build a lot on WordPress - it is a great CMS when it is set up right - and I own the whole system: the interface, the search strategy and the internal tools that keep operations moving without manual work.',
	profileImage: '/arturas.webp',
	email: 'arturas@salivon.net',
	socials: [
		{ label: 'GitHub', href: 'https://github.com/Arturas-Salivonas' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/salivonas/' }
	]
};

export const navLinks: NavLink[] = [
	{ label: 'Expertise', href: '#expertise' },
	{ label: 'Platforms', href: '#platforms' },
	{ label: 'Work', href: '#work' },
	{ label: 'Medical', href: '#medical' },
	{ label: 'Automation', href: '#automation' },
	{ label: 'Contact', href: '#contact' }
];

export const stats: Stat[] = [
	{
		key: 'experience',
		value: '10+ yrs',
		sub: 'front-end, WordPress, SEO and everything between',
		kind: 'spark'
	},
	{
		key: 'own platforms',
		value: '3 live',
		sub: 'built, ranked and run by me',
		kind: 'live'
	},
	{
		key: 'delivered',
		value: '50+',
		sub: 'launches for brands, clinics and agencies',
		kind: 'nodes'
	},
	{
		key: 'status',
		value: 'open for projects',
		sub: 'UK based, remote first',
		kind: 'status'
	}
];

export const capabilities: Capability[] = [
	{
		num: '01',
		title: 'Front-End Development',
		description: 'Fast, clean interfaces that hold up as products grow - in Svelte, React or vanilla, whatever fits.',
		items: ['SvelteKit, React, Next.js', 'TypeScript', 'Component systems & animation', 'Accessibility']
	},
	{
		num: '02',
		title: 'WordPress, Done Right',
		description:
			'My favourite CMS - because built properly it is fast, secure and easy for the whole team. Custom themes and plugins, no bloat.',
		items: ['Custom plugin architecture', 'Theme systems & Gutenberg', 'REST APIs & headless', 'Elementor & builder integration']
	},
	{
		num: '03',
		title: 'Technical SEO & E-E-A-T',
		description:
			'SEO treated as engineering: schema graphs, crawl control, Core Web Vitals - plus the trust layer Google actually reads.',
		items: ['Structured data & schema', 'Core Web Vitals', 'Author entities & E-E-A-T', 'GSC / GA4 API reporting']
	},
	{
		num: '04',
		title: 'Ecommerce & Payments',
		description: 'Checkouts that fit the business instead of fighting it - from Woo to fully custom shop builds.',
		items: ['Stripe & Worldpay integrations', 'Custom shop plugins', 'Subscriptions, deposits & invoicing', 'Conversion tracking & consent']
	},
	{
		num: '05',
		title: 'Automation, Bots & AI',
		description:
			"I find the workflow that eats someone's afternoon and replace it with software - sometimes with AI in the loop.",
		items: ['API integrations - Semble.io, HubSpot, 8x8', 'Booking & scheduling systems', 'AI-assisted workflows', 'Trading & crypto bots - my own lab']
	},
	{
		num: '06',
		title: 'Security & Hosting',
		description: 'Sites that stay up and do not get hacked. I keep this part boring on purpose.',
		items: ['Cloudflare & bot protection', 'Server & cloud setup', 'Hardening & monitoring', 'Backups that actually restore']
	}
];

export const platforms: Project[] = [
	{
		name: 'TreatmentCosts',
		url: 'https://treatmentcosts.co.uk/',
		image: '/tc-thumb.webp',
		domain: 'treatmentcosts.co.uk',
		summary:
			'UK private treatment price comparison. Custom plugin platform: Stripe billing, verified review engine, embeddable badges, clinic dashboards.',
		stack: 'WordPress - Stripe - Reviews - Schema',
		tag: 'Own product',
		tagStyle: 'accent'
	},
	{
		name: 'OnlyDogFood',
		url: 'https://onlydogfood.com/',
		image: '/odf-thumb.webp',
		domain: 'onlydogfood.com',
		summary:
			'UK dog food comparison engine. Nutrition scoring algorithm, brand accounts, affiliate monetisation, structured data throughout.',
		stack: 'WordPress - Scoring engine - Affiliates',
		tag: 'Own product',
		tagStyle: 'accent'
	},
	{
		name: 'FilmingMap',
		url: 'https://filmingmap.com/',
		image: '/filmingmapcom-mockup.webp',
		domain: 'filmingmap.com',
		summary:
			'Interactive globe of real filming locations. Heavy map UI kept fast, automated TMDB enrichment engine, Core Web Vitals work.',
		stack: 'WordPress - Maps - Enrichment - CWV',
		tag: 'Own product',
		tagStyle: 'accent'
	}
];

export const clientProjects: Project[] = [
	{
		name: 'London Gynaecology',
		url: 'https://london-gynaecology.com/',
		image: '/lg-thumb.webp',
		summary:
			'Custom patient booking engine on the Semble.io API - payments, deposits, doctor assignment, GA4 conversions - plus a custom shop build and ongoing technical SEO.',
		stack: 'Medical - Booking engine - Ecommerce'
	},
	{
		name: 'Philip Morris Int.',
		url: 'https://www.pmi.com/',
		image: '/pmi-thumb.webp',
		summary: 'Internal tools, automation and AI integration on a global corporate platform.',
		stack: 'Internal tools - Automation - AI'
	},
	{
		name: 'Odeon',
		url: 'https://www.odeon.co.uk/',
		image: '/odeon-thumb.webp',
		summary: 'Frontend components and animation for a national cinema chain, working directly with the client.',
		stack: 'UI - Animation - Components'
	},
	{
		name: 'Tyk.io',
		url: 'https://tyk.io/',
		image: '/tyk-thumb.webp',
		summary: 'Frontend features for an API-management SaaS - usability, performance and WordPress delivery.',
		stack: 'SaaS - Performance - WordPress'
	},
	{
		name: 'Money20/20',
		url: 'https://www.money2020.com/',
		image: '/money2020-thumb.webp',
		summary: 'Frontend improvements across a high-traffic global event platform.',
		stack: 'Events - Drupal - Webflow - SEO'
	},
	{
		name: 'New Statesman',
		url: 'https://www.newstatesman.com/',
		image: '/ns-thumb.webp',
		summary: 'Performance work and API integrations for a high-traffic editorial site.',
		stack: 'Editorial - Performance - APIs'
	}
];

export const moreClients: string[] = [
	'GlobalData',
	'Elite Traveler',
	"Spear's",
	'Verdict',
	'Press Gazette',
	'Cannes Lions',
	'Two Circles Studio'
];

export const medicalCards: MedicalCard[] = [
	{
		title: 'Patient systems',
		body: 'Booking, deposits and intake built on clinical APIs, with server-side identity checks before any patient data is shown.'
	},
	{
		title: 'E-E-A-T for medical content',
		body: 'Author entities, clinician review workflows and medical schema - the trust signals search engines actually evaluate.'
	},
	{
		title: 'Data discipline',
		body: 'PII gates, GDPR-aware forms, least-privilege integrations. Boring by design - that is the point.'
	}
];

export const terminalLines: TerminalLine[] = [
	{ name: 'booking-engine', desc: 'patients self-book against live clinic availability (Semble.io)' },
	{ name: 'rota-builder', desc: 'a whole clinic team, 4 sites, one drag-and-drop rota' },
	{ name: 'missed-calls', desc: 'phone-system API to a morning report, nobody chases voicemail' },
	{ name: 'seo-reports', desc: 'GSC + GA4 + Bing pulled on demand, decisions from real numbers' },
	{ name: 'ai-assist', desc: 'AI wired into admin workflows, drafting and data checks' },
	{ name: 'trading-bots', desc: 'markets and crypto experiments - my own lab' },
	{ name: 'review-engine', desc: 'verified reviews, moderation, embeddable live badges' },
	{ name: 'plugs-into', desc: 'Semble.io - HubSpot - Stripe - Worldpay - Cloudflare - GA4 - 8x8 - TMDB - AI APIs' }
];

export const contact: ContactData = {
	eyebrow: 'Need a hand?',
	title: 'Start with the business problem.',
	description:
		'A rebuild that has been on the list for a year, a checkout that leaks, rankings that will not move, a workflow that should not be manual - if it involves the front-end, WordPress, SEO or automation, I can help. You talk to the person building it.',
	buttonLabel: 'Email Arturas',
	chips: ['Project work', 'Website rebuilds', 'Short-term contracts', 'Long-term roles'],
	note: 'UK based, remote first. I usually reply the same day.'
};
