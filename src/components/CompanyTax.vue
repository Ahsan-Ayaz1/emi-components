<script setup>
import { ref, watch } from "vue";
import Button from "./Button.vue";
import RadioButton from "./RadioButton.vue";
//Table Heading
const tableHeadings = [
    { id: 1, text: 'Company of tax residency' },
    { id: 2, text: 'Taxpayer Identification Number (TIN) or equivalent' },
    { id: 3, text: 'Reason for no TIN provide' },
]

const taxes = ref([]);

// Add rom in the table dynamically
const addNewRow = () => {
    taxes.value.push({
        country_code: "",
        no_tin_reason: "",
        reason_b_explanation: "",
        tax_id: ""
    });
};
</script>

<template>
    <p class="text-sm text-gray-400 mt-2">Add tax information</p>
    <div class="relative overflow-x-auto  shadow-md items-center sm:rounded-lg mt-8">
        <table class="w-full text-sm border text-left text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-customTablebg ">
                <tr class="border-b border-gray-400">
                    <th scope="col" colspan="5" class="px-6 text-base py-3 text-left">
                        Company 1 Tax Information
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
                <tr v-for="(tax, index) in taxes" :key="index" class=" bg-customBg flex-grow ">
                    <td scope="row" 
                        class="border border-customBorder px-4 py-auto rounded-md font-medium text-gray-900 whitespace-nowrap ">
                        <div class="flex items-center">
                            <input type="text" v-model="tax.country_code"
                                class="h-customHeight overflow-hidden bg-customBg focus:outline-none px-2 w-full py-3 rounded-md border-customBorder">
                        </div>
                    </td>
                    <td class=" p-4 border-b border-customBorder text-black">
                        <input type="text" v-model="tax.tax_id"
                                class="h-customHeight overflow-hidden bg-customBg focus:outline-none px-2 w-full py-3 rounded-md border-customBorder">
                    </td>
                    <td class="border p-2 border-customBorder" scope="row">
                        <RadioButton label="A" class="items-center" :disabled="tax.tax_id != ''" :checked="tax.no_tin_reason == 'A'" value="A" v-model="tax.no_tin_reason" :name="'reason' + index " />
                        <RadioButton label="B" class="items-center" :disabled="tax.tax_id != ''" :checked="tax.no_tin_reason == 'B'" value="B" v-model="tax.no_tin_reason" :name="'reason' + index " />
                        <RadioButton label="C" class="items-center" :disabled="tax.tax_id != ''" :checked="tax.no_tin_reason == 'C'" value="C" v-model="tax.no_tin_reason" :name="'reason' + index " />
                    </td>
                </tr>
                <tr class="w-full border-gray-400 items-center bg-customBg">
                    <td scope="col" colspan="3" class="px-6 items-center justify-center text-center text-base pt-2">
                        <div class="relative inline-block text-left">
                            <i @click="addNewRow" class="material-icons">add_circle</i>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="text-sm mt-4">
        <p>If no TIN is available, please select one of the reason why: </p>
        <p>Reason A - The country of tax residency does not issue TINs to its residents</p>
        <p>Reason B - Is otherwise unable to obtain a TIN or functional equivalent</p>
        <p>Reason C - The law of the country/jurisdiction of the tax residence do not require them to provide a TIN</p>
    </div>

    <div>
        <div v-for="(tax, index) in taxes" :key="index">
            <div v-if="tax.no_tin_reason == 'B'" class="flex flex-col mt-4">
            <label :for="'explanation' + index">{{ tax.country_code }} - Reason B Explanation</label>
                <input type="text" :id="'explanation' + index"  v-model="tax.reason_b_explanation" class="h-customHeight mt-1 overflow-hidden bg-customBg focus:outline-none px-2 w-2/4 py-3 border rounded-md border-customBorder">
                <p class=" text-sm text-gray-500">Please explain why is it possible to obtain a TIN or equivalent</p>
            </div>
        </div>
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

.appartment {
    font-size: 24px !important;
    color: black !important;
    cursor: pointer;
}
</style>