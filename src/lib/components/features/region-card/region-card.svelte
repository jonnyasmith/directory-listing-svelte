<script lang="ts">
	import { slugify } from '$lib/utils';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
	import { base } from '$app/paths';

	export type PropTypes = {
		name: string;
		baseRegion?: string;
		displayName?: string; // Optional display name (for showing like "Austin, TX")
	};

	let { name, baseRegion, displayName }: PropTypes = $props();

	// Generate the appropriate URL: either /{name} or /{baseRegion}/{name}
	const href = baseRegion ? `/${slugify(baseRegion)}/${slugify(name)}` : `/${slugify(name)}`;
</script>

<a href={`${base}${href}`} class="block">
	<Card
		class={cn(
			'rounded-md border-0 p-0 shadow-none',
			'bg-primary/10 font-medium text-primary transition-colors hover:bg-primary/20'
		)}
	>
		<CardContent class="p-6 text-center">
			{displayName || name}
		</CardContent>
	</Card>
</a>
