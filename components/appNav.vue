<template>
	<div>
		<nav
			class="
				bg-truffle
				text-light-sand
				lg:text-truffle
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
				p-8
				font-mono
				font-bold
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
				lg:opacity-100
				xl:mt-0">
			<a
				class="hover:underline hover:opacity-75"
				href="#about"
				@click="activeHamburger()">
				A propos de moi
			</a>
			<a
				class="hover:underline hover:opacity-75"
				href="#contact"
				@click="activeHamburger()">
				Contacts & Tarifs
			</a>
			<a
				href="#sophro"
				class="hover:underline hover:opacity-75"
				@click="activeHamburger()">
				Sophrologie
			</a>
			<a
				href="#sexo"
				class="hover:underline hover:opacity-75"
				@click="activeHamburger()">
				Sexothérapie
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