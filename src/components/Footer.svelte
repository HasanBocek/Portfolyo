<script>
	import WakaTime from './WakaTime.svelte';
	import { t } from '../lib/i18n/index.js';
</script>

<footer class="border-t border-border px-6 py-8">
	<div class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
		<div class="flex items-center gap-4">
			<span class="text-xs text-muted-foreground">
				&copy; {new Date().getFullYear()} Hasan BÖCEK
			</span>
		</div>
		<WakaTime />
	</div>
</footer>
