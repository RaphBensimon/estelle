<template>
	<div>
		<AppShape
			id="about"
			class="relative top-1 mt-28 rotate-180 fill-terra" />
		<section
			class="flex items-center bg-terra px-10 py-20">
			<div
				class="flex
					flex-col
					items-center
					justify-center
					md:flex-row">
				<NuxtImg
					v-motion
					:initial="motion.left.initial"
					:visible="motion.left.visibleOnce"

					src="/estelle-venturini.jpg"
					sizes="350px"
					id="profil-picture" />
				<div
					class="mt-14 md:ml-14 md:mt-0 lg:w-2/4"
					v-motion
					:initial="motion.right.initial"
					:visible="motion.right.visibleOnce">
					<h3
						class="
						text-center
						font-mono
						text-5xl
						font-bold
						text-white
						md:text-left">
						Estelle Venturini
					</h3>
					<p
						class="my-4 text-justify text-slate-50">
						Je suis Estelle Venturini, thérapeute en
						santé mentale & sexuelle. J’accompagne
						les personnes issues des minorités de
						genre dans un espace sécurisant,
						bienveillant, où l’on avance à son rythme.
						<br>
						<br>
						(Femmes, LGBTQIA+, neurodivergent·es,
						personnes racisées, non-valides, etc.)
						<br>
						<br>
						Ce que je souhaite avant tout : que tu te
						sentes accueilli·e, entendu·e et respecté·e,
						dans toute ton humanité.
					</p>
					<a
						href="/about"
						class="cursor-pointer
							text-slate-50
							underline
							hover:opacity-75">
						En savoir plus...
					</a>
				</div>
			</div>
		</section>
		<AppShape
			class="relative -top-1 fill-terra" />
	</div>
</template>
<script setup lang="ts">
import motion from '@/utils/motion'
</script>
<style scoped>
#profil-picture {
	border-radius: 3rem 3rem 3rem 50%;
	max-width: 90%;
	width: 350px;
}
@media (max-width:768px){
	#profil-picture {
        @apply rounded-[3rem] max-w-[80%] w-full
    }
}
@media (max-width:640px){
	#profil-picture{
        @apply max-w-full
    }
}
</style>