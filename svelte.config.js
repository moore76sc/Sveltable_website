import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ out: 'build'}),
		target: '#svelte',
		router: true,
		ssr: true,
		hydrate: true,
		trailingSlash: 'never',
		amp: false,
		files: {
		
		}
	}
};

export default config;
