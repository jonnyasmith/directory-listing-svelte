<script lang="ts">
	import { type PageData } from './$types';
	import { config } from '$lib/config';
	import { CompactCard } from '$lib/components/features/compact-card';
	import BreadcrumbNav from '$lib/components/features/breadcrumb-nav.svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Find {config.itemPlural} By State | {config.siteName}</title>
	<meta name="description" content="Browse {config.itemPlural} by state across the United States" />
</svelte:head>

<div class="container">
	<h1 class="mb-8 text-center text-3xl font-bold">Find {config.itemPlural} By State</h1>

	<BreadcrumbNav />
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each data.regions as region}
			<CompactCard label={region.name} href="/{region.slug}" />
		{/each}
	</div>
</div>
