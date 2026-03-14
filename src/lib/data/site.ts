export interface SocialLink {
	label: string;
	href: string;
	detail?: string;
}

export interface SiteData {
	name: string;
	titleRole: string;
	heroRoleHtml: string;
	heroHeadlineHtml: string;
	intro: string;
	profileImage: string;
	socials: SocialLink[];
	contact: ContactSectionData;
}

export interface ContactSectionData {
	eyebrow: string;
	title: string;
	description: string;
	email: string;
	buttonLabel: string;
	availability: string[];
	note: string;
}

export interface Metric {
	value: string;
	label: string;
	detail: string;
}

export interface CapabilityGroup {
	title: string;
	description: string;
	items: string[];
}

export interface Project {
	name: string;
	url: string;
	image: string;
	eyebrow: string;
	summary: string;
	stack: string;
}

export const site: SiteData = {
	name: 'Arturas Salivonas',
	titleRole: 'Front-End Developer',
	heroRoleHtml: 'Front-End Developer / <span class="hero__role-name">Arturas Salivonas</span>',
	heroHeadlineHtml:
		'<span class="hero__headline-line">I build <span class="highlight">fast</span>,<br> <span class="highlight">SEO-optimised</span></span><br class="hero__headline-break" /><span class="hero__headline-line">websites that <span class="highlight">perform</span> & <span class="highlight">scale</span>.</span>',
	intro:
		"Front-end developer with 10+ years building fast, scalable websites. I care about web performance, SEO, and interfaces that stay clean as products grow.",
	profileImage: '/arturas.webp',
	socials: [
		{
			label: 'GitHub',
			href: 'https://github.com/Arturas-Salivonas',
			detail: ''
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/salivonas/',
			detail: ''
		}
	] satisfies SocialLink[],
	contact: {
		eyebrow: 'Need a hand?',
		title: 'Contact me for your next project',
		description:
			'If you need help with a project, a website refresh, or want to hire me for short or long term work, get in touch.',
		email: 'arturas@salivon.net',
		buttonLabel: 'Email Arturas',
		availability: ['Project work', 'Website rebuilds', 'Short-term contracts', 'Long-term roles'],
		note: 'Remote-friendly and happy to discuss the right setup for the work.'
	}
};

export const metrics: Metric[] = [
	{
		value: '10+',
		label: 'years building for the web',
		detail: 'Enough time to know what matters and what is just noise.'
	},
	{
		value: '50+',
		label: 'launches and client deliveries',
		detail: 'From landing pages to bigger content and product builds.'
	},
	{
		value: 'AI',
		label: 'automation and smart workflows',
		detail: 'AI tooling, automation ideas, and smart product flows.'
	},
	{
		value: 'SEO',
		label: 'performance and discoverability',
		detail: 'Core Web Vitals, clean markup and indexable pages.'
	}
];

export const capabilities: CapabilityGroup[] = [
	{
		title: 'Frontend Systems',
		description: 'I build frontend systems that stay simple as products grow.',
		items: ['SvelteKit / Svelte', 'React / Next.js', 'TypeScript', 'Component architecture']
	},
	{
		title: 'SEO & Optimization',
		description: 'I focus on the technical foundations that drive performance and search visibility.',
		items: ['Technical SEO', 'Core Web Vitals', 'Performance optimisation', 'Accessibility']
	},
	{
		title: 'WordPress Delivery',
		description: 'I build custom WP setups that work well for both developers and marketing teams.',
		items: ['Custom Themes', 'Gutenberg blocks', 'Elementor & other builders integration', 'Performance & SEO optimisation']
	}
];

export const projects: Project[] = [
	{
		name: 'FilmingMap.com',
		url: 'https://www.filmingmap.com',
		image: '/filmingmapcom-mockup.webp',
		eyebrow: 'Location discovery',
		summary: 'A product-focused site where I cared about clean discovery, better structure, and keeping the experience fast and easy to crawl.',
		stack: 'Product UI / technical SEO / performance'
	},
	{
		name: 'Tyk.io',
		url: 'https://www.tyk.io',
		image: '/tyk-mockup.webp',
		eyebrow: 'Enterprise SaaS',
		summary: 'Frontend work for a SaaS platform where the UI needed to feel clear, reliable, and a bit more mature.',
		stack: 'B2B UI / design systems'
	},
	{
		name: 'Two Circles Studio',
		url: 'https://twocirclesstudio.com/',
		image: '/twocircles-mockup.webp',
		eyebrow: 'Studio portfolio',
		summary: 'A more visual site where layout rhythm, motion, and presentation mattered just as much as the code underneath.',
		stack: 'Creative frontend / animation'
	},
	{
		name: 'Cannes Lions',
		url: 'https://www.canneslions.com/',
		image: '/canneslions-mockup.webp',
		eyebrow: 'Global events',
		summary: 'A large content-driven brand site where responsive UX, page speed, and keeping things organized really mattered.',
		stack: 'Content platform / optimization / responsive UX'
	},
	{
		name: 'Money20/20',
		url: 'https://www.money2020.com/',
		image: '/money2020-mockup.webp',
		eyebrow: 'Fintech events',
		summary: 'An event site with lots of content and conversion pressure, where structure and performance both had to hold up.',
		stack: 'Event UX / production frontend'
	},
	{
		name: 'GlobalData',
		url: 'https://www.globaldata.com/',
		image: '/gd-mockup.webp',
		eyebrow: 'Data publishing',
		summary: 'A data-heavy publishing build where frontend structure, speed, and technical SEO had to work together.',
		stack: 'Editorial systems / scalable UI / SEO'
	}
];