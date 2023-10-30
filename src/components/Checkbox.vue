<script setup>
const props = defineProps(['label'])
</script>

<template>
    <label class="form-control">
        <input type="checkbox" name="checkbox" />
        {{ label }}
    </label>
</template>


<style>
.form-control {
    font-family: system-ui, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.1;
    font-family: system-ui, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.1;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
}

input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.45em;
    height: 1.45em;
    border: 1px solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
}

input[type="checkbox"]:hover:checked {
    /* box-shadow: -1px 0px 20px 5px #F0C10E; */
    box-shadow: -1px 0px 20px 5px rgba(240, 193, 14, 0.8);
    ;
    /* opacity: 0.12; */
    border-radius: 0.15em;
}

input[type="checkbox"]:hover {
    box-shadow: -1px 0px 20px 5px rgb(198, 198, 198);
    border-radius: 0.15em;
}

input[type="checkbox"]:checked {
    background-color: #F0C10E;
    border: 0.15em solid #F0C10E;
    background-image: url('../assets/icons/check_small.png');
    background-size: 153% 153%;
    background-position: center center;

}

input[type="checkbox"]::before {
    content: "";
    width: 0.85em;
    height: 0.85em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em white;
}





.form-control+.form-control {
    margin-top: 1em;
}
</style>