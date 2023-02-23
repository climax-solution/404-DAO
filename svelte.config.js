// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import { preprocessThrelte } from '@threlte/preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: seqPreprocessor([vitePreprocess(), preprocessThrelte()]),

	kit: {
		adapter: adapter(),
		alias: {
			'lib': "src/lib",
			'components': 'src/components'
		}
	},
};

export default config;
