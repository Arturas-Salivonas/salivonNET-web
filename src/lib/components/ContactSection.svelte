<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import type { ContactSectionData } from '$lib/data/site';

	interface Props {
		contact: ContactSectionData;
	}

	let { contact }: Props = $props();
	const mailtoHref = `mailto:${contact.email}`;
</script>

<section class="section contact-section" id="contact">
	<div class="container">
		<div class="contact-shell">
			<Reveal className="contact-copy" delay={0}>
				<p class="contact-kicker">{contact.eyebrow}</p>
				<h2>{contact.title}</h2>
				<p class="contact-description">{contact.description}</p>
				<a class="contact-button" href={mailtoHref}>
						<span>{contact.buttonLabel}</span>
						<strong>{contact.email}</strong>
					</a>
			</Reveal>

		</div>
	</div>
</section>

<style>
	.contact-section {
		padding-top: clamp(2.5rem, 6vw, 4.5rem);
	}

	.contact-shell {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
		gap: 1rem;
		align-items: stretch;
	}

	:global(.contact-copy),
	:global(.contact-panel) {
		height: 100%;
	}

	:global(.contact-copy) {
		padding: clamp(1.4rem, 3vw, 2rem);

		background:
			linear-gradient(180deg, rgba(12, 16, 24, 0.9), rgba(8, 10, 15, 0.96)),
			radial-gradient(circle at top left, rgba(85, 19, 173, 0.22), transparent 42%);
		border: 1px solid rgba(160, 182, 227, 0.12);
		box-shadow: var(--shadow-panel);
	}

	.contact-kicker,
	.contact-panel__label,
	.contact-tags span {
		font-family: var(--font-mono);
		text-transform: uppercase;
		letter-spacing: 0.16em;
	}

	.contact-kicker {
		margin-bottom: 1rem;
		font-size: 0.78rem;
		color: var(--accent-2);
	}

	:global(.contact-copy) h2 {
		max-width: 13ch;
		font-size: clamp(2.2rem, 4.2vw, 3.5rem);
		line-height: 0.98;
		letter-spacing: -0.05em;
		margin-bottom: 1rem;
	}

	.contact-description {
		max-width: 58ch;
		font-size: 1.02rem;
		color: var(--text-soft);
	}

	:global(.contact-panel) {
		padding: 1px;

		background: linear-gradient(135deg, rgba(182, 136, 255, 0.34), rgba(85, 19, 173, 0.16), rgba(255, 193, 7, 0.12));
	}

	.contact-panel__inner {
		display: grid;
		gap: 1rem;
		height: 100%;
		padding: clamp(1.25rem, 3vw, 1.6rem);

		background:
			linear-gradient(180deg, rgba(13, 17, 24, 0.95), rgba(9, 10, 15, 0.98)),
			radial-gradient(circle at top right, rgba(85, 19, 173, 0.18), transparent 52%);
	}

	.contact-panel__label {
		font-size: 0.72rem;
			color: var(--accent-2);
	}

	.contact-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}

	.contact-tags span {
		display: inline-flex;
		align-items: center;
		justify-content: center;

		padding: 0.55rem 0.8rem;

		font-size: 0.68rem;

		background: rgba(85, 19, 173, 0.22);

	}

	.contact-button {
		display: grid;
		gap: 0.28rem;
		align-items: center;
		padding: 1rem 1.1rem;
	margin-top:1rem;
		background: linear-gradient(135deg, rgba(85, 19, 173, 0.92), rgba(122, 62, 215, 0.94));
		border: 1px solid rgba(214, 187, 255, 0.18);
		transition:
			transform 220ms ease,
			box-shadow 220ms ease,
			filter 220ms ease;
		box-shadow: 0 18px 40px rgba(34, 9, 76, 0.36);
	}

	.contact-button:hover {
		transform: translateY(-2px);
		filter: brightness(1.05);
		box-shadow: 0 22px 44px rgba(34, 9, 76, 0.44);
	}

	.contact-button span {
		font-size: 0.78rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(240, 230, 255, 0.8);
	}

	.contact-button strong {
		font-size: clamp(1.1rem, 2vw, 1.3rem);
		font-weight: 500;
		word-break: break-word;
	}

	.contact-note {
		color: var(--text-soft);
		font-size: 0.95rem;
	}

	@media (max-width: 900px) {
		.contact-shell {
			grid-template-columns: 1fr;
		}

		:global(.contact-copy) h2 {
			max-width: 100%;
		}
	}

	@media (max-width: 640px) {
		.contact-section {
			padding-top: 2rem;
		}

		:global(.contact-copy),
		.contact-panel__inner {
			padding: 1.15rem;
		}

		.contact-tags {
			gap: 0.5rem;
		}

		.contact-tags span {
			width: 100%;
			justify-content: flex-start;
		}

		.contact-button {
			padding: 0.95rem 1rem;
		}
	}
</style>