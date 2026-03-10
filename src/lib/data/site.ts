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
		'<span class="hero__headline-line">I build fast,<br> SEO optimised</span><br class="hero__headline-break" /><span class="hero__headline-line">websites that rank well and are easy to use.</span>',
	intro:
		"I'm a front-end developer with 10+ years of experience across SaaS, editorial, ecommerce, Web3, and custom WordPress builds. I focus on technical SEO, performance, and clean UI - building sites that feel fast, sharp, and easy to use.",
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
	] satisfies SocialLink[]
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
		label: 'automation and ai workflows',
		detail: 'AI tooling, automation ideas, and product flows that remove repetitive work.'
	},
	{
		value: 'SEO',
		label: 'performance and discoverability',
		detail: 'Core Web Vitals, clean markup, indexable pages, and technical polish.'
	}
];

export const capabilities: CapabilityGroup[] = [
	{
		title: 'Frontend systems',
		description: 'I like building frontends that stay clean even when the content grows and the product gets messy.',
		items: ['SvelteKit / Svelte 5', 'React / Next.js', 'TypeScript', 'Component architecture']
	},
	{
		title: 'SEO and optimization',
		description: 'I care about the technical side too, not just how the page looks on first glance.',
		items: ['Technical SEO', 'Core Web Vitals', 'Performance tuning', 'Accessibility']
	},
	{
		title: 'WordPress and delivery',
		description: 'I have done a lot of WordPress work too, so I am comfortable when marketing, content, and frontend all need to meet in the middle.',
		items: ['WordPress', 'Custom Themes', 'Gutenberg', 'Playwright / Storybook']
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