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
					Épanouissez-vous corps et esprit
				</h3>
				<p
					class="mb-8 max-w-3xl text-center text-lg">
					Je vous accompagne dans un voyage intime à travers la sophrologie, la sexothérapie & la
					thérapie Mosaïc®, afin que tu puisses découvrir et explorerles
					multiples facettes de ta santé mentale et sexuelle.
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
						href="tel:0610692378"
						class="flex items-center justify-center gap-x-2">
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