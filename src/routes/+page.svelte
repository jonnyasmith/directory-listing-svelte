<script lang="ts">
	import { type PageData } from './$types';
	import { businesses } from '$lib/data/data';
	import { BusinessCard } from '$lib/components/features/business-card';
	import { slugify } from '$lib/utils';
	import { config } from '$lib/config';
	import { CompactCard } from '$lib/components/features/compact-card';
	import BreadcrumbNav from '$lib/components/features/breadcrumb-nav.svelte';

	let { data }: { data: PageData } = $props();
</script>

<!-- Hero Section -->
<section class="hero-section container text-center">
	<h2 class="mb-3 text-xl font-semibold">{config.heroTitle}</h2>
	<h1 class="mb-6 text-5xl font-bold">{config.heroSubtitle}</h1>
	<p class="mb-4 text-xl">
		{config.heroDescription1}
	</p>
	<p class="mx-auto max-w-3xl text-lg">
		{config.heroDescription2}
	</p>
</section>

<!-- Cities Section -->
<section class="cities-section container mt-6">
	<h2 class="mb-8 text-center text-3xl font-bold">{config.locationSectionTitle}</h2>

	<div class="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each data.localities as locality}
			<CompactCard
				label={`${locality.name}, ${locality.region.shortName}`}
				href="/{locality.region.slug}/{locality.slug}"
			/>
		{/each}
	</div>
</section>
