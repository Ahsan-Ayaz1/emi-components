<script setup>
import RegisterAddress from './RegisterAddress.vue';
import RadioButton from './RadioButton.vue';
import AddAnotherAddress from "./AddAnotherAddress.vue"
import { ref } from 'vue';
const anotherAddress = ref(false)
const operationalAddress = ref('Same')
const mailingAddress = ref('Same') 
</script>

<template>
    <label for="address" class=" font-medium text-base leading-6 mt-8">Operational Address</label>
    <div class="mt-4">
        <RadioButton @click="operationalAddress = 'Same'" radioLabel="Same as Registered Address" />
        <RadioButton @click="operationalAddress = 'Different'" radioLabel="Enter a Different Address" />
    </div>
    <RegisterAddress v-if="operationalAddress == 'Different'" />
    <label for="address" class=" font-medium text-base leading-6 mt-8">Mailing Address</label>
    <div class="mt-4">
        <RadioButton @click="mailingAddress = 'Same'" radioLabel="Same as Registered Address" />
        <RadioButton @click="mailingAddress = 'Different'" radioLabel="Enter a Different Address" />
    </div>
    <RegisterAddress v-if="mailingAddress == 'Different'" />

    <label for="address" class=" font-medium text-base leading-6 mt-8">Other Addresses</label>
    <p class="text-xs mt-1 text-gray-400">Add any other company addresses that may appear on contracts, invoices, or other
        official documents
    </p>
    <AddAnotherAddress v-if="anotherAddress" />
    <div @click="anotherAddress = true" class="flex items-center gap-2 mt-4 cursor-pointer">
        <i class="material-icons">add</i>
        <p>Add another address</p>
    </div>
</template>

<style scoped>
.material-icons {
    font-size: 34px !important;
    color: gray;
    cursor: pointer;
}
</style>