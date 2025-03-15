<script lang="ts">
	import { type Business } from '$lib/types';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';

	export type PropTypes = {
		business: Business;
	};

	let { business }: PropTypes = $props();
</script>

<Card class="p-8">
	<CardHeader class="p-0 pb-6">
		<CardTitle class="text-3xl">{business.name}</CardTitle>
		<Badge class="mt-3">{business.category}</Badge>
	</CardHeader>

	<CardContent class="space-y-4 p-0">
		<div class="flex flex-col gap-2 sm:flex-row sm:items-center">
			<span class="min-w-24 font-medium text-foreground">Address:</span>
			<address class="not-italic text-muted-foreground">
				{#if business.addressObj}
					<span>{business.addressObj.streetAddress}</span>,
					<span>{business.addressObj.addressLocality}</span>
					{#if business.addressObj.addressRegion}
						, <span>{business.addressObj.addressRegion}</span>
					{/if}
					{#if business.addressObj.postalCode}
						<span>{business.addressObj.postalCode}</span>
					{/if}
				{:else}
					<span>{business.address}</span>
				{/if}
			</address>
		</div>

		<div class="flex flex-col gap-2 sm:flex-row sm:items-center">
			<span class="min-w-24 font-medium text-foreground">Phone:</span>
			<a href="tel:{business.phone}" class="text-primary hover:underline">
				{business.phone}
			</a>
		</div>

		{#if business.website}
			<div class="flex flex-col gap-2 sm:flex-row sm:items-center">
				<span class="min-w-24 font-medium text-foreground">Website:</span>
				<a
					href={business.website}
					class="text-primary hover:underline"
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
					<div>
						{business.openingHours.dayOfWeek.join(', ')}:
						<span>{business.openingHours.opens}</span> -
						<span>{business.openingHours.closes}</span>
					</div>
				</div>
			</div>
		{/if}
	</CardContent>
</Card>
