<template>
	<div
		class="mt-20 p-20">
		<h3
			class="
						text-center
						font-mono
						text-5xl
						font-bold
						md:text-left">
			Partenaires
		</h3>
		<div
			class="flex
				flex-wrap
				justify-center
				gap-4">
			<NuxtImg
				class="h-auto max-w-48 object-contain"
				v-for="image in images"
				:key="image.src"
				:src="image.src"
				:alt="image.alt" />
		</div>
	</div>
</template>
<script setup>
const images = [
	{
		src : '/partners/1.png',
		alt : 'Partenaire 1'
	},
	{
		src : '/partners/2.png',
		alt : 'Partenaire 2'
	},
	{
		src : '/partners/3.png',
		alt : 'Partenaire 3'
	},
	{
		src : '/partners/4.png',
		alt : 'Partenaire 4'
	},
	{
		src : '/partners/5.png',
		alt : 'Partenaire 5'
	},
	{
		src : '/partners/6.png',
		alt : 'Partenaire 6'
	},
	{
		src : '/partners/7.png',
		alt : 'Partenaire 7'
	}
]
</script>
