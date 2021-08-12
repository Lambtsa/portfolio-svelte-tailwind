const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
		extend: {
      colors: {
        'subtitle': '#a8a39d',
        'grey': '#1F1F1E',
        'white': '#f8ecdf',
        'black': '#1a1917',
      },
    },
	},
	plugins: [],
};

module.exports = config;
