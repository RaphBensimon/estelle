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
const images = Array.from({ length : 10 }, (_, i) => ({
	src : `/partners/${i + 1}.png`,
	alt : `Partenaire ${i + 1}`
}))
</script>
