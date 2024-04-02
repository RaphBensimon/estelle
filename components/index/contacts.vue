<template>
	<div
		class="bg-sand
			flex
			justify-center
			items-center
			flex-col
			mt-28
			px-10
			py-20"
		id="contact">
		<div
			class="flex md:flex-row justify-center items-center flex-col">
			<div
				class="bg-truffle
					flex
					flex-col
					gap-y-4
					px-14
					py-10
					relative
					rounded-3xl
					text-light-sand
					w-fit">
				<div
					class="contact-overlay rounded-3xl z-0" />
				<NuxtLink
					v-for="(item, index) in contacts"
					:key="index"
					:href="item.href"
					class="cursor-pointer
						flex
						items-center
						z-10
						hover:opacity-75">
					<Icon
						:name="item.icon"
						size="36px" />
					<div
						class="flex flex-col ml-4">
						<h5
							class="font-bold font-mono text-2xl">
							{{ item.title }}
						</h5>
						{{ item.content }}
					</div>
				</NuxtLink>
			</div>
			<NuxtImg
				class="max-w-1/2-vw md:max-w-1/4-vw mt-14 md:mt-0 md:ml-14"
				src="/fleur.png"
				sizes="380px" />
		</div>
		<div
			class="flex
				md:flex-row
				justify-center
				items-center
				flex-col-reverse
				mt-14">
			<NuxtImg
				class="max-w-1/2-vw md:max-w-1/4-vw mt-14 md:mt-0 md:mr-14"
				src="/femme.png"
				sizes="380px" />
			<div
				class="bg-terra
					flex
					flex-col
					gap-y-4
					px-14
					py-10
					relative
					rounded-3xl
					text-light-sand
					w-fit">
				<div
					class="contact-overlay rounded-3xl z-0" />
				<div
					v-for="(item, index) in pricing"
					:key="index"
					class="flex items-center z-10">
					<Icon
						:name="item.icon"
						size="36px" />
					<div
						class="flex flex-col ml-4">
						<h5
							class="font-bold font-mono text-2xl">
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