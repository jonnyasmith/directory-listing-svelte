<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
	import { base } from '$app/paths';

	export type PropTypes = {
		label: string;
		href: string;
	};

	let { label, href }: PropTypes = $props();

	// When href is just "/", we only want to use the base path
	// For all other hrefs, append them to the base path
	const finalHref = href === '/' ? base : `${base}${href}`;
</script>

<a href={finalHref} class="block">
	<Card
		class={cn(
			'rounded-md border-0 p-0 shadow-none',
			'bg-primary/10 font-medium text-primary transition-all duration-300',
			'hover:-translate-y-1 hover:bg-primary/20 hover:shadow-md'
		)}
	>
		<CardContent class="p-6 text-center">
			{label}
		</CardContent>
	</Card>
</a>
