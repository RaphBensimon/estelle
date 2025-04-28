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
						Mon accompagnement & mes engagements.
					</h4>
					<p
						class="my-4 text-justify text-slate-50">
						Je propose un accompagnement inclusif,
						féministe et anti-oppressif, pensé pour les
						personnes issues des minorités de genre.
						<br><br>
						Mon approche prend en compte les
						discriminations systémiques (racisme,
						sexisme, validisme, LGBTQIA+phobies...)
						et leurs impacts sur la santé mentale et
						sexuelle.
						<br><br>
						✨ Ici, chaque personne est accueillie
						avec respect, écouté.e avec
						bienveillance.
					</p>
					<a
						href="/accompagnement-engagements"
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