<template>
	<div>
		<section
			class="lg:px-30 flex flex-col items-center px-10">
			<div
				class="flex flex-col items-center">
				<h3
					class="mb-8
					text-center
					font-mono
					text-4xl
					font-medium
					sm:text-6xl">
					Accompagnement inclusif & personnalisé pour les minorités de genre
				</h3>
				<p
					class="mb-8 max-w-3xl text-center text-lg">
					Je t’accompagne avec bienveillance à démêler les nœuds dans ta tête et clarifier tes
					pensées ! Mon approche est inclusive et sur-mesure, spécialement adaptée aux
					personnes issues des minorités de genre (femmes, LGBTQIA+, personnes racisées,
					non-valides, neurodivergentes, etc.)
				</p>
			</div>
			<div
				class="mb-12 flex flex-col gap-4 md:flex-row">
				<AppButton>
					<NuxtLink
						href="https://www.resalib.fr/praticien/93975-estelle-venturini-therapeute-pontarme"
						target="blank"
						class="flex items-center justify-center gap-x-2">
						<Icon
							name="bi:calendar-check" />
						Prendez rendez-vous
					</NuxtLink>
				</AppButton>
				<AppButton
					variant="truffle">
					<NuxtLink
						href="https://docs.google.com/forms/d/e/1FAIpQLScE9y6jJAlZ1x29NqRU0HGRS4-wbgvxuPLcn-d7LZXceOe_LA/viewform?usp=sf_link"
						target="blank"
						class="flex items-center justify-center gap-x-2">
						<Icon
							name="bi:chat-fill" />
						Me contacter
					</NuxtLink>
				</AppButton>
			</div>
			<Carousel />
		</section>
	</div>
</template>