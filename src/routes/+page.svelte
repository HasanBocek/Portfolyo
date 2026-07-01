<script>
	import Hero from '../components/Hero.svelte';
	import Projects from '../components/Projects.svelte';
	import Experience from '../components/Experience.svelte';
	import Contact from '../components/Contact.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>Hasan BÖCEK | Freelance Full Stack Developer</title>
	<meta name="description" content="Freelance full stack developer. Web uygulamaları ve yönetim panelleri geliştiriyorum. Projeniz için yazın — birlikte konuşalım." />
</svelte:head>

<Hero />

<div class="mx-auto h-px max-w-4xl bg-border"></div>

<Projects />

<Experience />

<Contact />

<Footer />
