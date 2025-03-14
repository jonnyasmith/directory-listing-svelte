<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import BackButton from '$lib/components/ui/back-button.svelte';
</script>

<div class="mx-auto max-w-6xl px-4 py-12">
	<div class="flex min-h-[50vh] flex-col items-center justify-center text-center">
		<div class="rounded-lg bg-muted/30 p-8 shadow-sm">
			<h1 class="mb-4 text-4xl font-bold text-foreground">
				{$page.status}: {$page.error?.message || 'Page not found'}
			</h1>

			<p class="mb-8 text-xl text-muted-foreground">
				Sorry, the page you're looking for doesn't exist or another error occurred.
			</p>

			<a
				href="{base}/"
				class="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
					<polyline points="9 22 9 12 15 12 15 22"></polyline>
				</svg>
				Return to Home
			</a>
		</div>
	</div>
</div>
