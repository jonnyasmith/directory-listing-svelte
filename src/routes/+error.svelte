<script>
	import { page } from '$app/stores';
</script>

<div class="error-container">
	<h1>{$page.status}: {$page.error?.message || 'Not found'}</h1>
	<p>Sorry, the page you're looking for doesn't exist or another error occurred.</p>
	<a href="/">Go back to homepage</a>
</div>

<style>
	.error-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		text-align: center;
		padding: 0 1rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	p {
		margin-bottom: 2rem;
		color: #666;
	}

	a {
		color: #0066cc;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border: 1px solid #0066cc;
		border-radius: 4px;
		transition: all 0.2s ease;
	}

	a:hover {
		background-color: #0066cc;
		color: white;
	}
</style>
