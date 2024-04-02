<template>
	<div>
		<AppShape
			id="about"
			class="relative top-1 mt-28 rotate-180 fill-terra" />
		<section class="flex items-center bg-terra px-10 py-20">
			<div
				class="flex
					flex-col
					items-center
					justify-center
					md:flex-row">
				<NuxtImg
					v-motion
					:initial="motion.left.initial"
					:visible-once="motion.left.visibleOnce"

					src="/estelle-venturini.jpg"
					sizes="350px"
					id="profil-picture" />
				<div
					class="mt-14 md:ml-14 md:mt-0 lg:w-2/4"
					v-motion
					:initial="motion.right.initial"
					:visible-once="motion.right.visibleOnce">
					<h3
						class="
							font-mono
							text-5xl
							font-bold
							text-white">
						Estelle Venturini
					</h3>
					<p class="my-4 text-slate-50">
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
		<AppShape class="relative -top-1 fill-terra" />
	</div>
</template>
<script setup lang="ts">
import motion from '@/utils/motion'
</script>
<style scoped>
#profil-picture {
	border-radius: 3rem 3rem 50% 3rem;
	max-width: 90%;
	width: 350px;
}
</style>