<template>
    <label for="address" class=" font-medium text-base leading-6 mt-8">Registerd Address</label>
    <input type="text" id="address"
        class="  border h-customHeight focus:outline-none px-2 bg-customBg rounded-md border-customBorder ">
    <p class=" text-xs text-gray-500">Street and number</p>
    <div class="container">
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