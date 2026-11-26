import type { Component } from 'svelte';
import AutomationDemo from '#lib/components/sketches/AutomationDemo.svelte';
import DashboardDemo from '#lib/components/sketches/DashboardDemo.svelte';
import InternalToolsDemo from '#lib/components/sketches/InternalToolsDemo.svelte';
import SeoDemo from '#lib/components/sketches/SeoDemo.svelte';

/** The headline: three problems, then the answer. */
export const problems = ['Slow websites.', 'Manual admin.', 'Messy data.'] as const;
export const answer = 'I fix them.';

export const lead =
	"Technical SEO, business automation, internal tools and dashboards. It's what I do, and what I love doing.";

export interface Skill {
	name: string;
	caption: string;
	/** Extra words for screen readers, where the demo shows more than the caption says. */
	detail?: string;
	/** Which headline problem this skill answers (an index into `problems`). */
	answers: number;
	demo: Component;
}

export const skills: Skill[] = [
	{
		name: 'Technical SEO',
		caption: 'I go way beyond page speed.',
		detail: 'Schema, crawling, internal links and E-E-A-T too.',
		answers: 0,
		demo: SeoDemo
	},
	{
		name: 'Business automation',
		caption: 'I make the boring jobs run themselves.',
		answers: 1,
		demo: AutomationDemo
	},
	{
		name: 'Internal tools',
		caption: 'Built around how your team works.',
		answers: 1,
		demo: InternalToolsDemo
	},
	{
		name: 'Dashboards',
		caption: 'All your numbers on one screen.',
		answers: 2,
		demo: DashboardDemo
	}
];
