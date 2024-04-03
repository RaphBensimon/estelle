<template>
	<div
		class="mt-28
			flex
			flex-col
			items-center
			justify-center
			bg-sand
			px-10
			py-20"
		id="contact">
		<div
			class="flex flex-col items-center justify-center md:flex-row">
			<div
				v-motion
				:initial="motion.left.initial"
				:visible="motion.left.visibleOnce"
				class="relative
					flex
					w-fit
					flex-col
					gap-y-4
					rounded-3xl
					bg-truffle
					px-14
					py-10
					text-light-sand">
				<!-- eslint-disable-next-line tailwindcss/no-custom-classname -->
				<div
					class="contact-overlay z-0 rounded-3xl" />
				<NuxtLink
					v-for="(item, index) in contacts"
					:key="index"
					:href="item.href"
					class="z-10
						flex
						cursor-pointer
						items-center
						hover:opacity-75">
					<Icon
						:name="item.icon"
						size="36px" />
					<div
						class="ml-4 flex flex-col">
						<h5
							class="font-mono text-2xl font-bold">
							{{ item.title }}
						</h5>
						{{ item.content }}
					</div>
				</NuxtLink>
			</div>
			<NuxtImg
				v-motion
				:initial="motion.right.initial"
				:visible="motion.right.visibleOnce"
				class="mt-14 max-w-1/2-vw md:ml-14 md:mt-0 md:max-w-1/4-vw"
				src="/fleur.png"
				sizes="380px" />
		</div>
		<div
			class="mt-14
				flex
				flex-col-reverse
				items-center
				justify-center
				md:flex-row">
			<NuxtImg

				v-motion
				:initial="motion.left.initial"
				:visible="motion.left.visibleOnce"
				class="mt-14 max-w-1/2-vw md:mr-14 md:mt-0 md:max-w-1/4-vw"
				src="/femme.png"
				sizes="380px" />
			<div
				v-motion
				:initial="motion.right.initial"
				:visible="motion.right.visibleOnce"
				class="relative
					flex
					w-fit
					flex-col
					gap-y-4
					rounded-3xl
					bg-terra
					px-14
					py-10
					text-light-sand">
				<div
					class="contact-overlay z-0 rounded-3xl" />
				<div
					v-for="(item, index) in pricing"
					:key="index"
					class="z-10 flex items-center">
					<Icon
						:name="item.icon"
						size="36px" />
					<div
						class="ml-4 flex flex-col">
						<h5
							class="font-mono text-2xl font-bold">
							{{ item.title }}
						</h5>
						{{ item.content }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import motion from '@/utils/motion'
import { reactive } from 'vue'
const contacts = reactive([
	{
		title   : 'Addresse',
		content : '11 Allée marguerite Livry Gargan',
		href    : '',
		icon    : 'bi:map'
	},
	{
		title   : 'Téléphone',
		content : '06 58 75 917',
		href    : 'tel:0658759117',
		icon    : 'bi:telephone'
	},
	{
		title   : 'Email',
		content : 'test@test.fr',
		href    : 'mail:test@test.fr',
		icon    : 'bi:envelope-at'
	}
])
const pricing = reactive([
	{
		title   : 'Séance individuelle',
		content : '65€ - 60 minutes',
		icon    : 'bi:person-arms-up'
	},
	{
		title   : 'Cercle de parole',
		content : '20€ - 2 heures',
		icon    : 'bi:people-fill'
	},
	{
		title   : 'Atelier de groupe',
		content : '40€ - 4 heures',
		icon    : 'bi:people-fill'
	}
])
</script>
<style scoped>
.contact-overlay {
    background-image: url('~/assets/img/background-tiny.png');
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.25;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
}
</style>