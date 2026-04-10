import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		{
			// When a Svelte component has no <style> block, the Svelte plugin's load
			// returns nothing for the virtual CSS module, causing Vite to read the raw
			// .svelte file. The Tailwind plugin then tries to parse it as CSS and fails.
			// This plugin returns an empty string to prevent that fallback.
			name: 'svelte-empty-css-fallback',
			load(id) {
				if (id.includes('.svelte') && id.includes('type=style') && id.includes('lang.css')) {
					return '';
				}
			}
		}
	]
});
