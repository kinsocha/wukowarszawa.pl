/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{ts,tsx,astro,html}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
			},
		},
	},
	plugins: [],
}