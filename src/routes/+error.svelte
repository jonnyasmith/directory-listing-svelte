<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<div class="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
	<h1 class="text-4xl font-bold text-gray-900 mb-2">
		{$page.status}: {$page.error?.message || 'Not found'}
	</h1>
	<p class="text-lg text-gray-600 mb-8">
		Sorry, the page you're looking for doesn't exist or another error occurred.
	</p>
	<a
		href="{base}/"
		class="px-5 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
	>
		Go back to homepage
	</a>
</div>
