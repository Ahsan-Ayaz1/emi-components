<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

const showDropdown = ref(false)
const selectedItems = ref([]);
const query = ref('')
const multiple = ref(true)
const peoples = ref([
    { id: 1, name: 'Ahsan' },
    { id: 2, name: 'Henry' },
    { id: 3, name: 'Williams' },
    { id: 4, name: 'Doe' },
])

const filteredPeople = computed(() =>
    query.value === ''
        ? peoples.value
        : peoples.value.filter((person) =>
            person.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.value.toLowerCase().replace(/\s+/g, ''))
        )
)

const isSelected = (itemName) => {
    return selectedItems.value.includes(itemName);
};

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
}

const closeDropdown = (event) => {
    const dropdown = document.getElementById('dropdownSearch');
    if (showDropdown.value && dropdown && !dropdown.contains(event.target)) {
        showDropdown.value = false;
    }
};

const selectItem = (itemName) => {
    if (multiple.value == true) {
        const index = selectedItems.value.indexOf(itemName);
        if (index !== -1) {
            selectedItems.value.splice(index, 1);
        } else {
            selectedItems.value.push(itemName);
        }
    } else {
        selectedItems.value = [itemName];
        showDropdown.value = false;
    }
};

const preventClose = (event) => {
    event.stopPropagation();
};

onMounted(() => {
    document.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
    document.removeEventListener('click', closeDropdown);
});

</script>

<template>
    <div class="w-full">
        <label for="input-group-search" class="sr-only">Search</label>
        <div class="relative items-end" @click="toggleDropdown" @click.stop="preventClose">
            <input type="text" id="input-group-search" v-model="selectedItems"
                class="border h-customHeight w-1/4 focus:outline-none px-2 bg-customBg rounded-md border-customBorder">

        </div>

        <div id="dropdownSearch" v-if="showDropdown" class="z-10 bg-white w-1/4 rounded-lg   dark:bg-gray-700 hcr">
            <div class="flex border bg-customBg rounded items-center justify-between">
                <input type="search" id="input-group-search" v-model="query"
                    class=" h-customHeight w-full relative focus:outline-none px-2 bg-customBg rounded-md border-customBorder">
                <i class="material-icons bg-customBg group-hover:text-white">search</i>
            </div>
            <div class="text-sm bg-customBg" v-if="filteredPeople.length === 0 && query !== ''">
                Nothing found.
            </div>
            <ul class="w-full bg-customBg pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownSearchButton">
                <li class="border" v-for="item in filteredPeople" :key="item.id">
                    <div @click="selectItem(item.name)"
                        class="flex items-center my-1 pl-2 rounded hover:bg-blue-600 hover:text-white group">
                        <i :class="{ 'active': isSelected(item.name) }"
                            :style="{ visibility: isSelected(item.name) ? 'visible' : 'hidden' }"
                            class="material-icons group-hover:text-white">check</i>
                        <label :for="item.name" :class="{ 'font-semibold ': isSelected(item.name) }"
                            class="w-full py-2 ml-2 text-sm font-medium group-hover:text-white text-gray-900 rounded dark:text-gray-300">
                            {{ item.name }}
                        </label>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <p class=" text-xs text-gray-500">Type of Address</p>
    <input type="text" id="address"
        class="  border h-customHeight mt-8 focus:outline-none px-2 bg-customBg rounded-md border-customBorder ">
    <p class=" text-xs text-gray-500">Street and number</p>
    <div class="container fxed">
        <div class="flex w-full gap-4 mt-8">
            <div class="input-wrapper flex flex-col">
                <input type="text"
                    class="border h-customHeight w-full focus:outline-none px-2 bg-customBg rounded-md border-customBorder">
                <label class="text-xs text-gray-500">Postal Code</label>
            </div>

            <div class="input-wrapper w-full flex flex-col">
                <input type="text"
                    class="border w-full h-customHeight focus:outline-none px-2 bg-customBg rounded-md border-customBorder">
                <label class="text-xs text-gray-500">City</label>
            </div>

            <div class="input-wrapper flex flex-col">
                <input type="text"
                    class="border w-customWeight h-customHeight focus:outline-none px-2 bg-customBg rounded-md border-customBorder">
                <label class="text-xs text-gray-500">District/State/Province/Region</label>
            </div>

            <div class="input-wrapper flex flex-col">
                <input type="text"
                    class="border h-customHeight w-customWeight focus:outline-none px-2 bg-customBg rounded-md border-customBorder">
                <label class="text-xs text-gray-500">Country</label>
            </div>
        </div>
    </div>
</template>

<style scoped>
.material-icons {
    font-size: 20px !important;
    color: gray;
}

.active {
    color: #3B82F6;
}
</style>