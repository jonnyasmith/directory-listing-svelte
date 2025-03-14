<script lang="ts">
	import { type PageData } from './$types';
	import { businesses } from '$lib/data';
	import { BusinessCard } from '$lib/components/features/business-card';
	import { slugify } from '$lib/utils';
	import BackButton from '$lib/components/ui/back-button.svelte';
	import { config } from '$lib/config';
	import { FeatureCard } from '$lib/components/features/feature-card';
	import { CompactCard } from '$lib/components/features/compact-card';

	let { data }: { data: PageData } = $props();
</script>

<section class="mx-auto max-w-6xl px-4 py-12">
	<div class="mb-12 text-center">
		<h1 class="mb-3 text-4xl font-bold text-foreground">{data.region} Business Directory</h1>
		<p class="mx-auto max-w-2xl text-xl text-muted-foreground">
			Find and explore the best local businesses in {data.region}
		</p>
	</div>

	<div class="mb-8">
		<BackButton />
	</div>

	<!-- Localities Section - Primary Content -->
	<div class="mb-10">
		<h2 class="mb-6 text-2xl font-semibold text-foreground">Cities in {data.region}</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.localities as locality}
				<FeatureCard
					title={locality}
					href="/{slugify(data.region)}/{slugify(locality)}"
					subtitle={`Explore businesses in ${locality}`}
				/>
			{/each}
		</div>
	</div>

	<!-- Other States/Regions Section - Secondary Content -->
	<div>
		<h2 class="mb-4 text-2xl font-semibold text-foreground">Browse Other States</h2>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each data.otherRegions as region}
				<CompactCard label={region} href="/{slugify(region)}" />
			{/each}
		</div>
	</div>
</section>
