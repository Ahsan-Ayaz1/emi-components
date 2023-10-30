<script setup>
const props = defineProps(['radioLabel'])
</script>

<template>
    <label class="form-control text-base">
        <input type="radio" name="radio" />
        {{ radioLabel }}
    </label>
</template>

<style>
input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #F0C10E;
    outline: 1px solid #F0C10E;
}

input[type="radio"]:checked::before {
    transform: scale(1);
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

input[type="radio"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 1px solid currentColor;
    border-radius: 50%;
    display: grid;
    place-content: center;
    transform: translateY(-0.075em);
}

input[type="radio"]:hover:checked {
    box-shadow: -1px 0px 20px 5px #f0c10e;
}

input[type="radio"]:hover {
    box-shadow: -1px 0px 20px 5px rgb(198, 198, 198);
}

.form-control+.form-control {
    margin-top: 1em;
}

input[type="radio"]:checked {
    transform: scale(1);
    border: 1px solid #F0C10E;
}

.form-control {
    font-family: system-ui, sans-serif;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: normal;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 10px;
}

input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
}

:root {
    --form-control-color: #F0C10E;
}
</style>