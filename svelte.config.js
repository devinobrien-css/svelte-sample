import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// https://kit.svelte.dev/docs/integrations#preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// https://kit.svelte.dev/docs/adapters
		adapter: adapter()
	}
};

export default config;
