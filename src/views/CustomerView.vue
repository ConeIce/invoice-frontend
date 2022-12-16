<script setup>
import { ref, onMounted } from "vue";
import DashboardRoutes from "../components/DashboardRoutes.vue";
import { useRoute } from "vue-router";

import { getCustomer, getCustomerInvoices } from "../api";
import InvoiceList from "../components/InvoiceList.vue";
import EditCustomerForm from "../components/EditCustomerForm.vue";

const customer = ref(false);
const invoices = ref(false);

const route = useRoute();
const showCustomerForm = ref(false);

const fetchCustomer = async () => {
  const res = await getCustomer(route.params.id);
  customer.value = res.data;
};

onMounted(async () => {
  fetchCustomer();
  const resInvoice = await getCustomerInvoices(route.params.id);
  invoices.value = resInvoice.data;
});
</script>

<template>
  <EditCustomerForm
    v-if="showCustomerForm"
    :customerDetails="customer"
    @showCustomerForm="(msg) => (showCustomerForm = msg)"
    @editedCustomer="() => fetchCustomer()"
  ></EditCustomerForm>
  <div class="flex">
    <DashboardRoutes />
    <div class="py-8 px-10 grow">
      <div class="flex gap-6 mb-7">
        <h1 class="text-2xl font-semibold">{{ customer.name }}</h1>
        <button
          class="text-sky-600 hover:underline"
          @click="showCustomerForm = true"
        >
          Edit
        </button>
      </div>

      <h2 class="font-semibold mb-4">Address</h2>
      <p>{{ customer.city }},</p>
      <p>{{ customer.state }},</p>
      <p class="mb-5">{{ customer.country }}</p>

      <p>{{ customer.email }}</p>
      <p class="mb-10">{{ customer.phone }}</p>

      <h1 class="font-semibold mb-4">All invoices</h1>
      <InvoiceList :invoices="invoices"></InvoiceList>
    </div>
  </div>
</template>
