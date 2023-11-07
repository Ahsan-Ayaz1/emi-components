<script setup>
import Checkbox from "./Checkbox.vue";
import Button from "./Button.vue";
import { onMounted, onUnmounted, ref } from "vue";
//Table Heading
const tableHeadings = [
  { id: 1, text: "Name" },
  { id: 2, text: "Relation" },
  { id: 3, text: "Shareholding %" },
  { id: 4, text: "UBO%" },
  { id: 5, text: "" },
];

const isDropdownOpen = ref(false);
const dialogState = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const preventClose = (event) => {
  event.stopPropagation();
};

const closeDropdown = (event) => {
  const dropdown = document.getElementById("dropdown");
  if (isDropdownOpen.value && dropdown && !dropdown.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>

<template>
  <p class="text-sm">
    Please add all Ultimate Beneficial Owners (UBOs), Shareholderes, Directors,
    and Secretaries. <br />
    Aditionally add any Signatories who will use the account. Role-based access
    rights will be set up later.
  </p>
  <p class="mt-8 text-sm">
    You will have to upload Power of Attorney docments later for any Signatories
    added.
  </p>
  <GDialog v-if="dialogState" v-model="dialogState" max-width="500">
    <div class="wrapper">
      <div class="content">
        <div class="title">Content</div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          ratione!
        </p>
      </div>
    </div>
    <div class="flex gap-4 justify-end px-8 mb-4">
      <button
        class="hover:bg-red-500 hover:text-white rounded-md border py-2 px-4"
        @click="dialogState = false"
      >
        Delete
      </button>
      <button
        class="hover:bg-customYellow hover:text-white rounded-md border py-2 px-4"
        @click="dialogState = false"
      >
        Cancle
      </button>
    </div>
  </GDialog>
  <div
    class="relative overflow-x-auto shadow-md items-center sm:rounded-lg mt-8"
  >
    <table class="w-full text-sm border text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-customTablebg">
        <tr class="border-b border-gray-400">
          <th scope="col" colspan="5" class="px-6 text-base py-3 text-left">
            Company 1 Structure
          </th>
        </tr>
        <tr>
          <th
            v-for="heading in tableHeadings"
            :key="heading.id"
            scope="col"
            class="px-6 border border-gray-400 py-3"
          >
            {{ heading.text }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-customBg">
        <tr class="bg-customBg flex-grow">
          <td
            scope="row"
            rowspan="3"
            class="border border-customBorder px-4 py-auto rounded-md font-medium text-gray-900 whitespace-nowrap"
          >
            <div class="flex items-center">
              <i class="material-icons appartment"> apartment </i>
              <input
                type="text"
                class="h-customHeight overflow-hidden bg-customBg focus:outline-none px-2 w-full py-3 rounded-md border-customBorder"
              />
            </div>
          </td>
          <td class="p-4 text-black">
            <Checkbox label="Director" />
          </td>
          <td class="border border-customBorder" scope="row" rowspan="3">
            <input
              type="number"
              class="h-customHeight w-full bg-customBg focus:outline-none px-2 py-3 rounded-md border-customBorder"
              placeholder="%"
              min="0"
            />
          </td>
          <td class="border border-customBorder" scope="row" rowspan="3">
            <input
              type="number"
              class="h-customHeight w-full py-3 focus:outline-none px-2 bg-customBg rounded-md border-customBorder"
              placeholder="%"
              min="0"
            />
          </td>
          <td
            class="border text-center border-customBorder align-middle"
            scope="row"
            rowspan="3"
          >
            <div class="h-full flex justify-center items-center">
              <img
                @click="dialogState = true"
                src="../assets/icons/delete.png"
                alt=""
              />
            </div>
          </td>
        </tr>
        <tr>
          <td class="p-4 text-black">
            <Checkbox label="Secretary" />
          </td>
        </tr>
        <tr>
          <td class="border-b p-4 text-black border-customBorder">
            <Checkbox label="Signatory" />
          </td>
        </tr>
        <tr class="w-full border-gray-400 items-center bg-customBg">
          <td
            scope="col"
            colspan="5"
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
                class="origin-top-right absolute right-[-2rem] w-32 top-6 focus:outline-none"
                id="dropdown"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div
                  class="z-10 fixed border border-customBorder bg-customBg rounded"
                  role="none"
                >
                  <a
                    href="#"
                    class="flex items-center gap-1 px-4 py-2 border-b border-customBorder text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    >Add Individual
                    <i class="material-icons appartment"> person </i>
                  </a>
                  <a
                    href="#"
                    class="flex gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    >Add Company
                    <i class="material-icons appartment"> apartment </i>
                  </a>
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

.wrapper {
  color: #000;
}

.content {
  padding: 20px;
}

.title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
}

/* .actions {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
} */
</style>
