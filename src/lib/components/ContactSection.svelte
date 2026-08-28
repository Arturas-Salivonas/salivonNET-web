<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import type { ContactData } from '$lib/data/site';

	interface Props {
		contact: ContactData;
		email: string;
	}

	let { contact, email }: Props = $props();
</script>

<section class="section contact-section" id="contact">
	<div class="container">
		<Reveal className="contact" delay={40}>
			<div class="contact__copy">
				<p class="kicker">{contact.eyebrow}</p>
				<h2 class="contact__title">{contact.title}</h2>
				<p class="contact__intro">{contact.description}</p>
				<div class="chips">
					{#each contact.chips as chip}
						<span>{chip}</span>
					{/each}
				</div>
			</div>
			<div class="contact__side">
				<a class="email-btn" href="mailto:{email}">
					<span>{contact.buttonLabel}</span>
					<strong>{email}</strong>
				</a>
				<p class="contact__note">{contact.note}</p>
			</div>
		</Reveal>

		<footer class="footer">
			<span>(c) {new Date().getFullYear()} Arturas Salivonas</span>
			<span>salivon.net - hand-built, no page builder</span>
		</footer>
	</div>
</section>

<style>
	.section {
		padding: clamp(3rem, 7vw, 4.75rem) 0 0;
	}

	:global(.contact) {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
		gap: 2.75rem;
		padding: clamp(1.9rem, 4vw, 3.25rem) clamp(1.5rem, 4vw, 3rem);
		border: 1px solid rgba(160, 182, 227, 0.14);
		background: linear-gradient(180deg, rgba(12, 16, 24, 0.9), rgba(8, 10, 15, 0.96));
	}

	.contact__copy {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.kicker {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.22em;
		color: var(--accent);
	}

	.contact__title {
		max-width: 16ch;
		font-size: clamp(1.9rem, 4vw, 2.625rem);
		line-height: 1.03;
		letter-spacing: -0.03em;
		font-weight: 600;
	}

	.contact__intro {
		max-width: 60ch;
		font-size: 1rem;
		color: var(--text-soft);
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.25rem;
	}

	.chips span {
		padding: 0.5rem 0.8rem;
		border: 1px solid rgba(160, 182, 227, 0.2);
		font-family: var(--font-mono);
		font-size: 0.66rem;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: rgba(233, 240, 255, 0.75);
	}

	.contact__side {
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
		justify-content: center;
	}

	.email-btn {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 1.25rem 1.375rem;
		background: var(--accent);
		color: var(--ink);
		transition:
			transform 200ms ease,
			filter 200ms ease;
	}

	.email-btn:hover {
		transform: translateY(-2px);
		color: var(--ink);
		filter: brightness(1.05);
	}

	.email-btn span {
		font-family: var(--font-mono);
		font-size: 0.66rem;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		opacity: 0.75;
	}

	.email-btn strong {
		font-size: 1.3125rem;
		font-weight: 600;
		letter-spacing: -0.01em;
		word-break: break-word;
	}

	.contact__note {
		font-size: 0.8125rem;
		color: rgba(191, 203, 230, 0.55);
	}

	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
		padding: 1.6rem 0 2.1rem;
		margin-top: 4.75rem;
		border-top: 1px solid rgba(160, 182, 227, 0.1);
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		letter-spacing: 0.08em;
		color: rgba(191, 203, 230, 0.45);
	}

	@media (max-width: 820px) {
		:global(.contact) {
			grid-template-columns: 1fr;
			gap: 1.75rem;
		}

		.contact__title {
			max-width: 100%;
		}
	}
</style>
