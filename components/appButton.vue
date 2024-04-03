<template>
	<button
		:class="`py-2 px-4 rounded-full font-bold transition duration-200 ${style}`">
		<slot />
	</button>
</template>
<script setup lang="ts">
import {
	defineProps, computed
} from 'vue'
const props = defineProps<{
    variant?: string
}>()
const style = computed(() => {
	switch(props.variant) {
	case('sand'):
		return 'bg-sand text-truffle hover:bg-light-sand'
	case('truffle'):
		return 'bg-truffle text-white hover:bg-light-truffle'
	default:
		return 'bg-terra text-white hover:bg-light-terra'
	}
})
</script>