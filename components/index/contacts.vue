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
					:target="item.target"
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
				<div
					class="w-72 text-sm">
					Une facture sera fournie pour les consultations
					individuelles afin de faciliter les démarches de
					remboursement auprès de ta mutuelle,
					conformément à tes modalités de prise en charge.
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
		content : '82 grande rue, Pontarmé, 60520',
		// eslint-disable-next-line max-len
		href    : 'https://www.google.fr/maps/place/82+Grande+Rue,+60520+Pontarm%C3%A9/@49.1562728,2.5492797,17z/data=!3m1!4b1!4m6!3m5!1s0x47e639ea9eac48a9:0x6fbbe3a2462f95b5!8m2!3d49.1562693!4d2.5518546!16s%2Fg%2F11c14qrjbb?entry=ttu',
		icon    : 'bi:map',
		target  : 'blank'
	},
	{
		title   : 'Téléphone',
		content : '06 23 44 45 01',
		href    : 'tel:0623444501',
		icon    : 'bi:telephone'
	},
	{
		title   : 'Email',
		content : 'estelleventurini.sophro@gmail.com',
		href    : 'mail:estelleventurini.sophro@gmail.com',
		icon    : 'bi:envelope-at'
	},
	{
		title   : 'Instagram',
		content : 'Sexophro',
		href    : 'https://www.instagram.com/sexophro',
		icon    : 'bi:instagram',
		target  : 'blank'
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
		content : '20€ - 1h30',
		icon    : 'bi:people-fill'
	},
	{
		title   : 'Groupe de sophrologie',
		content : '20€ - 1h30',
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