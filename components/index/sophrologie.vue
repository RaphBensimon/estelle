<template>
	<div>
		<AppShape
			id="sophro"
			class="relative top-1 mt-28 rotate-180 fill-truffle" />

		<section
			class="flex flex-col items-center bg-truffle px-10 py-20">
			<div
				class="flex
					w-full
					flex-col
					items-center
					justify-center
					md:flex-row">
				<div
					class="text-end text-white md:w-2/4"
					v-motion
					:initial="motion.left.initial"
					:visible="motion.left.visibleOnce">
					<h4
						class="text-center font-mono text-5xl font-bold md:text-end">
						La sophrologie
					</h4>
					<p
						class="my-4 text-slate-50">
						La sophrologie est une méthode qui vise à harmoniser le corps, les émotions et les pensées,
						offrant ainsi à	chacun la possibilité de trouver son équilibre intérieur et sa juste place
						dans le monde. C’est une boîte à outils composée de pratiques simples, telles que la
						visualisation, la respiration et des mouvements doux, que tu peux utiliser partout et
						à tout moment selon tes besoins (stress, anxiété, dépression, maternité, etc..), et qui
						peutt'accompagner au quotidien !
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

					v-motion
					:initial="motion.right.initial"
					:visible="motion.right.visibleOnce"
					id="image"
					class="relative
						mt-8
						flex
						size-full
						justify-center
						mix-blend-luminosity
						md:ml-14
						md:mt-0">
					<NuxtImg
						class="size-full object-cover object-center"
						src="/femme-sophrologie.jpg"
						sizes="350px" />
				</div>
			</div>
		</section>
		<AppShape
			class="relative -top-1 fill-truffle" />
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