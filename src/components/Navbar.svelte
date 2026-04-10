<script>
	import { t } from '../lib/i18n/index.js';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import { onMount } from 'svelte';

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 10;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const links = $derived([
		{ href: '#projects', label: $t('nav.projects') },
		{ href: '#experience', label: $t('nav.experience') },
		{ href: '#contact', label: $t('nav.contact') }
	]);
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {scrolled
		? 'border-b border-border bg-background/80 shadow-sm backdrop-blur-xl'
		: 'bg-transparent'}"
>
	<div class="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
		<a href="/" class="text-sm font-semibold tracking-tight text-foreground">
			Ha<span class="text-muted-foreground">'</span>B
		</a>

		<!-- Desktop nav -->
		<div class="hidden items-center gap-1 sm:flex">
			{#each links as link}
				<a
					href="/{link.href}"
					class="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
				>
					{link.label}
				</a>
			{/each}
			<div class="ml-2">
				<LanguageSwitcher />
			</div>
		</div>

		<!-- Mobile menu button -->
		<div class="flex items-center gap-2 sm:hidden">
			<LanguageSwitcher />
			<button
				onclick={() => (mobileOpen = !mobileOpen)}
				class="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary"
				aria-label="Menu"
			>
				{#if mobileOpen}
					<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				{:else}
					<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<line x1="4" y1="12" x2="20" y2="12"></line>
						<line x1="4" y1="6" x2="20" y2="6"></line>
						<line x1="4" y1="18" x2="20" y2="18"></line>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="border-t border-border bg-background px-6 py-3 sm:hidden">
			{#each links as link}
				<a
					href={link.href}
					onclick={() => (mobileOpen = false)}
					class="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
				>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</nav>
