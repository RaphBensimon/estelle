<template>
	<section>
		<h1>
			La thérapie Mosaïc®
		</h1>
		<div
			class="mt-10 flex flex-col gap-12 sm:flex-row lg:items-center">
			<div>
				<h3
					class="mt-0">
					La thérapie Mosaïc, qu’est ce que c’est ?
				</h3>
				<p>
					La thérapie MOSAIC®, ou Mouvements Oculaires et Stimulations Alternées pour
					l’Intégration Cérébrale, est une approche neurophysiologique et intégrative. Elle est
					conçue pour traiter divers troubles psychologiques en utilisant une combinaison de
					techniques inspirées de thérapies reconnues comme l'EMDR, l'IFS (Internal Family
					System), et la régulation polyvagale (S. Porges). Cette thérapie est profondément
					humaniste et se concentre sur la résolution des problèmes sans réactiver les
					souffrances liées aux traumatismes.
				</p>
				<h3
					class="text-left lg:text-right">
					La thérapie mosaïc, pour quoi ?
				</h3>
				<p>
					La thérapie MOSAIC® s’adresse à toutes les personnes en souffrance
					psychologique, qu'il s'agisse de :
				</p>
				<ul
					class="font-semibold">
					<li>Choc émotionnels,</li>
					<li>Traumatisme & stress post-traumatique,</li>
					<li>Peur & angoisse,</li>
					<li>Trouble anxieux & phobies,</li>
					<li>Dépression & burn-out,</li>
					<li>Troubles du sommeil & douleurs chroniques, etc..</li>
				</ul>
			</div>
			<NuxtImg
				src="/femme-therapie-mosaic.jpg"
				height="600"
				width="212" />
		</div>
		<div
			class="mt-10 flex flex-col-reverse gap-12 sm:flex-row lg:items-center">
			<NuxtImg
				src="/therapie-mosaic.jpg"
				height="600"
				width="212" />
			<div>
				<h3
					class="mt-0">
					La thérapie mosaïc, comment ca fonctionne ?
				</h3>
				<p>
					MOSAIC® fonctionne en activant les sensations corporelles et en focalisant sur les
					solutions déjà présentes chez le patient. Cette méthode permet de traiter la
					souffrance sans réactiver les souvenirs traumatiques. Les thérapeutes utilisent des
					mouvements oculaires et des stimulations alternées pour faciliter l'intégration
					cérébrale, ce qui aide à résoudre les problèmes de manière ciblée et sans risque de
					retraumatisation. Le patient peut ainsi vivre pleinement l'expérience nécessaire
					pour sa guérison, déjà présente en lui
				</p>
				<h3
					class="text-left lg:text-right">
					La thérapie mosaïc, ça vient d’où ?
				</h3>
				<p>
					La thérapie MOSAIC® a été co-créée par le Dr Stéphanie Khalfa, psychologue et
					chercheuse en neurosciences, et le psychologue Guillaume Poupard. Basée sur le
					modèle neuronal de la synchronisation stochastique, cette approche novatrice
					intègre les thérapies humanistes solutionnistes et expérientielles. MOSAIC® a été
					développée pour permettre aux patients de se libérer de leurs souffrances sans
					revivre les traumatismes, offrant ainsi une méthode de guérison efficace et
					respectueuse de l'intégrité psychologique des patients.
				</p>
			</div>
		</div>
	</section>
</template>
<script lang="ts" setup>
import { definePageMeta } from '#imports'
definePageMeta({
	title       : 'Thérapie Mosaic | Estelle Venturini',
	// eslint-disable-next-line max-len
	description : 'Découvrez la thérapie MOSAIC®, une approche intégrative utilisant des techniques comme l\'EMDR et l\'IFS pour traiter les troubles psychologiques. Efficace contre les traumatismes, l\'anxiété, la dépression, et plus encore, elle permet une guérison sans retraumatisation. Adaptée à toutes les souffrances psychologiques.'
})
</script>
<style lang="scss" scoped>
@import "tailwindcss/utilities";
p {
  @apply mb-3
}
h3 {
    @apply mb-3 mt-10 font-mono text-2xl font-medium sm:text-3xl text-sand
}
h4 {
    @apply mb-3 font-mono text-xl font-medium ml-4
}
ul {
    @apply mb-3 ml-6 list-disc
}
h1 {
    @apply mb-10 font-mono text-4xl font-medium sm:text-6xl text-browns
}
section {
    @apply max-w-[1400px] relative left-[50%] translate-x-[-50%] px-[5%]
}
</style>