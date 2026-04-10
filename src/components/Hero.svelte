<script>
	import { t } from '../lib/i18n/index.js';
</script>

<section class="flex items-center justify-center px-6 pb-15 pt-24">
	<div class="mx-auto max-w-2xl text-center">
		<!-- Profile image -->
		<div class="mb-8 flex justify-center">
			<div class="relative">
				<div class="absolute -inset-1 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 opacity-50 blur-sm"></div>
				<img
					src="https://i.imgur.com/XZbNbLC.png?1"
					alt="Hasan BÖCEK"
					class="relative h-32 w-32 rounded-full object-cover border-6 border-background"
				/>
			</div>
		</div>

		<!-- Greeting -->
		<p class="mb-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
			{$t('hero.greeting')}
		</p>

		<!-- Name -->
		<h1 class="mb-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
			{$t('hero.name')}
		</h1>

		<!-- Role badge -->
		<div class="mb-6 flex justify-center">
			<span class="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-foreground">
				<span class="relative flex h-2 w-2">
					<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
				</span>
				{$t('hero.role')}
			</span>
		</div>

		<!-- Description -->
		<p class="mx-auto mb-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
			{$t('hero.description')}
		</p>

		<!-- Tech stack quick view -->
		<div class="mb-8 flex flex-wrap justify-center gap-2">
			{#each $t('skills.items') as skill}
				<span class="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground">
					{skill}
				</span>
			{/each}
		</div>

		<!-- CTA Buttons -->
		<div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
			<a
				href="/resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
			>
				<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
					<polyline points="7 10 12 15 17 10"></polyline>
					<line x1="12" y1="15" x2="12" y2="3"></line>
				</svg>
				{$t('hero.cv')}
			</a>
			<a
				href="mailto:mail@hasanbocek.com"
				class="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
			>
				<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<rect width="20" height="16" x="2" y="4" rx="2"></rect>
					<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
				</svg>
				{$t('hero.contact')}
			</a>
		</div>
	</div>
</section>
