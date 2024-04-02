<template>
	<div
		class="bg-beige box-border text-lg text-truffle">
		<header
			class="flex
				md:flex-row
				lg:flex-col
				xl:flex-row
				justify-between
				items-center
				px-6
				md:px-12
				py-8">
			<NuxtLink
				to="/">
				<NuxtImg
					src="/logo_estelle_venturini.png"
					sizes="400px"
					class="max-w-3/4-vw pr-8" />
			</NuxtLink>
			<AppNav />
		</header>
		<main
			class="py-8 lg:py-12">
			<slot />
		</main>
		<footer
			class="flex justify-center pb-12 px-20">
			<div
				class="flex-col
					justify-center
					items-center
					text-center
					text-sm">
				<div>
					@2024, Estelle VENTURINI, Tous droits réservés
				</div>
				<div>Crée par Raphaël BENSIMON</div>
			</div>
		</footer>
	</div>
</template>