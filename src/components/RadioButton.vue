<script setup>
const props = defineProps([
  "label",
  "checked",
  "modelValue",
  "value",
  "disabled",
  "id",
  "name",
]);
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="form-control text-base">
    <input
      type="radio"
      @input="$emit('update:modelValue', $event.target.value)"
      :name="name"
      :value="value"
      :disabled="disabled"
    />
    {{ label }}
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
  box-shadow: inset 1em 1em #f0c10e;
  outline: 1px solid #f0c10e;
}

input[type="radio"]:checked::before {
  transform: scale(1);
}

input[type="radio"]:disabled {
  cursor: not-allowed;
}

input[type="radio"]:disabled:hover {
  box-shadow: none;
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

.form-control + .form-control {
  margin-top: 1em;
}

input[type="radio"]:checked {
  transform: scale(1);
  border: 1px solid #f0c10e;
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
  --form-control-color: #f0c10e;
}
</style>
