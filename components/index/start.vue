<template>
	<div>
		<section
			class="flex items-center flex-col px-10 lg:px-60">
			<h3
				class="font-medium
					font-mono
					mb-8
					text-4xl
					sm:text-6xl
					text-center">
				Épanouissez-vous corps et esprit
			</h3>
			<p
				class="max-w-3xl mb-8 text-center text-lg">
				Explorez votre épanouissement mental et sexuel avec <b>Estelle Venturini</b>,
				sophrologue et sexothérapeute certifiée. Mon cabinet offre un espace sûr
				pour découvrir les multiples facettes de votre être. Avec compassion, je
				vous accompagnerai vers l'harmonie corporelle.
			</p>
			<div
				class="flex md:flex-row flex-col gap-4 mb-12">
				<AppButton
					class="flex items-center gap-x-2">
					<Icon
						name="bi:calendar-check" />
					Prendez rendez-vous
				</AppButton>
				<AppButton
					variant="truffle">
					<NuxtLink
						href="tel:06060606"
						class="flex justify-center items-center gap-x-2">
						<Icon
							name="bi:telephone" />
						Me contacter
					</NuxtLink>
				</AppButton>
			</div>
			<Carousel />
		</section>
	</div>
</template>