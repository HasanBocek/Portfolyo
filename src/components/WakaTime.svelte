<script>
	import { onMount } from 'svelte';
	import { t, language } from '../lib/i18n';

	let codingTime = '';
	let loading = true;
	let error = false;

	function translateTime(text, lang) {
		if (lang !== 'tr' || !text) return text;
		return text
			.replace(/(\d+)\s*hrs?/gi, '$1 saat')
			.replace(/(\d+)\s*mins?/gi, '$1 dk')
			.replace(/(\d+)\s*secs?/gi, '$1 sn');
	}

	onMount(async () => {
		try {
			const response = await fetch('/api/wakatime');
			if (response.ok) {
				const data = await response.json();
				codingTime = data.data?.text || '';
			} else {
				error = true;
			}
		} catch (e) {
			error = true;
		} finally {
			loading = false;
		}
	});
</script>

<div class="flex items-center justify-center gap-2 text-gray-400">
	<i class="bx bx-code-alt text-lg"></i>
	{#if loading}
		<span class="text-sm">{$t('wakatime.loading')}</span>
	{:else if error}
		<span class="text-sm">{$t('wakatime.error')}</span>
	{:else}
		<span class="text-sm">{$t('wakatime.prefix')} {translateTime(codingTime, $language)}</span>
	{/if}
</div>
