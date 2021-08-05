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
			assets: 'assets',
			lib: 'src/lib',
			routes: 'src/routes',
			template: 'src/app.html'
		},
		paths: {
			assets: 'static',
			base: ''
		},
    // adapter: adapter({
    //   // default options are shown
    //   pages: "dist",
    //   assets: "dist",
    //   fallback: null
    // })
    adapter: adapter({
			// default options are shown
			pages: 'dist',
			assets: 'dist/static',
			fallback: null
		}),
    vite: () => ({
			resolve: {
				alias: {
					$languages: path.resolve('./src/languages')
				}
			}
		})
	}
};

export default config;
