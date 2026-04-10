<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-background text-foreground">
	<Navbar />
	<main class="flex-grow">
		{@render children()}
	</main>
</div>
