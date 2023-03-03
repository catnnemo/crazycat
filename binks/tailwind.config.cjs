/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		fontFamily:{
			title: ['"Paytone One"','sans-serif'],
			button: ['Sora', 'sans-serif'],
			code: ["Source Code Pro", 'monospace'],
		},
		extend: {
		},
	},
	plugins: [],
}
