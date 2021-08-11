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
        'grey': '#252422',
        'white': '#f8ecdf',
        'black': '#121211',
      },
    },
	},
	plugins: [],
};

module.exports = config;
