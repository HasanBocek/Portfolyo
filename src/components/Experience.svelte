<script>
	import { t } from '../lib/i18n/index.js';
</script>

<section id="experience" class="bg-secondary/50 px-6 py-15">
	<div class="mx-auto max-w-4xl">
		<div class="mb-12 text-center">
			<h2 class="text-foreground mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
				{$t('experience.title')}
			</h2>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			<!-- Work Experience -->
			<div>
				<div class="space-y-3">
					<h3 class="text-muted-foreground mb-3 text-xs font-medium tracking-wide uppercase">
						{$t('experience.title')}
					</h3>
					{#each $t('experience.items') as exp}
						<div
							class="border-border bg-card hover:border-foreground/10 rounded-xl border p-4 transition-all"
						>
							<div class="mb-1 flex items-start justify-between gap-2">
								<h3 class="text-foreground text-sm font-semibold">{exp.role}</h3>
								{#if exp.current}
									<span
										class="flex shrink-0 items-center gap-1 text-[10px] font-medium text-emerald-600"
									>
										<span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
										{$t('experience.active')}
									</span>
								{/if}
							</div>
							{#if exp.companyUrl}
								<a
									href={exp.companyUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="text-muted-foreground hover:text-foreground text-xs transition-colors"
								>
									{exp.company}
								</a>
							{:else}
								<p class="text-muted-foreground text-xs">{exp.company}</p>
							{/if}
							<p class="text-muted-foreground/70 mt-1.5 font-mono text-[11px]">{exp.period}</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- Education + Clubs -->
			<div class="space-y-6">
				<!-- Education -->
				<div>
					<h3 class="text-muted-foreground mb-3 text-xs font-medium tracking-wide uppercase">
						{$t('education.title')}
					</h3>
					{#each $t('education.items') as edu}
						<div class="border-border bg-card rounded-xl border p-4">
							<h4 class="text-foreground text-sm font-semibold">{edu.degree}</h4>
							<p class="text-muted-foreground mt-0.5 text-xs">{edu.institution}</p>
							<p class="text-muted-foreground/70 mt-1.5 font-mono text-[11px]">{edu.period}</p>
						</div>
					{/each}
				</div>

				<!-- Club Timeline -->
				<div>
					<h3 class="text-muted-foreground mb-3 text-xs font-medium tracking-wide uppercase">
						{$t('clubTimeline.title')}
					</h3>
					<div class="relative space-y-0">
						{#each $t('clubTimeline.items') as item, i}
							<div class="relative pb-4 pl-6 last:pb-0">
								{#if i < $t('clubTimeline.items').length - 1}
									<div class="bg-border absolute top-2 left-[3.5px] h-full w-px"></div>
								{/if}
								<div
									class="absolute top-1.5 left-0 h-2 w-2 rounded-full {item.period.includes(
										'Present'
									) || item.period.includes('Devam')
										? 'bg-emerald-500'
										: 'bg-muted-foreground/40'}"
								></div>
								<div>
									<div class="flex items-start justify-between gap-2">
										<h4 class="text-foreground text-xs font-semibold">{item.role}</h4>
										<span class="text-muted-foreground/60 shrink-0 font-mono text-[10px]"
											>{item.period}</span
										>
									</div>
									{#if item.clubUrl}
										<a
											href={item.clubUrl}
											target="_blank"
											rel="noopener noreferrer"
											class="text-muted-foreground hover:text-foreground mt-0.5 text-[11px] font-medium transition-colors"
										>
											{item.club}
										</a>
									{:else}
										<p class="text-muted-foreground mt-0.5 text-[11px] font-medium">{item.club}</p>
									{/if}
									<p class="text-muted-foreground/70 mt-1 text-[11px] leading-relaxed">
										{item.description}
									</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
