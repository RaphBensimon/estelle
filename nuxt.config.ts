// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools : { enabled : true },
	css      : ['~/assets/css/main.css'],
	ssr      : false,
	target   : 'static',
	router   : { base : '/estelle/' },
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
		defaultLocale : 'fr' // not needed if you have @nuxtjs/i18n installed
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
				}

			]
		}
	},

	modules : ['@nuxt/image',
		'nuxt-icon',
		'@nuxtjs/seo']
})