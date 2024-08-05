<template>
	<div
		class="px-20">
		<h1
			class="mb-8 font-mono text-4xl font-medium sm:text-6xl">
			La sexothérapie
		</h1>
		<p>
			Je propose un accompagnement en tant que sexothérapeute, explorant
			un large éventail de thématiques liées à la sexualité humaine. Mon
			engagement profond en faveur des droits des femmes et des minorités
			de genre guide ma pratique, et c’est donc naturellement que je dédie
			spécifiquement mon accompagnement aux personnes s'identifiant
			comme femmes, aux adolescent.es et à la communauté LGBTQIA+.
		</p>
		<p>
			Pour cela, j’utilise des outils de Sophrologie, de sexothérapie, ainsi que
			de thérapie mosaic pour englober une gamme variée de proposition
		</p>
		<p>
			Je suis consciente des difficultés auxquelles ces publics peut être
			confronté pour trouver un accompagnement sûr, bienveillant et
			compétent. C'est pourquoi je m'efforce de créer un espace sécurisé et
			respectueux où tu pourras librement explorer et aborder tes besoins
			ainsi que tes préoccupations en toute confiance.
		</p>
		<h3>La sexothérapie, et mes champs d’accompagnement :</h3>
		<h4>1. L’éducation sexuelle</h4>
		<p>
			Je te fournis des informations claires sur tout ce
			quitouche à la sexualité : comment ça fonctionne,
			ce que tu ressens, les changements pendant la
			puberté, les premières menstruations, comment
			sa fonctionne dans ta tête et ton cerveau, ainsi
			que sur les relations interpersonnelles et les
			comportements sexuels sains.
		</p>
		<h4>2. La prévention & la sensibilisation</h4>
		<p>
			Je te file plein de bons conseils pour te protéger des trucs pas
			cool comme les IST, les grossesses non désirée, nous pouvons
			également échanger ensemble pour comprendre comment
			bien choisir ta contraception et respecter les règles pour des
			relations sexuelles saines. Je te parle également de
			consentement, pour que tu saches toujours où tu mets les
			pieds notamment pourles adolescents etles jeunes adultes.
		</p>
		<h4>
			3. L’accompagnement des traumatismes sexuels
		</h4>
		<p>
			Si tu as vécu des traumatismes sexuels, tels que
			des abus sexuels, des agressions, des violences
			conjugales, je t’offre un espace safe où tu peux
			laisser aller tes émotions, retrouver confiance en
			toi et te réapproprié à ton rythme ta sexualité &
			ton corps :. C'est ton espace sûr pour te
			reconstruire.
		</p>
		<h4>
			4. Un espace safe pour le personnes LGBTQIA+
		</h4>
		<p>
			Que tu te questionnes sur ton genre, ton orientation sexuelle,
			ou si tu envisages de faire ton coming-out, voire même de
			commencer une transition de genre, je suis là pour toi. Tu peux
			te sentir en sécurité avec moi pour explorer tous ces sujets,
			sans craindre le jugement ou les préjugés. Je suis là pour
			t'accompagner sur ce chemin parfois difficile et épineux, mais
			avec tout mon soutien et mon respect, à chaque étape.
		</p>
		<h4>
			5. La gestion des troubles sexuels
		</h4>
		<p>
			Si ton corps ou ta tête te jouent des tours, que tu
			as des soucis avec le désir, l'orgasme, ou même si
			ça fait mal pendant les rapports, je suis là pour
			t'aider à comprendre ce qui se passe et à trouver
			des solutions ensemble.
		</p>
		<h4>
			6. Les problématiques sexuelles spécifiques
		</h4>
		<p>
			Sit'as des soucis particuliers comme la
			dysphorie de genre, des problèmes de fertilité, des difficultés
			liées à l'âge, ou même situ
			veux juste en savoir plus sur la sexualité à différents stades de
			ta vie, on peut en parler
			ensemble ettrouver des solutions quite conviennent.
		</p>
		<h4>
			7. Accompagnement émotionnel des maladies gynécologiques
			& des maladies sexuellement transmissibles
		</h4>
		<p>
			Si tu souffres de problèmes gynécologiques comme l'endométriose, le syndrome des ovaires
			polykystiques (SOPK), les premières règles, ou même la ménopause, je suis là pour te soutenir
			émotionnellement, pour t'aider à faire face aux défis et pour que tu te sentes comprise.Je
			propose également un soutien & un accompagnement aux personnes vivant avec des IST,
			ainsi qu'à leurs partenaires, en les accompagnant.
		</p>
	</div>
</template>
<script lang="ts" setup>
import { definePageMeta } from '#imports'
definePageMeta({
	title       : 'La séxothérapie | Estelle Venturini',
	// eslint-disable-next-line max-len
	description : 'En tant que sexothérapeute, je propose un accompagnement dédié aux femmes, adolescents et la communauté LGBTQIA+. Utilisant la sophrologie, la sexothérapie et la thérapie mosaic, j\'offre un espace sécurisé pour aborder la sexualité, l\'éducation sexuelle, la prévention, l\'accompagnement des traumatismes, et les troubles sexuels.'
})
</script>
<style lang="scss" scoped>
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