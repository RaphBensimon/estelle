<template>
	<div>
		<AppShape
			id="sophro"
			class="fill-truffle mt-28 relative top-1 rotate-180" />

		<section
			class="bg-truffle flex items-center flex-col px-10 py-20">
			<div
				class="flex
					md:flex-row
					justify-center
					items-center
					flex-col
					w-full">
				<div
					class="text-white md:w-2/4">
					<h4
						class="font-bold font-mono text text-5xl">
						La sophrologie
					</h4>
					<p
						class="my-4 text-slate-50">
						C'est une méthode de relaxation qui combine la respiration, la méditation et
						la visualisation pour harmoniser le corps et l'esprit. Elle aide à gérer le stress, l'anxiété
						et à renforcer la confiance en soi.
						Les séances incluent des exercices simples guidés pour détendre le corps et calmer l'esprit.
					</p>
					<NuxtLink
						class="cursor-pointer
							text-slate-50
							underline
							hover:opacity-75">
						En savoir plus...
					</NuxtLink>
				</div>

				<div
					id="image"
					class="flex
						justify-center
						h-full
						mix-blend-luminosity
						mt-8
						md:mt-0
						relative
						w-full
						md:ml-14">
					<NuxtImg
						class="h-full object-center object-cover w-full"
						src="/femme-sophrologie.jpg"
						sizes="350px" />
				</div>
			</div>
		</section>
		<AppShape
			class="fill-truffle relative -top-1" />
	</div>
</template>
<style>
#image, #image img {
	border-radius: 3rem  3rem 3rem 50%;
	max-width: 90%;
    width: 350px;
    height: 483px;
}
@media (max-width:640px){
	#image, #image img {
		border-radius: 3rem !important;
	}
}
</style>