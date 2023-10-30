<script setup>
import Checkbox from './Checkbox.vue';
import Button from './Button.vue';
</script>

<template>
    <p class="mt-2 text-xs text-gray-500">Add general company information</p>
    <div class="container">
        <label for="address" class=" font-medium text-sm leading-6 mt-4">Company Name</label>
        <input type="text"
            class="border h-customHeight w-2/4 focus:outline-none px-2 bg-customBg rounded-md border-customBorder">
        <p class="text-xs text-gray-500">And it is written on the certificate of </p>

        <label for="address" class=" font-medium text-sm leading-6 mt-4">Website</label>
        <input type="text"
            class="border h-customHeight w-2/4 focus:outline-none px-2 bg-customBg rounded-md border-customBorder">

        <label for="address" class=" font-medium text-sm leading-6 mt-4">Industry</label>
        <input type="text"
            class="border h-customHeight w-2/4 focus:outline-none px-2 bg-customBg rounded-md border-customBorder"
            placeholder="Select your industry">

        <label for="address" class=" font-medium text-sm leading-6 mt-4">Detail Object of Activity</label>
        <input type="text"
            class="border h-customHeight w-2/4 focus:outline-none px-2 bg-customBg rounded-md border-customBorder">

        <label for="address" class=" font-medium text-sm leading-6 mt-4">Registration</label>
        <input type="text"
            class="border h-customHeight w-2/4 focus:outline-none px-2 bg-customBg rounded-md border-customBorder">
        <Checkbox class="mt-4 w-1/4" label="Does this activity require a lisence?" />
        <p class="text-xs text-gray-500 mt-1">if yes, you need to attach your lisence document later</p>

        <fieldset class="w-2/4 mt-4 border-customBorder border p-4 rounded-md">
            <legend class="font-bold text-xs">Company type</legend>
            <Checkbox class="w-2/4" label="Private" />
            <Checkbox class="w-2/4" label="Public and Stock Exchange Unlisted " />
            <Checkbox class="w-2/4" label="Public and Stock Exchange Listed" />
        </fieldset>

        <label for="address" class=" font-medium text-sm leading-6 mt-4">Contact Email</label>
        <input type="text"
            class="border h-customHeight w-2/4 focus:outline-none px-2 bg-customBg rounded-md border-customBorder">

        <label for="address" class=" font-medium text-sm leading-6 mt-4">Phone Number</label>
        <input type="text"
            class="border h-customHeight w-2/4 focus:outline-none px-2 bg-customBg rounded-md border-customBorder">

        <div class="flex justify-end mt-8">
            <Button btntext="Next" />
        </div>

    </div>
</template>