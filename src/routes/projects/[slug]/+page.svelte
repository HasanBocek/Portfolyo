<script>
	import { t } from '../../../lib/i18n/index.js';
	import Footer from '../../../components/Footer.svelte';

	let { data } = $props();
	let selectedSection = $state(0);
	let selectedPage = $state(0);

	const statusStyles = {
		green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
		yellow: 'bg-amber-50 text-amber-700 border-amber-200',
		blue: 'bg-blue-50 text-blue-700 border-blue-200'
	};

	let project = $derived($t('projects.items').find((p) => p.slug === data.slug));

	let currentPages = $derived(project?.sections?.[selectedSection]?.pages ?? []);

	let currentImage = $derived(currentPages[selectedPage]);

	function selectSection(i) {
		selectedSection = i;
		selectedPage = 0;
	}
</script>

<svelte:head>
	<title>{project ? `${project.title} | Hasan BÖCEK` : 'Project | Hasan BÖCEK'}</title>
	<meta name="description" content={project?.detailDescription ?? ''} />
</svelte:head>

{#if project}
	<section class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<!-- Back button -->
			<a
				href="/#projects"
				class="border-border text-foreground hover:bg-secondary mb-8 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
			>
				<svg
					class="h-4 w-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="m12 19-7-7 7-7"></path>
					<path d="M19 12H5"></path>
				</svg>
				{$t('projects.detailPage.back')}
			</a>

			<!-- Project header -->
			<div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h1 class="text-foreground mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
						{project.title}
					</h1>
					<span
						class="inline-block rounded-full border px-3 py-1 text-xs font-medium {statusStyles[
							project.status.color
						]}"
					>
						{project.status.label}
					</span>
				</div>

				<!-- Action links -->
				{#if project.github || project.live || project.demo}
					<div class="flex flex-wrap gap-2">
						{#if project.github}
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								class="border-border text-foreground hover:bg-secondary inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
							>
								<svg
									class="h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
								{$t('projects.buttons.github')}
							</a>
						{/if}
						{#if project.live}
							<a
								href={project.live}
								target="_blank"
								rel="noopener noreferrer"
								class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
							>
								<svg
									class="h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
									<polyline points="15 3 21 3 21 9"></polyline>
									<line x1="10" y1="14" x2="21" y2="3"></line>
								</svg>
								{$t('projects.buttons.live')}
							</a>
						{/if}
						{#if project.demo}
							<a
								href={project.demo}
								target="_blank"
								rel="noopener noreferrer"
								class="border-border text-foreground hover:bg-secondary inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
							>
								<svg
									class="h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
									<polyline points="15 3 21 3 21 9"></polyline>
									<line x1="10" y1="14" x2="21" y2="3"></line>
								</svg>
								{$t('projects.buttons.demo')}
							</a>
						{/if}
					</div>
				{/if}
			</div>

			<!-- Detail description -->
			<div class="mb-5">
				<p class="text-muted-foreground text-base leading-relaxed">
					{project.detailDescription}
				</p>
			</div>

			<!-- Tech stack -->
			<div class="mb-10">
				<h2 class="text-foreground mb-4 text-lg font-semibold">{$t('projects.detailPage.tech')}</h2>
				<div class="flex flex-wrap gap-2">
					{#each project.tech as tech}
						<span
							class="bg-secondary text-muted-foreground rounded-lg px-3 py-1.5 font-mono text-sm"
						>
							{tech}
						</span>
					{/each}
				</div>
			</div>

			<!-- Embedded live demo -->
			{#if project.embedUrl}
				<div class="mb-10">
					<h2 class="text-foreground mb-4 text-lg font-semibold">
						{$t('projects.detailPage.liveDemo')}
					</h2>
					<div class="border-border overflow-hidden rounded-xl border bg-card">
						<iframe
							src={project.embedUrl}
							title={project.title}
							class="h-[70vh] min-h-[480px] w-full border-0"
							loading="lazy"
							allow="fullscreen"
						></iframe>
					</div>
					<p class="text-muted-foreground mt-2 text-sm">
						{$t('projects.detailPage.embedHint')}
					</p>
				</div>
			{:else if project.sections && project.sections.length > 0}
				<!-- Section tabs -->
				<div class="mb-4">
					<p class="text-muted-foreground mb-2 text-xs font-medium tracking-wider uppercase">
						{$t('projects.detailPage.sections')}
					</p>
					<div class="flex flex-wrap gap-2">
						{#each project.sections as section, i}
							<button
								onclick={() => selectSection(i)}
								class="rounded-lg px-4 py-2 text-sm font-medium transition-all {selectedSection ===
								i
									? 'bg-primary text-primary-foreground'
									: 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'}"
							>
								{section.name}
							</button>
						{/each}
					</div>
				</div>

				<!-- Sidebar + Image row -->
				<div class="mb-10 flex flex-col gap-4 sm:flex-row">
					<!-- Sidebar: Page buttons for selected section -->
					<div class="shrink-0 sm:w-44">
						<p class="text-muted-foreground mb-2 text-xs font-medium tracking-wider uppercase">
							{$t('projects.detailPage.pages')}
						</p>
						<div class="flex flex-wrap gap-2 sm:flex-col">
							{#each currentPages as page, i}
								<button
									onclick={() => (selectedPage = i)}
									class="flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition-all {selectedPage ===
									i
										? 'border-primary bg-primary/10 text-primary'
										: 'border-border text-foreground hover:bg-secondary'}"
								>
									<svg
										class="h-4 w-4 shrink-0"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
										<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
									</svg>
									<span>{page.label}</span>
								</button>
							{/each}
						</div>
					</div>

					<!-- Image preview -->
					<div class="min-w-0 flex-grow">
						{#if currentImage}
							<div class="border-border overflow-hidden rounded-xl border">
								<img
									src={currentImage.src}
									alt="{project.title} - {currentImage.label}"
									class="h-auto w-full object-cover"
								/>
							</div>
							<p class="text-muted-foreground mt-2 text-xs">
								{project.sections[selectedSection].name} / {currentImage.label}
							</p>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	</section>
{:else}
	<section class="flex min-h-[60vh] items-center justify-center px-6">
		<div class="text-center">
			<h1 class="text-foreground mb-4 text-2xl font-bold">404</h1>
			<p class="text-muted-foreground mb-6">Project not found</p>
			<a
				href="/#projects"
				class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-medium transition-colors"
			>
				{$t('projects.detailPage.back')}
			</a>
		</div>
	</section>
{/if}

<Footer />
