<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import BackIcon from '@lucide/svelte/icons/arrow-left';

	let { backText = 'Back', href }: { backText: string; href: string } = $props();
</script>

<Button variant="secondary" {href}>
	<BackIcon class="size-4" />
	{backText}
</Button>
