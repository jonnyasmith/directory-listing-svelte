<script>
	import { config } from '$lib/config';
</script>

<div class="mx-auto max-w-4xl px-4 py-12">
	<h1 class="mb-6 text-3xl font-bold">About {config.siteName}</h1>

	<div class="prose prose-lg max-w-none text-foreground">
		<p>
			Welcome to {config.siteName}, your comprehensive directory for discovering local businesses,
			services, and information across various regions and localities.
		</p>

		<h2>Our Mission</h2>
		<p>
			We aim to connect people with local businesses and services in their area, making it easier to
			discover and support local communities.
		</p>

		<h2>Contact Us</h2>
		<p>
			If you have any questions or would like to list your business in our directory, please contact
			us at <a href="mailto:contact@example.com" class="text-primary hover:underline"
				>contact@example.com</a
			>.
		</p>
	</div>
</div>
