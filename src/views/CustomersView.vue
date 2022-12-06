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
    <div class="py-8 px-10 grow">
      <AddCustomerForm
        v-if="showCustomerForm"
        @showCustomerForm="(msg) => (showCustomerForm = msg)"
        @newCustomer="(newCustomer) => customers.push(newCustomer)"
      ></AddCustomerForm>

      <h1 class="text-2xl flex items-center gap-4 mb-10">
        Your customers
        <button
          @click="showCustomerForm = true"
          class="bg-sky-600 text-white text-sm py-2 px-4 rounded"
        >
          + New
        </button>
      </h1>

      <div class="border-b-2 p-3 flex text-sm font-semibold">
        <p class="basis-1/4">Customer name</p>
        <p class="basis-1/4">Company name</p>
        <p class="basis-1/4">Email Id</p>
        <p class="basis-1/4">Phone</p>
      </div>

      <RouterLink
        class="border-b-2 p-3 flex hover:bg-slate-50 text-sm"
        to="/customer/"
        v-for="customer in customers"
        :key="customer._id"
      >
        <p class="basis-1/4 text-sky-500 font-semibold">{{ customer.name }}</p>
        <p class="basis-1/4">{{ customer.companyName }}</p>
        <p class="basis-1/4">{{ customer.email }}</p>
        <p class="basis-1/4">{{ customer.phone }}</p>
      </RouterLink>
    </div>
  </div>
</template>
