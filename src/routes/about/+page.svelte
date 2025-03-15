<script>
	import { config } from '$lib/config';
	import { page } from '$app/state';
	import { generateFAQJsonLd, generateBreadcrumbJsonLd } from '$lib/utils';

	// Generate JSON-LD for structured data
	const breadcrumbItems = [
		{ name: 'Home', url: new URL('/', page.url.href).href },
		{ name: 'About', url: page.url.href }
	];
	const breadcrumbJsonLd = JSON.stringify(generateBreadcrumbJsonLd(breadcrumbItems));

	// Define FAQs
	const faqs = [
		{
			question: `How can I find local ${config.itemPlural} in my area?`,
			answer: `You can easily find local ${config.itemPlural} by navigating to your state/region and then selecting your city from the list. Alternatively, you can use the search function to quickly find ${config.itemPlural} by name or location.`
		},
		{
			question: `What information is available about each ${config.itemSingular}?`,
			answer: `For each ${config.itemSingular}, we provide contact information, business hours, location, and a brief description. Many ${config.itemPlural} also have photos, reviews, and additional details about services offered.`
		},
		{
			question: `How can I add my ${config.itemSingular} to your directory?`,
			answer: `To add your ${config.itemSingular} to our directory, please contact us via email at contact@example.com with your business details. We'll review your submission and add it to our directory.`
		},
		{
			question: `Is this service free to use?`,
			answer: `Yes, our directory is completely free for users to browse and find local ${config.itemPlural}. We believe in connecting communities with local services without any barriers.`
		},
		{
			question: `How often is the directory updated?`,
			answer: `We update our directory regularly to ensure all information is accurate and up-to-date. If you notice any outdated information, please let us know so we can correct it.`
		}
	];

	const faqJsonLd = JSON.stringify(generateFAQJsonLd(faqs));
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
	{@html `<script type="application/ld+json">${faqJsonLd}</script>`}
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-12">
	<h1 class="mb-6 text-3xl font-bold">About {config.siteName}</h1>

	<div class="prose prose-lg max-w-none text-foreground">
		<p>
			Welcome to {config.siteName}, your comprehensive directory for discovering local {config.itemPlural},
			services, and information across various regions and localities.
		</p>

		<h2>Our Mission</h2>
		<p>
			We aim to connect people with local {config.itemPlural} and services in their area, making it easier
			to discover and support local communities.
		</p>

		<h2>Why Use {config.siteName}?</h2>
		<ul>
			<li>Comprehensive listings of local {config.itemPlural} across the country</li>
			<li>Accurate and up-to-date information</li>
			<li>Easy to navigate by state and city</li>
			<li>Detailed information about each {config.itemSingular}</li>
		</ul>

		<h2>Frequently Asked Questions</h2>

		<div class="mt-6 space-y-6">
			{#each faqs as faq}
				<div class="rounded-lg border border-muted p-5">
					<h3 class="text-xl font-medium">{faq.question}</h3>
					<p class="mt-2">{faq.answer}</p>
				</div>
			{/each}
		</div>

		<h2>Contact Us</h2>
		<p>
			If you have any questions or would like to list your {config.itemSingular} in our directory, please
			contact us at
			<a href="mailto:contact@example.com" class="text-primary hover:underline"
				>contact@example.com</a
			>.
		</p>
	</div>
</div>
