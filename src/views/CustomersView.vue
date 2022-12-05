<script setup>
import { ref, onMounted } from "vue";
import AddCustomerForm from "../components/AddCustomerForm..vue";
import DashboardRoutes from "../components/DashboardRoutes.vue";

import { getCustomers } from "../api";
const showCustomerForm = ref(false);

const customers = ref([]);

onMounted(async () => {
  const res = await getCustomers();
  customers.value = res.data;
});
</script>

<template>
  <div class="flex">
    <DashboardRoutes />
    <div class="py-8 px-14">
      <AddCustomerForm
        v-if="showCustomerForm"
        @showCustomerForm="(msg) => (showCustomerForm = msg)"
        @newCustomer="(newCustomer) => customers.push(newCustomer)"
      ></AddCustomerForm>

      <h1 class="text-2xl flex items-center gap-4 mb-10">
        All customers
        <button
          @click="showCustomerForm = true"
          class="bg-red-300 text-sm p-2 rounded-full"
        >
          Add customer
        </button>
      </h1>

      <div class="customers grid grid-cols-3 gap-3">
        <RouterLink
          class="bg-red-50 rounded py-3 px-6"
          to="/customer/"
          v-for="customer in customers"
          :key="customer._id"
        >
          <p class="text-xl font-bold mb-1">{{ customer.name }}</p>
          <p class="mb-3">{{ customer.companyName }}</p>
          <p class="text-slate-700">{{ customer.email }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
