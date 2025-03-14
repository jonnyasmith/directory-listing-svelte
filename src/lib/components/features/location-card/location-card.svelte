<script lang="ts">
	import { slugify } from '$lib/utils';
	import { Card, CardHeader, CardTitle, CardContent } from '$lib/components/ui/card';
	import { cn } from '$lib/utils';

	export type PropTypes = {
		name: string;
		region: string;
		subtitle?: string;
	};

	let { name, region, subtitle = `Explore businesses in ${name}` }: PropTypes = $props();

	const href = `/${slugify(region)}/${slugify(name)}`;
</script>

<a {href} class="block">
	<Card class={cn('h-full transition-all hover:shadow-md', 'border border-border')}>
		<CardHeader class="px-6 pb-2 pt-6">
			<CardTitle class="text-xl">{name}</CardTitle>
		</CardHeader>
		<CardContent class="px-6 pb-6">
			<p class="text-sm text-muted-foreground">{subtitle}</p>
		</CardContent>
	</Card>
</a>
