<script setup>
import { ref, onMounted } from "vue";
import AddCustomerForm from "../components/AddCustomerForm..vue";
import DashboardRoutes from "../components/DashboardRoutes.vue";

import { getCustomers, searchCustomers } from "../api";
const showCustomerForm = ref(false);

const customers = ref([]);
const searchTerm = ref("");
const showClearSearch = ref(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!searchTerm.value) {
    alert("Enter a search term");
    return;
  }

  showClearSearch.value = true;
  const res = await searchCustomers(searchTerm.value);
  customers.value = res.data;
};

const handleClick = async () => {
  const res = await getCustomers();
  customers.value = res.data;

  searchTerm.value = "";
  showClearSearch.value = false;
};

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
          class="bg-blue-600 text-white text-sm py-2 px-4 rounded mr-10"
        >
          + New
        </button>

        <form @submit="handleSubmit">
          <input
            type="text"
            placeholder="search here"
            class="bg-gray-100 rounded-md px-4 py-2 text-sm"
            v-model="searchTerm"
          />
        </form>

        <button
          v-if="showClearSearch"
          class="text-blue text-sm underline pointer"
          @click="handleClick"
        >
          Clear search
        </button>
      </h1>

      <div class="rounded-md border-2">
        <div class="border-b-2 p-3 flex text-sm font-semibold bg-sky-50">
          <p class="basis-1/4">Customer name</p>
          <p class="basis-1/4">Company name</p>
          <p class="basis-1/4">Email Id</p>
          <p class="basis-1/4">Phone</p>
        </div>

        <RouterLink
          class="border-b-2 p-3 flex hover:bg-slate-50 text-sm"
          :to="'/customer/' + customer._id"
          v-for="customer in customers"
          :key="customer._id"
        >
          <p class="basis-1/4 text-sky-500 font-semibold">
            {{ customer.name }}
          </p>
          <p class="basis-1/4">{{ customer.companyName }}</p>
          <p class="basis-1/4">{{ customer.email }}</p>
          <p class="basis-1/4">{{ customer.phone }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
