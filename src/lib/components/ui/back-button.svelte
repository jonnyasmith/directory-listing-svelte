<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
	import BackIcon from '@lucide/svelte/icons/arrow-left';

	let { backText = 'Back', href }: { backText: string; href: string } = $props();

	// When href is just "/", we only want to use the base path
	// For all other hrefs, append them to the base path
	const finalHref = href === '/' ? base : `${base}${href}`;
</script>

<Button variant="secondary" href={finalHref}>
	<BackIcon class="size-4" />
	{backText}
</Button>
