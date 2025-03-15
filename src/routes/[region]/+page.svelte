<script lang="ts">
	import BackButton from '$lib/components/ui/back-button.svelte';
	import { CompactCard } from '$lib/components/features/compact-card';
	import { FeatureCard } from '$lib/components/features/feature-card';
	import { type PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section class="mx-auto max-w-6xl px-4 py-12">
	<!-- Header Section -->
	<div class="mb-12 text-center">
		<h1 class="mb-3 text-4xl font-bold text-foreground">{data.region} Business Directory</h1>
		<p class="mx-auto max-w-2xl text-xl text-muted-foreground">
			Find and explore the best local businesses in {data.region}
		</p>
	</div>

	<!-- Back Button - Navigation -->
	<div class="mb-8">
		<BackButton backText="Back to Home" href="/" />
	</div>

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
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each data.otherRegions as region}
				<CompactCard label={region.name} href="/{region.slug}" />
			{/each}
		</div>
	</div>
</section>
