// 📝 DATA TEMPLATE - Copy this to +page.svelte and customize
// File: src/routes/+page.svelte

// ============================================
// PERSONAL INFORMATION
// ============================================
const personalInfo = {
	name: "Your Full Name",
	description: "Your Professional Title | Key Skill 1 | Key Skill 2"
	// Examples:
	// "Senior Software Engineer | React Expert | Cloud Architect"
	// "Creative Designer | UX/UI Specialist | Brand Strategist"
	// "Data Scientist | Machine Learning | AI Enthusiast"
};

// ============================================
// SOCIAL MEDIA LINKS
// ============================================
const socialLinks = {
	linkedin: "https://www.linkedin.com/in/your-username",
	github: "https://github.com/your-username",
	facebook: "https://www.facebook.com/your-username"
	// Optional: Leave empty string "" if you don't want to show a link
};

// ============================================
// BRANDS / COMPANIES YOU'VE WORKED WITH
// ============================================
const brands = [
	{
		name: "Company Name",
		logo: "/images/company-logo.png", // Or use external URL
		url: "https://company-website.com" // Optional
	},
	{
		name: "Another Company",
		logo: "/images/another-logo.svg",
		url: "https://another-company.com"
	}
	// Add as many as you want
];

// Tips for brand logos:
// - Use SVG format for crisp logos at any size
// - Or use WebP/PNG with transparent background
// - Recommended size: 300x150px or similar ratio
// - Keep file size under 50KB

// ============================================
// PORTFOLIO PROJECTS
// ============================================
const portfolio = [
	{
		name: "Project Name",
		image: "/images/project-screenshot.png",
		url: "https://live-project-url.com",
		description: "Brief description of what the project does and your role"
	},
	{
		name: "Another Project",
		image: "/images/another-screenshot.jpg",
		url: "https://another-project.com",
		description: "Technologies used: React, Node.js, MongoDB"
	}
	// Add more projects
];

// Tips for portfolio images:
// - Use actual screenshots of your projects
// - Recommended size: 1200x750px (16:10 ratio)
// - Format: WebP for best performance
// - Show the most interesting/attractive part of the project
// - Keep file size under 100KB

// ============================================
// HOW TO ADD IMAGES
// ============================================
/*

1. Create the images folder:
   CV-Web/static/images/

2. Place your images there:
   CV-Web/static/images/my-logo.png
   CV-Web/static/images/project1.webp
   CV-Web/static/images/company-logo.svg

3. Reference them in your code:
   logo: "/images/my-logo.png"
   image: "/images/project1.webp"

4. Optimize before adding:
   - Use https://squoosh.app/ to compress
   - Convert to WebP format
   - Resize to appropriate dimensions

*/

// ============================================
// IMAGE OPTIMIZATION QUICK GUIDE
// ============================================
/*

For Logos:
- Format: SVG (best) or WebP/PNG
- Size: 300x150px or smaller
- File size: <50KB
- Background: Transparent

For Portfolio Screenshots:
- Format: WebP (best) or JPEG
- Size: 1200x750px
- File size: <100KB
- Quality: 85%

Tools:
- Squoosh: https://squoosh.app/
- TinyPNG: https://tinypng.com/
- ImageOptim: https://imageoptim.com/

*/

// ============================================
// EXAMPLE WITH REAL DATA
// ============================================
/*

const personalInfo = {
	name: "John Smith",
	description: "Full Stack Developer | React & Node.js Expert | Open Source Contributor"
};

const socialLinks = {
	linkedin: "https://www.linkedin.com/in/johnsmith",
	github: "https://github.com/johnsmith",
	facebook: "" // Not using Facebook, leave empty
};

const brands = [
	{
		name: "Google",
		logo: "/images/google-logo.svg",
		url: "https://google.com"
	},
	{
		name: "Microsoft",
		logo: "/images/microsoft-logo.svg",
		url: "https://microsoft.com"
	},
	{
		name: "Amazon",
		logo: "/images/amazon-logo.svg",
		url: "https://amazon.com"
	}
];

const portfolio = [
	{
		name: "E-Commerce Platform",
		image: "/images/ecommerce-screenshot.webp",
		url: "https://myshop.com",
		description: "Full-featured e-commerce platform built with React, Node.js, and MongoDB. Handles 10k+ daily users."
	},
	{
		name: "Task Management App",
		image: "/images/taskapp-screenshot.webp",
		url: "https://mytasks.app",
		description: "Collaborative task management tool with real-time updates. Built with SvelteKit and Firebase."
	},
	{
		name: "Weather Dashboard",
		image: "/images/weather-screenshot.webp",
		url: "https://weatherdash.com",
		description: "Beautiful weather dashboard with 7-day forecasts and interactive maps. React + TypeScript + OpenWeather API."
	}
];

*/
