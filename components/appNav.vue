<template>
	<div>
		<nav
			class="absolute
				top-32
				lg:top-0
				right-12
				lg:right-0
				bg-truffle
				lg:bg-transparent
				color
				cursor-pointer
				flex
				lg:flex-row
				flex-col
				font-bold
				font-mono
				gap-8
				lg:gap-y-0
				invisible
				opacity-0
				lg:opacity-100
				p-8
				lg:p-0
				rounded-lg
				lg:rounded-none
				text-light-sand
				lg:text-truffle
				transition-opacity
				z-10
				lg:z-0
				md:mt-0
				lg:mt-8
				lg:relative
				lg:visible
				xl:mt-0"
			@click="activeHamburger()">
			<a
				class="hover:opacity-75 hover:underline"
				href="#about">
				A propos de moi
			</a>
			<a
				class="hover:opacity-75 hover:underline"
				href="#contact">
				Contacts & Tarifs
			</a>
			<a
				href="#sophro"
				class="hover:opacity-75 hover:underline">
				Sophrologie
			</a>
			<a
				href="#sexo"
				class="hover:opacity-75 hover:underline">
				Séxothérapie
			</a>
		</nav>
		<div
			class="tham tham-e-squeeze tham-w-8 lg:hidden"
			@click="activeHamburger">
			<div
				class="tham-box">
				<div
					class="bg-truffle tham-inner" />
				<div
					class="bg-truffle tham-inner" />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const activeHamburger = () => {
	const tham = document.querySelector('.tham')
	tham?.classList.toggle('tham-active')
	const nav = document.querySelector('nav')
	nav?.classList.toggle('opacity-100')
	nav?.classList.toggle('opacity-0')

	nav?.classList.toggle('visible')
	nav?.classList.toggle('invisible')
}
</script>