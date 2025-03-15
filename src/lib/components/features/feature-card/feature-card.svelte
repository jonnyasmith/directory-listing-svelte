<script lang="ts">
	import { Card, CardHeader, CardTitle, CardContent } from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
	import { base } from '$app/paths';

	export type PropTypes = {
		title: string;
		href: string;
		subtitle?: string;
	};

	let { title, href, subtitle }: PropTypes = $props();
</script>

<a href={`${base}${href}`} class="block">
	<Card
		class={cn(
			'h-full transition-all duration-300',
			'hover:-translate-y-1 hover:border-primary hover:shadow-xl'
		)}
	>
		<CardHeader class="px-6 pb-2 pt-6">
			<CardTitle class="text-xl transition-colors hover:text-primary">{title}</CardTitle>
		</CardHeader>
		<CardContent class="px-6 pb-6">
			<p class="text-sm text-muted-foreground">{subtitle}</p>
		</CardContent>
	</Card>
</a>
