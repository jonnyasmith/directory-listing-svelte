<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	function goBack() {
		const currentPath = $page.url.pathname;
		const pathParts = currentPath.split('/').filter(Boolean);

		// Handle business page navigation differently
		if (pathParts[0] === 'business') {
			// If we can determine where the user came from (through referrer), go there
			if (document.referrer && document.referrer.includes(window.location.host)) {
				history.back();
			} else {
				// Otherwise go to home
				goto('/');
			}
		} else {
			// Regular navigation for region/locality pages
			const parentPath = currentPath.split('/').slice(0, -1).join('/') || '/';
			goto(parentPath);
		}
	}

	// Determine the back text based on the current URL
	let backText = 'Back';

	$: {
		const pathParts = $page.url.pathname.split('/').filter(Boolean);
		if (pathParts.length === 0) {
			backText = 'Back to Home';
		} else if (pathParts[0] === 'business') {
			backText = 'Back to Directory';
		} else if (pathParts.length === 1) {
			backText = 'Back to Home';
		} else if (pathParts.length === 2) {
			backText = `Back to ${pathParts[0].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}`;
		}
	}
</script>

<button
	on:click={goBack}
	class="inline-flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80"
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
		<path d="m12 19-7-7 7-7" />
		<path d="M19 12H5" />
	</svg>
	{backText}
</button>
