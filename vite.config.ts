import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { searchForWorkspaceRoot } from 'vite'

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
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

// YTF we need dis server paragraff? to get daisyUi themes from the tailwind.config.js
// wir usin' in the theme switcher in the header.
// Aye fureal