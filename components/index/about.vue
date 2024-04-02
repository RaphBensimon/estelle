<template>
	<div>
		<AppShape
			id="about"
			class="fill-terra mt-28 relative top-1 rotate-180" />
		<section
			class="bg-terra flex items-center px-10 py-20">
			<div
				class="flex
					md:flex-row
					justify-center
					items-center
					flex-col">
				<NuxtImg
					src="/estelle-venturini.jpg"
					sizes="350px"
					id="profil-picture" />
				<div
					class="mt-14 md:mt-0 md:ml-14 lg:w-2/4">
					<h3
						class="font-bold
							font-mono
							text
							text-5xl
							text-white">
						Estelle Venturini
					</h3>
					<p
						class="my-4 text-slate-50">
						Sophrologue et sexothérapeute, je m'engage pleinement dans l'accompagnement
						vers un épanouissement mental et sexuel.
						<br>
						Offrant un espace sécurisé et bienveillant, j'encourage
						l'exploration des émotions, désirs et besoins les plus intimes.
					</p>
					<NuxtLink
						class="cursor-pointer
							text-slate-50
							underline
							hover:opacity-75">
						En savoir plus...
					</NuxtLink>
				</div>
			</div>
		</section>
		<AppShape
			class="fill-terra relative -top-1" />
	</div>
</template>
<style scoped>
#profil-picture {
	border-radius: 3rem 3rem 50% 3rem;
	max-width: 90%;
}
</style>