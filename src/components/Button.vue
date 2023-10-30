<template>
    <div class="px-14">
        <button
            class="flex items-center justify-center font-medium custom-shadow gap-2 py-2 text-sm px-6 bg-customYellow text-white rounded-full">
            <i class="material-icons"
                :class="{ 'rotate-180': props.btntext && props.btntext.toLowerCase() === 'back' }">navigate_next</i>
            {{ props.btntext }}
        </button>
    </div>
</template>

<script setup>

const props = defineProps(['btntext'])

</script>

