<script lang="ts">
	import IntroSection from '$lib/components/IntroSection.svelte';
	import StatsSection from '$lib/components/StatsSection.svelte';
	import SkillsSection from '$lib/components/SkillsSection.svelte';
	import PortfolioSection from '$lib/components/PortfolioSection.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Personal information
	const personalInfo = {
		name: "Arturas Salivonas",
		description: "Front-End Developer | Building Web3 Experiences | AI Integration Enthusiast",
		profileImage: "/profile.jpg"
	};

	const socialLinks = {
		linkedin: "https://www.linkedin.com/in/salivonas/",
		github: "https://github.com/Arturas-Salivonas",
		facebook: "https://www.facebook.com/arturas.salivonas"
	};

	// Stats and achievements
	const stats = [
		{ value: "9+", label: "Years Experience" },
		{ value: "50+", label: "Projects Delivered" },
		{ value: "15+", label: "Web3 DApps" },
		{ value: "100%", label: "Client Satisfaction" }
	];

	// Skills and technologies
	const skills = [
		{ name: "Vue.js", icon: "💚" },
		{ name: "TypeScript", icon: "📘" },
		{ name: "Web3", icon: "🔗" },
		{ name: "Svelte", icon: "🧡" },
		{ name: "JavaScript", icon: "🟨" },
		{ name: "Node.js", icon: "🟢" },
		{ name: "Tailwind", icon: "🎨" },
		{ name: "AI/ML", icon: "🤖" },
		{ name: "WordPress", icon: "📝" },
		{ name: "Shopify", icon: "🛒" },
		{ name: "Figma", icon: "🎨" },
		{ name: "Git", icon: "🔀" }
	];

	// Portfolio projects
	const portfolio = [

         {
			name: "Tyk.io",
			image: "/tyk-mockup.webp",
			url: "https://www.tyk.io",
			description: "API Management platform"
		},

        {
			name: "Two Circles Studio",
			image: "/twocircles-mockup.webp",
			url: "https://twocirclesstudio.com/",
			description: "Digital design studio"
		},
		{
			name: "CannesLions",
			image: "/canneslions-mockup.webp",
			url: "https://www.canneslions.com/",
			description: "International Festival Community Creators"
		},
		{
			name: "Ascential",
			image: "/ascential-mockup.webp",
			url: "https://www.ascential.com/",
			description: "Data and analytics company"
		},
        		{
			name: "Boudican",
			image: "/boudican-mockup.webp",
			url: "https://www.boudican.com/",
			description: "Organic Marketplace"
		},
        		{
			name: "Money2020",
			image: "/money2020-mockup.webp",
			url: "https://www.money2020.com/",
			description: "Fintech Events and Conferences"
		},
        		{
			name: "GlobalData",
			image: "/gd-mockup.webp",
			url: "https://www.globaldata.com/",
			description: "Unique data provider"
		},
        		{
			name: "Compelo",
			image: "/compelo-mockup.webp",
			url: "https://www.compelo.com/media/",
			description: "Features and insight on influencers"
		},
        		{
			name: "New Statesman",
			image: "/nstatesman-mockup.webp",
			url: "https://www.newstatesman.com/",
			description: "Political and cultural magazine"
		},
        		{
			name: "Packaging gateway",
			image: "/packaging-mockup.webp",
			url: "https://www.packaging-gateway.com/",
			description: "Commercial packaging news and insights"
		},
        		{
			name: "Verdict",
			image: "/verdict-mockup.webp",
			url: "https://www.verdict.co.uk/",
			description: "News magazine covering various sectors"
		},
        		{
			name: "Elite traveler",
			image: "/elitetraveler-mockup.webp",
			url: "http://elitetraveler.com/",
			description: "Luxury lifestyle magazine"
		},
        		{
			name: "Spearswms",
			image: "/spears-mockup.webp",
			url: "https://spearswms.com/",
			description: "News on wealth, business, culture and luxury"
		},
        		{
			name: "The Samling Hotel",
			image: "/samling-mockup.webp",
			url: "https://www.thesamlinghotel.co.uk/",
			description: "Luxury hotel in the Lake District"
		},
        		{
			name: "Press Gazette",
			image: "/gazette-mockup.webp",
			url: "https://pressgazette.co.uk/",
			description: "Journalism industry news"
		}
	];
</script>

<svelte:head>
	<title>{personalInfo.name} - Front-End Developer</title>
	<meta name="description" content={personalInfo.description} />
</svelte:head>

<main>
<IntroSection
		name={personalInfo.name}
		description={personalInfo.description}
		linkedin={socialLinks.linkedin}
		github={socialLinks.github}
		facebook={socialLinks.facebook}
		profileImage={personalInfo.profileImage}
	/>

	<StatsSection stats={stats} />

	<SkillsSection skills={skills} />

	<PortfolioSection projects={portfolio} />

	<ScrollToTop />

	<Footer />
</main>

<style>
	main {
		min-height: 100vh;
		position: relative;
	}
</style>
