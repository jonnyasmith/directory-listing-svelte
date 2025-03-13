<script lang="ts">
	import type { PageProps } from './$types';
	import { base } from '$app/paths';
	import { generateLocalBusinessJsonLd } from '$lib/utils';

	let { data }: PageProps = $props();

	const { business } = data;
	const jsonLd = JSON.stringify(generateLocalBusinessJsonLd(business));
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-8">
	<article
		class="rounded-lg bg-white p-8 shadow-lg"
		itemscope
		itemtype="http://schema.org/LocalBusiness"
	>
		<h1 class="mb-3 text-3xl font-bold text-gray-900" itemprop="name">{business.name}</h1>

		<div
			class="mb-6 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
			itemprop="category"
		>
			{business.category}
		</div>

		<div class="mb-8 space-y-4">
			<div class="flex flex-col gap-2 sm:flex-row sm:items-center">
				<span class="min-w-24 font-medium text-gray-700">Address:</span>
				<address
					class="not-italic text-gray-600"
					itemprop="address"
					itemscope
					itemtype="http://schema.org/PostalAddress"
				>
					{#if business.addressObj}
						<span itemprop="streetAddress">{business.addressObj.streetAddress}</span>,
						<span itemprop="addressLocality">{business.addressObj.addressLocality}</span>
						{#if business.addressObj.addressRegion}
							, <span itemprop="addressRegion">{business.addressObj.addressRegion}</span>
						{/if}
						{#if business.addressObj.postalCode}
							<span itemprop="postalCode">{business.addressObj.postalCode}</span>
						{/if}
					{:else}
						<span itemprop="streetAddress">{business.address}</span>
					{/if}
				</address>
			</div>

			<div class="flex flex-col gap-2 sm:flex-row sm:items-center">
				<span class="min-w-24 font-medium text-gray-700">Phone:</span>
				<a href="tel:{business.phone}" class="text-blue-600 hover:underline" itemprop="telephone">
					{business.phone}
				</a>
			</div>

			{#if business.website}
				<div class="flex flex-col gap-2 sm:flex-row sm:items-center">
					<span class="min-w-24 font-medium text-gray-700">Website:</span>
					<a
						href={business.website}
						class="text-blue-600 hover:underline"
						itemprop="url"
						target="_blank"
						rel="noopener noreferrer"
					>
						{business.website}
					</a>
				</div>
			{/if}

			{#if business.openingHours}
				<div class="flex flex-col gap-2 sm:flex-row sm:items-start">
					<span class="min-w-24 font-medium text-gray-700">Hours:</span>
					<div class="text-gray-600">
						<div
							itemprop="openingHoursSpecification"
							itemscope
							itemtype="http://schema.org/OpeningHoursSpecification"
						>
							{business.openingHours.dayOfWeek.join(', ')}:
							<span itemprop="opens">{business.openingHours.opens}</span> -
							<span itemprop="closes">{business.openingHours.closes}</span>
						</div>
					</div>
				</div>
			{/if}
		</div>

		<a
			href="{base}/"
			class="inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-800"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mr-2 h-4 w-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				/>
			</svg>
			Back to Directory
		</a>
	</article>
</div>
