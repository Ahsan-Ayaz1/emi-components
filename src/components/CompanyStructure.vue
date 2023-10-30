<script setup>
import Checkbox from "./Checkbox.vue";
import Button from "./Button.vue";
//Table Heading
const tableHeadings = [
    { id: 1, text: 'Name' },
    { id: 2, text: 'Relation' },
    { id: 3, text: 'Shareholding %' },
    { id: 4, text: 'UBO%' },
    { id: 5, text: '' },
]
</script>

<template>
    <p class="text-sm">
        Please add all Ultimate Beneficial Owners (UBOs), Shareholderes, Directors, and Secretaries. <br>
        Aditionally add any Signatories who will use the account. Role-based access rights will be set up later.
    </p>
    <p class="mt-8 text-sm">
        You will have to upload Power of Attorney docments later for any Signatories added.
    </p>
    <div class="relative overflow-x-auto  shadow-md items-center sm:rounded-lg mt-8">
        <table class="w-full text-sm border text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-customTablebg dark:bg-gray-700 dark:text-gray-400">
                <tr class="border-b border-gray-400">
                    <th scope="col" colspan="5" class="px-6 text-base py-3 text-left">
                        Company 1 Structure
                    </th>
                </tr>
                <tr>
                    <th v-for="heading in tableHeadings" :key="heading.id" scope="col"
                        class="px-6 border border-gray-400 py-3">
                        {{ heading.text }}
                    </th>
                </tr>
            </thead>
            <tbody class="bg-customBg">
                <tr class="border bg-customBg flex-grow dark:bg-gray-900 dark:border-gray-700">
                    <td scope="row"
                        class="border border-customBorder rounded-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <textarea
                            class="h-customHeight overflow-hidden bg-customBg focus:outline-none px-2 w-full py-3 rounded-md border-customBorder"></textarea>
                    </td>
                    <td class="border p-4 border-customBorder">
                        <Checkbox label="Director" />
                        <Checkbox label="Secretary" />
                        <Checkbox label="Signatory" />
                    </td>
                    <td class="border border-customBorder">
                        <input type="number" @click.stop="preventClose" @click="toggleDropdown"
                            class=" h-customHeight w-full bg-customBg focus:outline-none px-2 py-3  rounded-md border-customBorder"
                            placeholder="%" min="0">
                    </td>
                    <td class="border border-customBorder">
                        <input type="number"
                            class="h-customHeight w-full py-3 focus:outline-none px-2 bg-customBg rounded-md border-customBorder"
                            placeholder="%" min="0">
                    </td>
                    <td class="border border-customBorder text-center align-middle">
                        <img src="../assets/icons/delete.png" class="items-center" alt="">
                    </td>

                </tr>

                <tr class="w-full border-gray-400 items-center bg-customBg">
                    <td scope="col" colspan="5" class="px-6  items-center justify-center text-center text-base pt-2 ">
                        <i class="material-icons">add_circle</i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="w-full mt-10 flex justify-between">
        <Button btntext="Back" />
        <Button btntext="Next" />
    </div>
</template>

<style scoped>
.material-icons {
    font-size: 34px !important;
    color: #F0C10E;
    cursor: pointer;
}
</style>