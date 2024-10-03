<template>
	<div
		class="box-border bg-beige text-lg text-truffle">
		<header
			class="flex
				items-center
				justify-between
				px-6
				py-8
				md:flex-row
				md:px-12
				lg:flex-col
				xl:flex-row">
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
			class="pb-8 lg:pb-12">
			<slot />
		</main>
		<footer
			class="flex justify-center px-20 pb-12">
			<div
				class="flex-col
					items-center
					justify-center
					text-center
					text-sm">
				<div>
					@2024, Estelle VENTURINI, Tous droits réservés
				</div>
				<div>Crée par Raphaël BENSIMON</div>
				<div>
					<a
						class="underline"
						href="/politics">
						Politique de confidentialité
					</a>
					<a
						class="mx-2 underline"
						href="/legals">
						Mentions légales
					</a>
					<a
						class="underline"
						href="/cgv">
						CGV
					</a>
				</div>
			</div>
		</footer>
	</div>
</template>