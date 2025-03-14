<script lang="ts">
	import { type Business } from '$lib/types';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';

	export type PropTypes = {
		business: Business;
	};

	let { business }: PropTypes = $props();
</script>

<Card class="p-8" itemscope itemtype="http://schema.org/LocalBusiness">
	<CardHeader class="p-0 pb-6">
		<CardTitle class="text-3xl" itemprop="name">{business.name}</CardTitle>
		<Badge class="mt-3" itemprop="category">{business.category}</Badge>
	</CardHeader>

	<CardContent class="space-y-4 p-0">
		<div class="flex flex-col gap-2 sm:flex-row sm:items-center">
			<span class="min-w-24 font-medium text-foreground">Address:</span>
			<address
				class="not-italic text-muted-foreground"
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
			<span class="min-w-24 font-medium text-foreground">Phone:</span>
			<a href="tel:{business.phone}" class="text-primary hover:underline" itemprop="telephone">
				{business.phone}
			</a>
		</div>

		{#if business.website}
			<div class="flex flex-col gap-2 sm:flex-row sm:items-center">
				<span class="min-w-24 font-medium text-foreground">Website:</span>
				<a
					href={business.website}
					class="text-primary hover:underline"
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
				<span class="min-w-24 font-medium text-foreground">Hours:</span>
				<div class="text-muted-foreground">
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
	</CardContent>
</Card>
