// apps/site/postcss.config.js
const { join } = require("./tailwind.config");

module.exports = {
	plugins: {
		tailwindcss: {
			config: join(__dirname, "tailwind.config.js"),
		},
		autoprefixer: {},
	},
};
