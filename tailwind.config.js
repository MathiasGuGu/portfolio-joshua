/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#000000',
				text: '#FFFFFF'
			},
			fontFamily: {
				title: ['Bebas Neue', 'sans-serif']
			}
		}
	},
	plugins: []
};
