<script lang="ts">
	import type { PageProps } from './$types';
	import { page } from '$app/state';
	import { generateLocalBusinessJsonLd, slugify } from '$lib/utils';
	import BackButton from '$lib/components/ui/back-button.svelte';
	import BusinessDetails from '$lib/components/features/business-details/business-details.svelte';
	import type { Business } from '$lib/types';
	import BreadcrumbNav from '$lib/components/features/breadcrumb-nav.svelte';

	let { data }: PageProps = $props();

	const { business }: { business: Business } = data;

	// Build the canonical URL using the current URL path
	// Since we can't access the full URL in SSR context, we'll use a relative URL
	const pathParts = [page.params.region, page.params.locality, page.params.slug];
	const canonicalPath = `/${pathParts.join('/')}`;

	const jsonLd = JSON.stringify(generateLocalBusinessJsonLd(business, canonicalPath));
	const backHref = `/${page.params.region}/${page.params.locality}`;
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<div class="container">
	<BreadcrumbNav />

	<BusinessDetails {business} />
</div>
