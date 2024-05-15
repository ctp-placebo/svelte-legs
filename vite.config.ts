import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { searchForWorkspaceRoot } from 'vite'

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js, svelte}']
	},
	server: {
		fs: {
			allow: [
				// search up for workspace root
				searchForWorkspaceRoot(process.cwd()),
				// custom rules:
				'../tailwind.config.cjs',
			],
		},
	},
});

// Q: YTF we need dis server paragraff? 
// A: to get daisyUi themes fae the tailwind.config.js wot
// wir usin' in the theme switcher in the header.
// Aye fureal