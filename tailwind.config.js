/** @type {import('tailwindcss').Config} */
export default {
	theme   : {
		maxWidth : {
			'1/4-vw' : '25vw',
			'1/2-vw' : '50vw',
			'3/4-vw' : '75vw'
		},
		extend     : {
			colors     : {
				'beige'               : '#F9F4EA',
				'dark-sand'           : '665642',
				'sand'                : '#CDAD85',
				'light-sand'          : '#dcc5a9',
				'super-light-sand'    : '#e6d6c2',
				'truffle'             : '#605F4B',
				'light-truffle'       : '#7f7e6e',
				'super-light-truffle' : '#afafa5',
				'sage'                : '#9C9E80',
				'terra'               : '#c47457',
				'super-light-terra'   : '#dbab9a',
				'light-terra'         : '#cf8f78'
			}
		},
		fontFamily : {
			'sans' : ['Wix', 'sans-serif'],
			'mono' : ['DM Serif Text', 'sans-serif']
		}
	},
	plugins : [require('tailwind-hamburgers')],
	css     : ['~/assets/css/main.css'],
	content : [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue'
	]

}
