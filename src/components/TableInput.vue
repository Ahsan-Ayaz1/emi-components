<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Checkbox from "./Checkbox.vue";
const showDropdown = ref(false)

//Table Heading
const tableHeadings = [
    { id: 1, text: 'Name' },
    { id: 2, text: 'Relation' },
    { id: 3, text: 'Shareholding Percentage' },
    { id: 4, text: 'Is a Company' },
]

// Radio Buttons Labels
const radioLabel = [
    { id: 1, text: 'UBO & Shareholder' },
    { id: 2, text: 'UBO, But not Shareholder' },
    { id: 3, text: 'Shareholder, But Not UBO' },
]

// Checkboxes Labels
const checkboxLabel = [
    { id: 1, text: 'Directory' },
    { id: 2, text: 'Secretary' },
    { id: 3, text: 'Signatory' },
]

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
}

const closeDropdown = (event) => {
    const dropdown = document.getElementById('dropdownDefaultRadio');
    if (showDropdown.value && dropdown && !dropdown.contains(event.target)) {
        showDropdown.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', closeDropdown);
    console.log(showDropdown.value)
});

onUnmounted(() => {
    document.removeEventListener('click', closeDropdown);
});

const preventClose = (event) => {
    event.stopPropagation();
};
</script>

<template>
    <div class="relative overflow-x-auto  shadow-md items-center sm:rounded-lg mt-20">
        <table class="w-full text-sm border text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-customTablebg dark:bg-gray-700 dark:text-gray-400">
                <tr class="border-b border-gray-400">
                    <th scope="col" colspan="4" class="px-6 text-base py-3 text-left">
                        Company 1 Structure
                    </th>
                </tr>
                <tr>
                    <th v-for="heading in tableHeadings" :key="heading.id" scope="col" class="px-6  border-gray-400 py-3"
                        :class="{ 'border-r': heading.text.toLowerCase() === 'name' }">
                        {{ heading.text }}
                    </th>
                </tr>
            </thead>
            <tbody class="bg-customBg">
                <tr class="border bg-customBg flex-grow dark:bg-gray-900 dark:border-gray-700">
                    <td scope="row"
                        class="border-r border-gray-400 rounded-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <textarea
                            class="h-customHeight overflow-hidden bg-customBg focus:outline-none px-2 w-full py-3 rounded-md border-customBorder"></textarea>
                    </td>
                    <td>
                        <input type="text" @click.stop="preventClose" @click="toggleDropdown"
                            class=" h-customHeight w-full bg-customBg focus:outline-none px-2 py-3  rounded-md border-customBorder">

                        <!-- Dropdown menu -->
                        <div id="dropdownDefaultRadio" v-if="showDropdown === true" class=" z-10 fixed flex-wrap lg:w-96 bg-customBg mx-3 rounded-t-lg shadow
                        dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="w-full text-sm text-gray-700 " aria-labelledby="dropdownRadioButton">
                                <li>
                                    <div v-for="label in radioLabel" :key="label.id"
                                        class="flex justify-between px-3 py-2 border rounded items-center">
                                        <label :for="label.text"
                                            class="ml-2 my-1 text-sm font-medium text-gray-900 dark:text-gray-300">{{
                                                label.text
                                            }}</label>
                                        <input :id="label.text" type="radio" value="" name="default-radio"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-600 dark:border-gray-500">

                                    </div>
                                </li>
                            </ul>

                            <ul class="w-full text-sm text-gray-700" aria-labelledby="dropdownCheckboxButton">
                                <li>
                                    <div v-for="label in checkboxLabel" :key="label.id"
                                        class="flex justify-between border px-3 py-2 rounded items-center">
                                        <label :for="label.text"
                                            class="ml-2 my-1 text-sm font-medium text-gray-900 dark:text-gray-300">{{
                                                label.text
                                            }}</label>
                                        <input :id="label.text" type="checkbox" value="" name="default-checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-600 dark:border-gray-500">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </td>
                    <td class="border-x border-gray-400">
                        <input type="number"
                            class="h-customHeight w-full py-3 focus:outline-none px-2 bg-customBg rounded-md border-customBorder"
                            placeholder="%" min="0">
                    </td>
                    <td class="mt-4 flex items-center justify-center">
                        <Checkbox />
                    </td>
                </tr>
                <tr class="w-full border-gray-400 items-center bg-customBg">
                    <td scope="col" colspan="4" class="px-6  items-center justify-center text-center text-base pt-2 ">
                        <i class="material-icons">add_circle</i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
.material-icons {
    font-size: 34px !important;
    color: #F0C10E;
    cursor: pointer;
}
</style>