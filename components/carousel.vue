<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
	<div class="carousel flex gap-4">
		<div class="carousel-container flex gap-4">
			<div
				v-for="index in 12"
				:key="index"
				:class="getClass(index)">
				<div class="relative size-full mix-blend-luminosity">
					<div class="absolute inset-0">
						<NuxtImg
							:style="style(index)"
							:src="src(index)"
							sizes="460px"
							class="size-full
								object-cover
								object-center" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const src = (index: number) => {
	if(index > 6)
		return `/image${(index - 6)}.jpg`
	return `/image${index}.jpg`
}
const getClass = (index : number) => {
	const arr = ['p-8 rounded-3xl w-96 h-96']
	if(index % 2) {
		arr.push('bg-truffle')
	} else if(index % 3 === 0) {
		arr.push('bg-terra')
	} else {
		arr.push('bg-sand')
	}
	return arr.join(' ')
}
const style = (index: number) => {
	const i = (index > 6) ? index / 2 : index
	switch(i) {
	case(1):
		return 'border-radius: 40px;'
	case(2):
		return 'border-radius: 200px 40px;'
	case(3):
		return 'border-radius: 200px 40px 40px 40px'
	case(4):
		return 'border-radius: 40px 200px'
	case(5):
		return 'border-radius: 40px 200px 200px 200px'
	case(6):
		return 'border-radius: 40px 200px 200px 40px'
	}
}
</script>
<style scoped>
.carousel {
	width: calc(100% + 60rem);
	overflow: hidden;
}
.carousel-container {
	width: calc(384px * 12);
	animation: scroll 30s linear infinite;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-384px * 6));
  }
}
</style>