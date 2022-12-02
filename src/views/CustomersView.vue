<script setup>
import { ref } from "vue";
import AddCustomerForm from "../components/AddCustomerForm..vue";
import DashboardRoutes from "../components/DashboardRoutes.vue";

const showCustomerForm = ref(false);
</script>

<template>
  <div class="flex gap-x-20 px-20 py-5">
    <DashboardRoutes />
    <div class="container">
      <AddCustomerForm v-if="showCustomerForm"></AddCustomerForm>

      <h1 class="text-2xl flex items-center gap-4 mb-10">
        All customers
        <button
          @click="showCustomerForm = true"
          class="bg-red-300 p-5 rounded-full"
        ></button>
      </h1>
      <div class="customers">
        <h1>cust1</h1>
        <h1>cust2</h1>
        <h1>xust3</h1>
      </div>
    </div>
  </div>
</template>
