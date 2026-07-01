<script>
	import { t } from '../lib/i18n/index.js';

	const statusStyles = {
		green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
		yellow: 'bg-amber-50 text-amber-700 border-amber-200',
		blue: 'bg-blue-50 text-blue-700 border-blue-200'
	};
</script>

<section id="projects" class="px-6 py-15">
	<div class="mx-auto max-w-6xl">
		<div class="mb-12 text-center">
			<h2 class="mb-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
				{$t('projects.title')}
			</h2>
			<p class="text-sm text-muted-foreground">{$t('projects.subtitle')}</p>
		</div>

		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each $t('projects.items') as project}
				<div class="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/10 hover:shadow-sm">
					<!-- Header -->
					<div class="mb-3 flex items-start justify-between gap-2">
						<h3 class="text-base font-semibold text-foreground">{project.title}</h3>
						<span class="shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium {statusStyles[project.status.color]}">
							{project.status.label}
						</span>
					</div>

					<!-- Description -->
					<p class="mb-4 flex-grow text-sm leading-relaxed text-muted-foreground">
						{project.description}
					</p>

					<!-- Tech stack -->
					<div class="mb-4 flex flex-wrap gap-1.5">
						{#each project.tech as tech}
							<span class="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
								{tech}
							</span>
						{/each}
					</div>

					<!-- Actions -->
					<div class="flex items-center gap-2">
						<div class="flex flex-wrap gap-2">
							{#if project.github}
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
								>
									<svg class="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
									{$t('projects.buttons.github')}
								</a>
							{/if}
							{#if project.live}
								<a
									href={project.live}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
								>
									<svg class="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
									class="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
								>
									<svg class="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
										<polyline points="15 3 21 3 21 9"></polyline>
										<line x1="10" y1="14" x2="21" y2="3"></line>
									</svg>
									{$t('projects.buttons.demo')}
								</a>
							{/if}
						</div>

						<!-- Detail arrow button -->
						<a
							href="/projects/{project.slug}"
							class="text-xs ml-auto inline-flex items-center justify-center rounded-lg border border-border p-1.5 text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
							aria-label={$t('projects.buttons.detail')}
						>{$t('projects.buttons.detail')}
							<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M5 12h14"></path>
								<path d="m12 5 7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
