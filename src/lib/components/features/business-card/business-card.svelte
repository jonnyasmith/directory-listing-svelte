<script lang="ts">
	import { type Business } from '$lib/types';
	import { Link } from '$lib/components/ui/link';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { cn, slugify } from '$lib/utils';

	export type PropTypes = {
		business: Business;
	};

	let { business }: PropTypes = $props();

	const href = `/${slugify(business.addressObj.addressRegion)}/${slugify(business.addressObj.addressLocality)}/${business.slug}`;
</script>

<Card
	class={cn(
		'relative h-full transition-all duration-300',
		'hover:-translate-y-1 hover:border-primary hover:shadow-xl'
	)}
>
	<CardHeader class="px-6 pb-2 pt-6">
		<CardTitle>
			<Link {href} class="group">
				<span class="transition-colors group-hover:text-primary">{business.name}</span>
				<span class="absolute inset-0"></span>
			</Link>
		</CardTitle>
	</CardHeader>

	<CardContent class="px-6 pb-6">
		<Badge class="mb-3">{business.category}</Badge>
		<div class="text-muted-foreground">
			{business.address}
		</div>
	</CardContent>
</Card>
