<script>
	import { t } from '../lib/i18n';
	import { scrollAnimation } from '../lib/scrollAnimation.js';
</script>

<svelte:head>
	<title>Hasan BÖCEK | Backend Developer</title>
	<meta name="description" content="Hasan BÖCEK - Backend Developer" />
	<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
</svelte:head>

<div>
	<!-- Hero -->
	<section class="py-16">
		<div class="container mx-auto max-w-3xl px-4">
			<div class="mb-16 flex flex-col items-center text-center" use:scrollAnimation>
				<img
					src="https://i.imgur.com/XZbNbLC.png?1"
					alt="Hasan BÖCEK"
					class="mb-8 h-40 w-40 rounded-full object-cover shadow-sm"
				/>
				<h1 class="mb-4 text-3xl font-bold text-gray-800">
					{$t('hero.title')}
				</h1>
				<p class="mb-6 text-gray-600">
					{$t('hero.subtitle')}
				</p>
				<blockquote class="mb-6 border-l-4 border-gray-300 pl-4 text-gray-500">
					<p style="font-family: 'Comic Neue'; font-style: italic; display: block;">
						“{$t('hero.quote')}“
					</p>
					<footer class="mb-2 text-xs text-gray-400">– {$t('hero.quoteAuthor')}</footer>
				</blockquote>
				<p class="mb-4 text-gray-600">{$t('hero.favoriteMusic')}</p>
				<div class="flex space-x-4">
					{#each $t('socialLinks') as social}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							class={social.color}
							aria-label={social.name}
						>
							<i class="bx {social.icon} text-2xl"></i>
						</a>
					{/each}
				</div>
			</div>

			<!-- Skills -->
			<div class="mb-12" use:scrollAnimation>
				<h2 class="mb-6 text-center text-2xl font-bold">{$t('skills.title')}</h2>
				<div class="flex flex-wrap justify-center gap-2">
					{#each $t('skills.items') as skill}
						<span class="rounded bg-gray-100 px-3 py-1.5 text-sm text-gray-700">{skill}</span>
					{/each}
				</div>
			</div>

			<!-- Projects -->
			<div class="mb-12" use:scrollAnimation>
				<h2 class="mb-6 text-center text-2xl font-bold">{$t('projects.title')}</h2>
				<div class="overflow-x-auto">
					<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
						{#each $t('projects.items') as project}
							<div class="flex h-full flex-col rounded-lg border border-gray-100 bg-white p-4">
								<div class="flex-grow">
									<h3 class="mb-2 font-semibold text-gray-800">{project.title}</h3>
									<p class="mb-3 text-sm text-gray-600">{project.description}</p>
									<div class="mb-4 flex flex-wrap gap-2">
										{#each project.tech as tech}
											<span class="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">{tech}</span
											>
										{/each}
									</div>
								</div>
								<div class="mt-auto flex space-x-2">
									{#if project.github}
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											class="flex items-center justify-center rounded bg-gray-800 px-3 py-1 text-sm text-white transition-colors hover:bg-gray-700"
										>
											<i class="bx bxl-github mr-1 text-sm"></i>
											{$t('projects.buttons.github')}
										</a>
									{/if}
									{#if project.live}
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											class="flex items-center justify-center rounded border border-gray-300 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-50"
										>
											<i class="bx bx-link-external mr-1 text-sm"></i>
											{$t('projects.buttons.live')}
										</a>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Education -->
			<div class="mb-12" use:scrollAnimation>
				<h2 class="mb-6 text-center text-2xl font-bold">{$t('education.title')}</h2>
				<div class="space-y-4">
					{#each $t('education.items') as edu}
						<div class="rounded-lg border border-gray-100 bg-white p-6">
							<div class="mb-2 flex flex-col md:flex-row md:items-start md:justify-between">
								<h3 class="font-semibold text-gray-800">{edu.degree}</h3>
								<span class="mt-1 text-sm text-gray-500 md:mt-0">{edu.period}</span>
							</div>
							<p class="mb-2 text-sm text-gray-700">{edu.institution}</p>
							<p class="text-sm text-gray-600">{edu.description}</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- Club Timeline -->
			<div class="mb-12" use:scrollAnimation>
				<h2 class="mb-6 text-center text-2xl font-bold">{$t('clubTimeline.title')}</h2>
				<div class="relative">
					<div
						class="absolute top-0 left-5 h-full w-0.5 transform bg-gray-200 md:left-1/2 md:-translate-x-1/2"
					></div>

					<div class="space-y-10">
						{#each $t('clubTimeline.items') as item, i}
							<div class="relative hidden md:flex">
								<div
									class="absolute left-1/2 z-10 mt-1.5 h-4 w-4 -translate-x-1/2 transform rounded-full bg-gray-800"
								></div>

								<div class="w-1/2 pr-12 text-right {i % 2 === 0 ? 'block' : 'invisible'}">
									{#if i % 2 === 0}
										<span
											class="mb-2 inline-block rounded bg-gray-100 px-3 py-1 text-xs text-gray-700"
											>{item.period}</span
										>
										<h3 class="text-lg font-semibold text-gray-800">{item.role}</h3>
										<p class="mt-1 text-gray-700">{item.club}</p>
										<p class="mt-2 text-gray-600">{item.description}</p>
									{/if}
								</div>

								<div class="w-1/2 pl-12 {i % 2 !== 0 ? 'block' : 'invisible'}">
									{#if i % 2 !== 0}
										<span
											class="mb-2 inline-block rounded bg-gray-100 px-3 py-1 text-xs text-gray-700"
											>{item.period}</span
										>
										<h3 class="text-lg font-semibold text-gray-800">{item.role}</h3>
										<p class="mt-1 text-gray-700">{item.club}</p>
										<p class="mt-2 text-gray-600">{item.description}</p>
									{/if}
								</div>
							</div>

							<div class="relative pl-12 md:hidden">
								<div
									class="absolute top-6 left-5 z-10 h-3 w-3 -translate-x-1.5 transform rounded-full bg-gray-800"
								></div>

								<div class="rounded-lg border border-gray-100 bg-white p-4">
									<span
										class="mb-2 inline-block rounded bg-gray-100 px-3 py-1 text-xs text-gray-700"
										>{item.period}</span
									>
									<h3 class="text-lg font-semibold text-gray-800">{item.role}</h3>
									<p class="mt-1 text-gray-700">{item.club}</p>
									<p class="mt-2 text-gray-600">{item.description}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Contact -->
			<div class="text-center" use:scrollAnimation>
				<a
					href="mailto:mail@hasanbocek.com"
					class="transition-duration-300 inline-block rounded-lg bg-gray-800 px-6 py-3 font-medium text-white hover:bg-gray-700"
				>
					{$t('contact.title')}
				</a>
			</div>
		</div>
	</section>
</div>
