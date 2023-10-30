<script setup>
import RegisterAddress from './components/RegisterAddress.vue';
import Button from "./components/Button.vue"
import Checkbox from './components/Checkbox.vue';
import RadioButton from "./components/RadioButton.vue"
import TableInput from "./components/TableInput.vue"
import CompanyIdentity from './components/CompanyIdentity.vue';
import CompanyAddresses from './components/CompanyAddresses.vue';
import CompanyInfo from './components/CompanyInfo.vue';
import CompanyStructure from './components/CompanyStructure.vue';
import CompanyDocuments from './components/CompanyDocuments.vue';
import { ref } from 'vue';

const toggle = ref('value')
const text = ref('Next')
</script>

<template>
  <div class="container">
    <!-- <RegisterAddress v-if="toggle === 'value'" /> -->
  </div>
  <div class="container">
    <CompanyDocuments />
    <!-- <CompanyAddresses /> -->
    <!-- <CompanyStructure /> -->
    <!-- <CompanyInfo /> -->
    <!-- <CompanyIdentity /> -->
  </div>
  <!-- <Button :btntext="text" />
  <Checkbox />
  <RadioButton /> -->
</template>


