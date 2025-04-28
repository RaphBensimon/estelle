<template>
	<div
		class="px-20">
		<h1
			class="mb-10 font-mono text-4xl font-medium sm:text-6xl">
			Une approche personnalisée, pensée pour toi
		</h1>
		<p>
			Ici, pas de méthode toute faite ni de protocole figé. Je ne t'impose pas une pratique, je
			t'accompagne avec les outils les plus adaptés à toi, à ton histoire, à tes besoins et à ton rythme.
		</p>
		<p>
			Mon approche est pluridisciplinaire et créative : je combine plusieurs méthodes issues de mes
			formations pour construire un accompagnement vraiment sur-mesure, qui peut évoluer avec toi au fil du temps.
		</p>
		<h3>🌿 Trois outils, une seule intention : t'accompagner dans ce que tu traverses</h3>
		<h4>🌬 La sophrologie</h4>
		<p>
			Une approche psychocorporelle douce pour t'aider à réguler ton stress, tes émotions et à te
			reconnecter à ton corps.
		</p>
		<p>👉 Techniques de respiration, visualisation, relâchement musculaire et conscience du corps.</p>
		<p>
			✓ Utile pour l'anxiété, le sommeil, la gestion émotionnelle, les douleurs chroniques ou les traumas.
		</p>

		<h4>💬 La sexothérapie (Non medical)</h4>
		<p>
			Un espace d'exploration et de libération autour de ta sexualité, de ton désir, de ton rapport à ton
			corps et à l'intimité.
		</p>
		<p>👉 On parle de ce qui est tabou, douloureux, flou ou en conflit... toujours à ton rythme.</p>
		<p>
			✓ Accompagnement des troubles sexuels, douleurs, questionnements identitaires, blocages,
			réconciliation avec soi.
		</p>

		<h4>🧠 La Thérapie MOSAIC®</h4>
		<p>
			Une méthode neurophysiologique douce, inspirée de l'EMDR, qui permet d'intégrer les traumas sans
			avoir à les revivre.
		</p>
		<p>
			👉 On active les capacités de résilience du cerveau via des mouvements oculaires et stimulations
			alternées.
		</p>
		<p>
			✓ Pertinent pour les vécus traumatiques, les croyances limitantes, les schémas répétitifs et les
			blessures profondes.
		</p>

		<h3>🌈 Ce n'est pas la méthode qui compte, c'est toi</h3>
		<p>
			Je ne suis pas "sophrologue" ou "sexothérapeute" au sens rigide du terme.
		</p>
		<p>
			Je suis une thérapeute en santé mentale et sexuelle, avec plusieurs outils dans ma boîte — que je
			mets au service de ce que TU vis.
		</p>
		<p>
			Parfois, on commencera une séance par un échange, puis on passera par le corps. D'autres fois, on
			restera dans la parole, ou on utilisera un outil de régulation émotionnelle...
		</p>
		<p>
			C'est toi qui donnes le tempo, et moi qui m'adapte à chaque instant.
		</p>

		<h3>🧶 Mon engagement :</h3>
		<h4>un soin vivant, ajusté, et profondément humain</h4>
		<p>
			Chaque séance est un moment unique. Un espace où tu peux te déposer, comprendre, ressentir, et
			cheminer vers ce qui fait sens.
		</p>
		<p>
			Je suis là pour t'offrir un cadre souple, sécurisant, et respectueux de ton vécu. Il ne s'agit pas
			de "faire comme il faut", mais de faire comme tu peux, ici et maintenant.
		</p>
	</div>
</template>
<script lang="ts" setup>
import { definePageMeta } from '#imports'
definePageMeta({
	title       : 'Sophrologie | Estelle Venturini',
	// eslint-disable-next-line max-len
	description : 'Découvre la sophrologie, une méthode psychocorporelle qui harmonise corps, émotions et pensées. Utilise-la pour renforcer confiance en soi, gérer l\'anxiété, surmonter le burnout, ou simplement pour un mieux-être quotidien. Adaptée à tous, de l\'enfance à la vieillesse, y compris les ados, femmes et personnes LGBTQIA+'
})
</script>
<style lang="scss" scoped>
@import "tailwindcss/utilities";
p {
  @apply mb-3
}
h3 {
    @apply mb-3 mt-10 font-mono text-2xl font-medium sm:text-3xl
}
h4 {
    @apply mb-3 font-mono text-xl font-medium  ml-4
}
ul {
    @apply mb-3 ml-6 list-disc
}
</style>