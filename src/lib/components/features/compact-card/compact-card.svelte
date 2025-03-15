<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { cn } from '$lib/utils';

	export type PropTypes = {
		label: string;
		href: string;
	};

	let { label, href }: PropTypes = $props();
</script>

<a {href} class="block">
	<Card
		class={cn(
			'rounded-md border-0 p-0 shadow-none',
			'bg-primary/10 font-medium text-primary transition-all duration-300',
			'hover:-translate-y-1 hover:bg-primary/20 hover:shadow-md'
		)}
	>
		<CardContent class="p-2 text-center md:p-6">
			{label}
		</CardContent>
	</Card>
</a>
