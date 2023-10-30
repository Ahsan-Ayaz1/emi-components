<script setup>
import Button from "./Button.vue";
import { ref } from "vue"

//Table Heading
const tableHeadings = [
    { id: 1, text: 'Name' },
    { id: 2, text: 'Citizenships' },
    { id: 3, text: 'ID/Registration No' },
    { id: 4, text: 'Expiration Date' },
    { id: 5, text: 'Upload ID or Passport' },
    { id: 6, text: 'Upload Utility Bill (Not older than 3 months)' },
]

const isDisabled = ref(false)
const fileInput = ref(null);
const selectedFileName = ref('');

function triggerFileInput() {
    if (fileInput.value) {
        fileInput.value.click();
    }
}

function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        selectedFileName.value = selectedFile.name;
    }
}

const truncateFileName = (fileName) => {
    const maxLength = 10;
    return fileName.length > maxLength ? fileName.slice(0, maxLength) + "..." : fileName;
}

const removeFile = () => {
    selectedFileName.value = ''
}
</script>

<template>
    <div class="relative overflow-x-auto  items-center border  mt-20">
        <table class="w-full text-sm border text-left text-gray-500 border-customBorder dark:text-gray-400">
            <thead class="text-xs text-gray-700  bg-customTablebg dark:bg-gray-700 dark:text-gray-400">
                <tr class="border-b border-gray-400">
                    <th scope="col" colspan="6" class="px-6 text-base py-3 text-left">
                        Company 1 Structure
                    </th>
                </tr>
                <tr>
                    <th v-for="heading in tableHeadings" :key="heading.id" scope="col"
                        class="px-6 text-sm  border-gray-400 py-3"
                        :class="{ 'border-r': heading.text.toLowerCase() === 'name' }">
                        {{ heading.text }}
                    </th>
                </tr>
            </thead>
            <tbody class="bg-customBg border-t border-b border-gray-400">
                <tr class=" bg-customBg flex-grow dark:bg-gray-900 dark:border-gray-700">
                    <td scope="row" rowspan="2"
                        class="border-r border-gray-400 rounded-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <textarea
                            class="h-customHeight overflow-hidden bg-customBg focus:outline-none px-2 w-full py-3 rounded-md border-customBorder"></textarea>
                    </td>
                    <td>
                        <input type="text" :disabled="isDisabled"
                            :class="{ 'bg-customDisabledInput rounded-none': isDisabled }"
                            class=" h-customHeight w-full bg-customBg focus:outline-none px-2 py-3  rounded-md border-customBorder">


                    </td>
                    <td class="border-x border-gray-400">
                        <input type="number" :disabled="isDisabled"
                            :class="{ 'bg-customDisabledInput rounded-none': isDisabled }"
                            class="h-customHeight w-full py-3 focus:outline-none px-2 bg-customBg rounded-md border-customBorder"
                            min="0">
                    </td>
                    <td class="border-x border-gray-400">
                        <input type="date" :disabled="isDisabled"
                            :class="{ 'bg-customDisabledInput rounded-none': isDisabled }"
                            class="h-customHeight w-full py-3 focus:outline-none px-2 bg-customBg rounded-md border-customBorder"
                            min="0">
                    </td>
                    <td class="border-x border-gray-400">
                        <div class="px-2" :class="{
                            'flex justify-end items-end': !selectedFileName,
                            'flex justify-between items-end': selectedFileName,
                            'bg-customDisabledInput rounded-none': isDisabled
                        }" :disabled="isDisabled">
                            <input ref="fileInput" type="file" style="display: none;" @change="handleFileChange"
                                :disabled="isDisabled" :class="{ 'bg-customDisabledInput rounded-none': isDisabled }"
                                class="h-customHeight w-full py-3 focus:outline-none px-2 bg-customBg rounded-md border-customBorder"
                                min="0">
                            <span v-if="selectedFileName">{{ truncateFileName(selectedFileName) }}</span>
                            <img v-if="!selectedFileName" src="../assets/icons/file_upload.png" class="h-[24px] ml-2"
                                :class="{ 'cursor-not-allowed': isDisabled, 'cursor-pointer': !isDisabled }"
                                @click="triggerFileInput" alt="">
                            <img v-else src="../assets/icons/delete.png" class="h-[24px] ml-2"
                                :class="{ 'cursor-not-allowed': isDisabled, 'cursor-pointer': !isDisabled }"
                                @click="removeFile" alt="">
                        </div>

                    </td>
                    <td class="" rowspan="2">
                        <div class="flex justify-between items-center">
                            <input type="text"
                                class="h-customHeight w-full py-3 focus:outline-none px-2 bg-customBg rounded-md border-customBorder"
                                min="0">
                            <img src="../assets/icons/file_upload.png" class=" h-[24px] cursor-pointer ml-2" alt="">
                        </div>
                    </td>
                </tr>

                <!-- Second Row -->
                <tr class=" bg-customBg flex-grow dark:bg-gray-900 dark:border-gray-700">
                    <td class="border-t border-customBorder">
                        <input type="text" :disabled="isDisabled"
                            :class="{ 'bg-customDisabledInput rounded-none': isDisabled }"
                            class=" h-customHeight w-full bg-customBg focus:outline-none px-2 py-3  rounded-md border-customBorder">
                        k
                    </td>
                    <td class="border-t border-x border-customBorder">
                        <input type="number" :disabled="isDisabled"
                            :class="{ 'bg-customDisabledInput rounded-none': isDisabled }"
                            class="h-customHeight w-full py-3 focus:outline-none px-2 bg-customBg rounded-md border-customBorder"
                            min="0">
                    </td>
                    <td class="border-x border-t border-customBorder">
                        <input type="date" :disabled="isDisabled"
                            :class="{ 'bg-customDisabledInput rounded-none': isDisabled }"
                            class="h-customHeight w-full py-3 focus:outline-none px-2 bg-customBg rounded-md border-customBorder"
                            min="0">
                    </td>
                    <td class="border-x border-t border-customBorder">
                        <div class="flex px-2 justify-end  items-end" :disabled="isDisabled"
                            :class="{ 'bg-customDisabledInput rounded-none': isDisabled }">
                            <input type="file" style="display: none;" :disabled="isDisabled"
                                :class="{ 'bg-customDisabledInput rounded-none': isDisabled }"
                                class="h-customHeight w-full py-3 focus:outline-none px-2 bg-customBg rounded-md border-customBorder"
                                min="0">
                            <img src="../assets/icons/delete.png" class=" h-[24px]  ml-2" alt=""
                                :class="{ 'cursor-not-allowed': isDisabled, 'cursor-pointer': !isDisabled }">
                        </div>
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

<style>
.material-icons {
    font-size: 34px !important;
    color: white;
    cursor: pointer;
}
</style>