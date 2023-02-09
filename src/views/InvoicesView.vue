<script setup>
import { ref, onMounted } from "vue";
import AddInvoiceForm from "../components/AddInvoiceForm.vue";
import AddCustomerForm from "../components/AddCustomerForm..vue";
import DashboardRoutes from "../components/DashboardRoutes.vue";

import { getInvoices } from "../api/index";

import InvoiceList from "../components/InvoiceList.vue";

const invoices = ref([]);

onMounted(async () => {
  const res = await getInvoices();
  invoices.value = res.data;

  console.log(res.data);
});

const showInvoiceForm = ref(false);
const showCustomerForm = ref(false);

const handleShowCustomerForm = (msg) => {
  showCustomerForm.value = msg;
  console.log(msg + "asd");

  showInvoiceForm.value = true;
};
</script>

<template>
  <div class="flex">
    <DashboardRoutes />

    <div class="py-8 px-10 grow">
      <h1 class="text-2xl flex items-center gap-4 mb-10">
        Your invoices
        <button
          @click="showInvoiceForm = true"
          class="bg-blue-600 text-white text-sm py-2 px-4 rounded"
        >
          + New
        </button>
      </h1>

      <InvoiceList :invoices="invoices"></InvoiceList>
    </div>

    <AddCustomerForm
      v-if="showCustomerForm"
      @showCustomerForm="(msg) => handleShowCustomerForm(msg)"
      @newCustomer="(newCustomer) => console.log(newCustomer)"
    ></AddCustomerForm>

    <AddInvoiceForm
      :invoicesLen="invoices.length"
      v-if="showInvoiceForm"
      @showCustomerForm="(msg) => (showCustomerForm = msg)"
      @showInvoiceForm="(msg) => (showInvoiceForm = msg)"
      @newInvoice="(newInvoice) => invoices.push(newInvoice)"
    ></AddInvoiceForm>
  </div>
</template>
