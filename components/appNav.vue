<template>
	<div>
		<nav
			class="
				invisible
				absolute
				right-12
				top-32
				z-10
				flex
				cursor-pointer
				flex-col
				gap-8
				rounded-lg
				bg-truffle
				p-8
				font-mono
				font-bold
				text-light-sand
				opacity-0
				transition-opacity
				md:mt-0
				lg:visible
				lg:relative
				lg:right-0
				lg:top-0
				lg:z-0
				lg:mt-8
				lg:flex-row
				lg:gap-y-0
				lg:rounded-none
				lg:bg-transparent
				lg:p-0
				lg:text-truffle
				lg:opacity-100
				xl:mt-0">
			<a
				v-for="(link, i) in links"
				:key="i"
				class="hover:underline hover:opacity-75"
				:href="link.href"
				@click="activeHamburger()">
				{{ link.title }}
			</a>
		</nav>
		<div
			class="tham tham-e-squeeze tham-w-8 lg:hidden"
			@click="activeHamburger">
			<div
				class="tham-box">
				<div
					class="tham-inner bg-truffle" />
				<div
					class="tham-inner bg-truffle" />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { computed } from '#imports'
const activeHamburger = () => {
	const tham = document.querySelector('.tham')
	tham?.classList.toggle('tham-active')
	const nav = document.querySelector('nav')
	nav?.classList.toggle('opacity-100')
	nav?.classList.toggle('opacity-0')

	nav?.classList.toggle('visible')
	nav?.classList.toggle('invisible')
}
const links = computed(() => {
	return [
		{
			href  : '/about',
			title : 'A propos de moi'
		},
		{
			href  : '/#contact',
			title : 'Contacts & Tarifs'
		},
		{
			href  : '/sophrologie',
			title : 'Sophrologie'
		},
		{
			href  : '/sexotherapie',
			title : 'Sexothérapie'
		},
		{
			href  : '/therapie-mosaic',
			title : 'Thérapie Mosaïc®'
		}
	]
})
</script>