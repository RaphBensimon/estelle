export default defineNuxtConfig({
	devtools : { enabled : true },
	css      : ['~/assets/css/main.scss'],
	postcss  : {
		plugins : {
			tailwindcss  : {},
			autoprefixer : {}
		}
	},
	site : {
		url           : 'https://estelle-venturini.fr',
		name          : 'Estelle Venturini',
		// eslint-disable-next-line max-len
		description   : 'Je suis Estelle Venturini, Sophrologue et Sexothérapeute certifiée RNCP. Je vous accompagne en douceur vers vos objectifs dans un espace safe. Explorez la sophrologie, la sexothérapie et la thérapie Mosaïc® pour votre santé mentale et sexuelle. Espace dédié aux jeunes, femmes et à la communauté LGBTQIA+. Prenez rendez-vous."',
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
	seo     : {
		automaticDefaults          : false,
		redirectToCanonicalSiteUrl : true
	},
	gtag    : { id : 'GTM-MD85NNQC' },
	modules : [
		'@nuxt/image',
		'nuxt-icon',
		'@vueuse/motion/nuxt',
		'@nuxtjs/seo',
		'nuxt-gtag'
	]
})