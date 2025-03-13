<script lang="ts">
	import { type PageData } from './$types';
	import { businesses } from '$lib/data';
	import { BusinessCard } from '$lib/components/features/business-card';
	import { slugify } from '$lib/utils';
	import { config } from '$lib/config';

	let { data }: { data: PageData } = $props();
</script>

<!-- Hero Section -->
<section class="hero-section">
	<div class="mx-auto max-w-6xl px-4 py-20 text-center">
		<h2 class="mb-3 text-xl font-semibold">{config.heroTitle}</h2>
		<h1 class="mb-6 text-5xl font-bold">{config.heroSubtitle}</h1>
		<p class="mb-4 text-xl">
			{config.heroDescription1}
		</p>
		<p class="mx-auto max-w-3xl text-lg">
			{config.heroDescription2}
		</p>
	</div>
</section>

<!-- Cities Section -->
<section class="cities-section">
	<div class="mx-auto max-w-6xl px-4 py-12">
		<h2 class="mb-8 text-center text-3xl font-bold">{config.locationSectionTitle}</h2>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
			{#each data.cities as city}
				<a
					href="/{slugify(city.locality)}"
					class="block rounded-md bg-primary/10 p-6 text-center font-medium text-primary transition-colors hover:bg-primary/20"
				>
					{city.locality}, {city.region}
				</a>
			{/each}
		</div>
	</div>
</section>
