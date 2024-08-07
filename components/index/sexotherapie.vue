<template>
	<div
		id="sexo">
		<section
			class="mt-28 flex flex-col items-center bg-terra px-10 py-20">
			<div
				class="flex
					w-full
					flex-col-reverse
					items-center
					justify-center
					md:flex-row">
				<div
					class="border-image-right
						mt-8
						md:mt-0">
					<NuxtImg
						src="/sexotherapie.jpg"

						v-motion
						:initial="motion.left.initial"
						:visible="motion.left.visibleOnce" />
				</div>
				<div
					class="text-justify text-white md:ml-14 md:w-2/4 md:text-left"

					v-motion
					:initial="motion.right.initial"
					:visible="motion.right.visibleOnce">
					<h4
						class="font-mono text-5xl font-bold">
						La sexothérapie
					</h4>
					<p
						class="my-4 text-justify text-slate-50">
						La sexothérapie explore les multiples facettes de la sexualité humaine,
						en considérant à la fois les aspects physiques, émotionnelle, psychologique
						et relationnels. Mon rôle en tant que sexothérapeute est de
						t’accompagner dans ton cheminement vers une vie sexuelles épanouissante et
						équilibré. En utilisant des approches personnalisées et bienveillante,
						nous travaillons ensemble pour surmonter les obstacles,
						comprendre tes désirs ettrouver des solutions adaptées à tes besoins spécifiques.
					</p>
					<a
						href="/sexotherapie"
						class="cursor-pointer
							text-slate-50
							underline
							hover:opacity-75">
						En savoir plus...
					</a>
				</div>
			</div>
		</section>
	</div>
</template>