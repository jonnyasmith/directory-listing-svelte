<script lang="ts">
	import BackButton from '$lib/components/ui/back-button.svelte';
	import { page } from '$app/state';
	import { BusinessCard } from '$lib/components/features/business-card';
	import { CompactCard } from '$lib/components/features/compact-card';
	import { slugify, generateBreadcrumbJsonLd } from '$lib/utils';
	import { type PageData } from './$types';
	import BreadcrumbNav from '$lib/components/features/breadcrumb-nav.svelte';

	let { data }: { data: PageData } = $props();

	// Generate breadcrumb data
	const breadcrumbItems = [
		{ name: 'Home', url: new URL('/', page.url.href).href },
		{
			name: data.locality.region.name,
			url: new URL(`/${data.locality.region.slug}`, page.url.href).href
		},
		{
			name: data.locality.name,
			url: page.url.href
		}
	];
	const breadcrumbJsonLd = JSON.stringify(generateBreadcrumbJsonLd(breadcrumbItems));
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<section class="mx-auto max-w-6xl px-4 py-12">
	<div class="mb-12 text-center">
		<h1 class="mb-3 text-4xl font-bold text-foreground">
			{data.locality.name}, {data.locality.region.name} Business Directory
		</h1>
		<p class="mx-auto max-w-2xl text-xl text-muted-foreground">
			Find and explore the best local businesses in {data.locality.name}, {data.locality.region
				.name}
		</p>
	</div>

	<BreadcrumbNav />

	<!-- Businesses in Locality -->
	<div class="mb-10">
		<h2 class="mb-6 text-2xl font-semibold text-foreground">Businesses in {data.locality.name}</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.businesses as business}
				<BusinessCard {business} />
			{/each}
		</div>
	</div>

	<!-- Other Cities Section -->
	{#if data.otherLocalities && data.otherLocalities.length > 0}
		<div class="mt-12">
			<h2 class="mb-4 text-2xl font-semibold text-foreground">
				Other Cities in {data.locality.region.name}
			</h2>
			<div class="flex flex-wrap gap-3">
				{#each data.otherLocalities as locality}
					<CompactCard
						label={locality.name}
						href={`/${locality.region.slug}/${slugify(locality.slug)}`}
					/>
				{/each}
			</div>
		</div>
	{/if}
</section>
