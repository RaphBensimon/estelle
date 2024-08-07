<template>
	<div>
		<AppShape
			id="therapie-mosaic"
			class="relative top-1 mt-28 rotate-180 fill-sand" />
		<section
			class="flex flex-col items-center bg-sand px-10 py-20">
			<div
				class="flex
					w-full
					flex-col
					items-center
					justify-center
					md:flex-row">
				<div
					class="text-justify text-white md:mr-14 md:w-2/4 md:text-right"
					v-motion
					:initial="motion.left.initial"
					:visible="motion.left.visibleOnce">
					<h4
						class="font-mono text-5xl font-bold">
						Thérapie Mosaic®
					</h4>
					<p
						class="my-4 text-justify text-slate-50">
						La thérapie MOSAIC® (Mouvements Oculaires et Stimulations Alternées pour
						l’Intégration Cérébrale) est une approche neurophysiologique, innovante
						et humaniste qui traite les troubles psychologiques sans
						réactiver les traumatismes. Inspirée de thérapies telles
						que l'EMDR et l'IFS, elle utilise des techniques de
						stimulations alternées pourintégrerles expériences et activerles solutions présentes en chacun.
					</p>
					<a
						href="/therapie-mosaic"
						class="cursor-pointer
							text-slate-50
							underline
							hover:opacity-75">
						En savoir plus...
					</a>
				</div>
				<div
					id="image"
					class="
						border-image-left
						mt-8
						md:mt-0">
					<NuxtImg
						class="size-full object-cover object-center"
						src="/therapie-mosaic.jpg"

						v-motion
						:initial="motion.right.initial"
						:visible="motion.right.visibleOnce"
						sizes="400px" />
				</div>
			</div>
		</section>
		<AppShape
			class="relative -top-1 fill-sand" />
	</div>
</template>
