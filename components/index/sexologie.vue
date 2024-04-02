<template>
	<div
		id="sexo">
		<section
			class="bg-terra flex items-center flex-col mt-28 px-10 py-20">
			<div
				class="flex
					md:flex-row
					justify-center
					items-center
					flex-col-reverse
					w-full">
				<div
					id="image"
					class="flex
						justify-center
						h-full
						mix-blend-luminosity
						mt-8
						md:mt-0
						relative
						w-full">
					<NuxtImg
						class="h-full object-center object-cover w-full"
						src="/main-dans-la-main.jpg"
						sizes="400px" />
				</div>
				<div
					class="text-white md:ml-14 md:w-2/4">
					<h4
						class="font-bold font-mono text text-5xl">
						La sexologie
					</h4>
					<p
						class="my-4 text-slate-50">
						La sexologie explore les multiples facettes de la sexualité humaine, en considérant à la fois
						les aspects physiques, psychologiques et relationnels. Mon rôle en tant que sexologue est
						d'accompagner mes patients dans leur cheminement vers une vie sexuelle épanouissante
						et équilibrée. En utilisant des approches personnalisées et bienveillantes, nous travaillons
						ensemble pour surmonter les obstacles, comprendre les désirs et trouver des solutions adaptées
						à leurs besoins spécifiques.
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
	</div>
</template>
<style>
#image, #image img {
	border-radius: 3rem  3rem  50% 3rem;
	max-width: 90%;
    width: 350px;
}
</style>