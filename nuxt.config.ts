export default defineNuxtConfig({
	devtools : { enabled : true },
	css      : ['~/assets/css/main.css'],
	postcss  : {
		plugins : {
			tailwindcss  : {},
			autoprefixer : {}
		}
	},
	site : {
		url           : 'https://estelle-venturini.fr',
		name          : 'Estelle Ventuini',
		description   : 'Welcome to my awesome site!',
		defaultLocale : 'fr'
	},
	app : {
		head : {
			link : [
				{
					rel  : 'stylesheet',
					href : 'https://fonts.googleapis.com/css2?family=Wix&display=swap'
				},
				{
					rel  : 'stylesheet',
					href : 'https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap'
				},
				{
					rel  : 'icon',
					type : 'image/x-icon',
					href : '/favicon.jpg'
				}

			]
		}
	},
	modules : [
		'@nuxt/image',
		'nuxt-icon',
		'@vueuse/motion/nuxt',
		'@nuxtjs/seo',
		'@nuxt/content'
	]
})