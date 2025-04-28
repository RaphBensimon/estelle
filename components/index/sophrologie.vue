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
					class="text-justify text-white md:w-2/4 md:text-right"
					v-motion
					:initial="motion.left.initial"
					:visible="motion.left.visibleOnce">
					<h4
						class="font-mono text-5xl font-bold">
						Mes outils sur-mesure
					</h4>
					<p
						class="my-4 text-justify text-slate-50">
						En tant que thérapeute en santé mentale & sexuelle, je mets à
						ta disposition une boîte à outils composée de pratiques
						simples et accessibles, adaptées à ton rythme et à tes besoins.
						<br><br>
						Chaque personne est unique, c’est pourquoi j’utilise une
						approche pluridisciplinaire, alliant sophrologie, sexothérapie, et
						Thérapie MOSAIC®, pour t'accompagner dans tes
						problématiques et construire un chemin d’accompagnement
						qui te ressemble vraiment.
					</p>
					<a
						href="/outils-mesure"
						class="cursor-pointer
							text-slate-50
							underline
							hover:opacity-75">
						En savoir plus...
					</a>
				</div>

				<div

					v-motion
					:initial="motion.right.initial"
					:visible="motion.right.visibleOnce"
					class="border-image-left
						mt-8
						md:ml-14
						md:mt-0">
					<NuxtImg
						class=""
						src="/sophrologie.jpg"
						sheight="350" />
				</div>
			</div>
		</section>
		<AppShape
			class="relative -top-1 fill-truffle" />
	</div>
</template>
