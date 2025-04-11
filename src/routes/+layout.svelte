<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

</svelte:head>

<div class="flex flex-col min-h-screen bg-gray-50">
	<Header />
	<main class="flex-grow container mx-auto px-4 py-8">
		{@render children()}
	</main>
	<Footer />
</div>
