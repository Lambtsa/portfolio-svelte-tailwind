import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess({
        "postcss": true
    })],

	kit: {
		appDir: '_app',
    files: {
			assets: 'src/assets',
			lib: 'src/lib',
			routes: 'src/routes',
			template: 'src/app.html'
		},
    adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: null
		}),
    prerender: {
      default: true,
    },
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
