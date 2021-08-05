import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({
        "postcss": true
    })],

	kit: {
		// // hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		appDir: '_app',
    files: {
			assets: 'src/assets',
			lib: 'src/lib',
			routes: 'src/routes',
			template: 'src/app.html'
		},
		// paths: {
		// 	assets: '/',
		// 	base: '/dist'
		// },
    adapter: adapter({
			// default options are shown
			pages: 'dist',
			assets: 'dist',
			fallback: null
		}),
    vite: () => ({
			resolve: {
				alias: {
					$assets: path.resolve('./src/assets')
				}
			}
		})
	}
};

export default config;
