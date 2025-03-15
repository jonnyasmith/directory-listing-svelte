<script lang="ts">
	import BackButton from '$lib/components/ui/back-button.svelte';
	import { CompactCard } from '$lib/components/features/compact-card';
	import { FeatureCard } from '$lib/components/features/feature-card';
	import { type PageData } from './$types';
	import { page } from '$app/state';
	import { generateBreadcrumbJsonLd } from '$lib/utils';
	import BreadcrumbNav from '$lib/components/features/breadcrumb-nav.svelte';

	let { data }: { data: PageData } = $props();

	// Generate breadcrumb data
	const breadcrumbItems = [
		{ name: 'Home', url: new URL('/', page.url.href).href },
		{ name: data.region.name, url: page.url.href }
	];
	const breadcrumbJsonLd = JSON.stringify(generateBreadcrumbJsonLd(breadcrumbItems));
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${breadcrumbJsonLd}</script>`}
</svelte:head>

<section class="container">
	<!-- Header Section -->
	<div class="mb-12 text-center">
		<h1 class="mb-3 text-4xl font-bold text-foreground">{data.region.name} Business Directory</h1>
		<p class="mx-auto max-w-2xl text-xl text-muted-foreground">
			Find and explore the best local businesses in {data.region.name}
		</p>
	</div>

	<BreadcrumbNav />
	<!-- Localities Section - Primary Content -->
	<div class="mb-10">
		<h2 class="mb-6 text-2xl font-semibold text-foreground">Cities in {data.region.name}</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.localities as locality}
				<FeatureCard
					title={locality.name}
					href="/{data.region.slug}/{locality.slug}"
					subtitle={`Explore businesses in ${locality.name}`}
				/>
			{/each}
		</div>
	</div>

	<!-- Other States/Regions Section - Secondary Content -->
	<div>
		<h2 class="mb-4 text-2xl font-semibold text-foreground">Browse Other States</h2>
		<div class="grid grid-cols-3 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each data.otherRegions as region}
				<CompactCard label={region.name} href="/{region.slug}" />
			{/each}
		</div>
	</div>
</section>
