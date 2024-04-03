<template>
	<div>
		<section
			class="flex flex-col items-center px-10 lg:px-60">
			<div
				v-motion
				:initial="motion.top.initial"
				:enter="motion.top.enter">
				<h3
					class="mb-8
					text-center
					font-mono
					text-4xl
					font-medium
					sm:text-6xl">
					Épanouissez-vous corps et esprit
				</h3>
				<p
					class="max-w-3xl mb-8 text-center text-lg">
					Explorez votre épanouissement mental et sexuel avec <b>Estelle Venturini</b>,
					sophrologue et sexothérapeute certifiée. Mon cabinet offre un espace sûr
					pour découvrir les multiples facettes de votre être. Avec compassion, je
					vous accompagnerai vers l'harmonie corporelle.
				</p>
			</div>
			<div
				class="mb-12 flex flex-col gap-4 md:flex-row">
				<AppButton
					v-motion
					:initial="motion.left.initial"
					:enter="motion.left.enter"
					class="flex items-center gap-x-2">
					<Icon
						name="bi:calendar-check" />
					Prendez rendez-vous
				</AppButton>
				<AppButton
					v-motion
					:initial="motion.right.initial"
					:enter="motion.right.enter"
					variant="truffle">
					<NuxtLink
						href="tel:06060606"
						class="flex items-center justify-center gap-x-2">
						<Icon
							name="bi:telephone" />
						Me contacter
					</NuxtLink>
				</AppButton>
			</div>
			<Carousel
				v-motion
				:initial="motion.bottom.initial"
				:enter="motion.bottom.enter" />
		</section>
	</div>
</template>