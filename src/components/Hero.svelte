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
				href={$t('contact.whatsapp')}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#20bd5a]"
			>
				<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
				</svg>
				{$t('contact.whatsappLabel')}
			</a>
			<a
				href="mailto:{$t('contact.email')}"
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
