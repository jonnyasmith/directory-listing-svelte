<script lang="ts">
	import { slugify } from '$lib/utils';
	import { Card, CardHeader, CardTitle, CardContent } from '$lib/components/ui/card';
	import { cn } from '$lib/utils';

	export type PropTypes = {
		title: string;
		href: string;
		subtitle?: string;
	};

	let { title, href, subtitle }: PropTypes = $props();
</script>

<a {href} class="block">
	<Card class={cn('h-full transition-all hover:shadow-md', 'border border-border')}>
		<CardHeader class="px-6 pb-2 pt-6">
			<CardTitle class="text-xl">{title}</CardTitle>
		</CardHeader>
		<CardContent class="px-6 pb-6">
			<p class="text-sm text-muted-foreground">{subtitle}</p>
		</CardContent>
	</Card>
</a>
