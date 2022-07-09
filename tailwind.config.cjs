const daisyui = require("daisyui");
const forms = require("@tailwindcss/forms");

const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {},
	},

	plugins: [forms, daisyui],

	daisyui: {
		themes: [
			"retro",
			"coffee",
			"dark",
			"black",
			"light",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"aqua",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"winter",
		],
	},
};

module.exports = config;
