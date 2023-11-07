<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import RadioButton from "./RadioButton.vue";
import Button from "./Button.vue";
//Table Heading
const companyTableHeadings = [
  { id: 1, text: "Company of tax residency" },
  { id: 2, text: "Taxpayer Identification Number (TIN) or equivalent" },
  { id: 3, text: "Reason for no TIN provide" },
];

const companyTaxes = ref([]);
const isDropdownOpen = ref(false);
const personTaxes = ref([
  {
    name: "John Doe",
    citizenships: [
      {
        residency: "",
        tax_id: "",
      },
    ],
  },
  {
    name: "Williams",
    citizenships: [
      {
        residency: "",
        tax_id: "",
      },
    ],
  },
]);

const addCitizenshipRow = (personName) => {
  const person = personTaxes.value.find((person) => person.name === personName);
  if (person) {
    person.citizenships = [
      ...person.citizenships,
      {
        residency: "",
        tax_id: "",
      },
    ];
  }
};

const addNewCompanyRow = () => {
  companyTaxes.value.push({
    country_code: "",
    no_tin_reason: "",
    reason_b_explanation: "",
    tax_id: "",
  });
};

const deletePersonRow = (personName, rowIndex) => {
  const personIndex = personTaxes.value.findIndex(
    (person) => person.name === personName
  );

  if (personIndex !== -1 && rowIndex !== 0) {
    const person = personTaxes.value[personIndex];
    const citizenships = person.citizenships;

    if (rowIndex >= 0 && rowIndex < citizenships.length) {
      citizenships.splice(rowIndex, 1);
    }
  }
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = (event) => {
  const dropdown = document.getElementById("dropdown");
  if (isDropdownOpen.value && dropdown && !dropdown.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

const preventClose = (event) => {
  event.stopPropagation();
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>

<template>
  <p class="text-sm text-gray-400 mt-2">Add tax information</p>
  <div class="relative overflow-x-auto shadow-md items-center mt-8">
    <table class="w-full text-sm border text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-customTablebg">
        <tr class="border border-gray-400">
          <th scope="col" colspan="5" class="px-6 text-base py-3 text-left">
            Company 1 Tax Information
          </th>
        </tr>
        <tr>
          <th
            v-for="heading in companyTableHeadings"
            :key="heading.id"
            scope="col"
            class="px-6 border border-gray-400 py-3"
          >
            {{ heading.text }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-customBg">
        <tr
          v-for="(tax, index) in companyTaxes"
          :key="index"
          class="bg-customBg flex-grow"
        >
          <td
            scope="row"
            class="border border-customBorder px-4 py-auto rounded-md font-medium text-gray-900 whitespace-nowrap"
          >
            <div class="flex items-center">
              <input
                type="text"
                v-model="tax.country_code"
                class="h-customHeight overflow-hidden bg-customBg border-b focus:outline-none px-2 w-full py-3 border-customBorder"
              />
            </div>
          </td>
          <td class="p-4 border-b border-customBorder text-black">
            <input
              type="text"
              v-model="tax.tax_id"
              class="h-customHeight overflow-hidden bg-customBg border-b focus:outline-none px-2 w-full py-3 border-customBorder"
            />
          </td>
          <td
            class="border border-b-0 flex gap-10 justify-center p-2 border-customBorder"
            scope="row"
          >
            <RadioButton
              label="A"
              class="items-center"
              :disabled="tax.tax_id != ''"
              :checked="tax.no_tin_reason == 'A'"
              value="A"
              v-model="tax.no_tin_reason"
              :name="'reason' + index"
            />
            <RadioButton
              label="B"
              class="items-center"
              :disabled="tax.tax_id != ''"
              :checked="tax.no_tin_reason == 'B'"
              value="B"
              v-model="tax.no_tin_reason"
              :name="'reason' + index"
            />
            <RadioButton
              label="C"
              class="items-center"
              :disabled="tax.tax_id != ''"
              :checked="tax.no_tin_reason == 'C'"
              value="C"
              v-model="tax.no_tin_reason"
              :name="'reason' + index"
            />
          </td>
        </tr>
        <tr class="w-full border border-gray-400 items-center bg-customBg">
          <td
            scope="col"
            colspan="3"
            class="px-6 items-center justify-center text-center text-base pt-2"
          >
            <div class="relative inline-block text-left">
              <i @click="addNewCompanyRow" class="material-icons">add_circle</i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="text-sm mt-4">
    <p>If no TIN is available, please select one of the reason why:</p>
    <p>
      Reason A - The country of tax residency does not issue TINs to its
      residents
    </p>
    <p>
      Reason B - Is otherwise unable to obtain a TIN or functional equivalent
    </p>
    <p>
      Reason C - The law of the country/jurisdiction of the tax residence do not
      require them to provide a TIN
    </p>
  </div>

  <div>
    <div v-for="(tax, index) in companyTaxes" :key="index">
      <div v-if="tax.no_tin_reason == 'B'" class="flex flex-col mt-4">
        <label :for="'explanation' + index"
          >{{ tax.country_code }} - Reason B Explanation</label
        >
        <input
          type="text"
          :id="'explanation' + index"
          v-model="tax.reason_b_explanation"
          class="h-customHeight mt-1 overflow-hidden bg-customBg focus:outline-none px-2 w-2/4 py-3 border rounded-md border-customBorder"
        />
        <p class="text-sm text-gray-500">
          Please explain why is it possible to obtain a TIN or equivalent
        </p>
      </div>
    </div>
  </div>

  <!-- Second Table -->
  <div
    class="flex justify-center overflow-x-auto items-center sm:rounded-lg mt-8"
  >
    <table class="w-3/6 text-sm border text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-customTablebg">
        <tr class="border border-gray-400">
          <th scope="col" colspan="5" class="px-6 text-base py-3 text-left">
            Company 1 Natural Persons Tax information
          </th>
        </tr>
        <tr>
          <th scope="col" class="px-6 border border-gray-400 py-3">Name</th>
          <th scope="col" class="px-6 border border-gray-400 py-3">
            Residency
          </th>
          <th scope="col" class="px-6 border border-gray-400 py-3">Tax ID</th>
          <th scope="col" class="px-6 border border-gray-400 py-3"></th>
        </tr>
      </thead>
      <tbody class="bg-customBg">
        <template
          v-for="(personTax, personIndex) in personTaxes"
          :key="personIndex"
        >
          <tr class="bg-customBg flex-grow">
            <td
              scope="row"
              class="border border-customBorder px-4 py-auto rounded-md font-medium text-gray-900 whitespace-nowrap"
              :rowspan="personTax.citizenships.length + 1"
            >
              <div class="flex items-center">
                {{ personTax.name }}
              </div>
            </td>
          </tr>
          <tr
            v-for="(citizenship, index) in personTax.citizenships"
            :key="index"
          >
            <td class="p-4 border-b border-customBorder text-black">
              <input
                type="text"
                v-model="citizenship.residency"
                class="h-customHeight overflow-hidden border-b bg-customBg focus:outline-none px-2 w-full py-3 border-customBorder"
              />
            </td>
            <td class="border p-2 border-customBorder" scope="row">
              <input
                type="text"
                v-model="citizenship.tax_id"
                class="h-customHeight overflow-hidden bg-customBg focus:outline-none px-2 w-full py-3 border-b border-customBorder"
              />
            </td>
            <td class="border p-2 bg-customBg border-customBorder" scope="row">
              <div class="flex cursor-pointer items-center justify-center">
                <img
                  @click="deletePersonRow(personTax.name, index)"
                  src="../assets/icons/delete.png"
                  alt=""
                />
              </div>
            </td>
          </tr>
        </template>
        <tr class="w-full border border-gray-400 items-center bg-customBg">
          <td
            scope="col"
            colspan="4"
            class="px-6 items-center justify-center text-center text-base pt-2"
          >
            <div class="relative inline-block text-left">
              <i
                @click.stop="preventClose"
                @click="toggleDropdown"
                class="material-icons"
                >add_circle</i
              >

              <div
                v-if="isDropdownOpen"
                class="origin-top-right absolute right-[-3.5rem] w-32 top-6 focus:outline-none"
                id="dropdown"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div
                  class="z-10 border fixed border-customBorder bg-customBg rounded"
                  role="none"
                >
                  <div v-for="(person, index) in personTaxes" :key="index">
                    <a
                      href="#"
                      @click="addCitizenshipRow(person.name)"
                      class="flex items-center gap-1 px-4 py-2 border-b border-customBorder text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      >To {{ person.name }}
                    </a>
                  </div>
                </div>
              </div>
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

<style scoped>
.material-icons {
  font-size: 34px !important;
  color: #f0c10e;
  cursor: pointer;
}

.appartment {
  font-size: 24px !important;
  color: black !important;
  cursor: pointer;
}
</style>
