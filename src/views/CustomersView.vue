<script setup>
import { ref } from "vue";
import AddCustomerFormVue from "../components/AddCustomerForm..vue";

const showCustomerForm = ref(false);
</script>

<template>
  <h1>Customers</h1>

  <button @click="showCustomerForm = true">Add customer</button>
  <AddCustomerFormVue v-if="showCustomerForm"></AddCustomerFormVue>

  <div class="customers"></div>
</template>
