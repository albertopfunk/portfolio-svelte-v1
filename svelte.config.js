const sveltePreprocess = require('svelte-preprocess');
const adapter = require('@sveltejs/adapter-netlify');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte"
	}
};

export default config;
