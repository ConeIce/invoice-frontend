<script setup>
import { ref, onMounted } from "vue";
import AddInvoiceForm from "../components/AddInvoiceForm.vue";
import DashboardRoutes from "../components/DashboardRoutes.vue";

import html2pdf from "html2pdf.js";

import { getInvoices, getCustomer } from "../api/index";

import generateInvoiceHTML from "./generateInvoiceHTML.js";

const invoices = ref([]);

onMounted(async () => {
  const res = await getInvoices();
  invoices.value = res.data;
});

const handleGenerateClick = async (invoice) => {
  const invoiceData = JSON.parse(JSON.stringify(invoice));
  const customer = await getCustomer(invoiceData.customerId);
  console.log(customer);

  const HTML = generateInvoiceHTML(invoiceData, customer.data);

  html2pdf()
    .set({ html2canvas: { scale: 2 } })
    .from(HTML, "string")
    .save();
};

const showInvoiceForm = ref(false);
</script>

<template>
  <div class="flex gap-x-20">
    <DashboardRoutes />

    <h1 class="text-2xl flex items-center gap-4 mb-10">
      All invoices
      <button
        @click="showInvoiceForm = true"
        class="bg-red-300 text-sm p-2 rounded-full"
      >
        Add inoivce
      </button>
    </h1>

    <div class="grid grid-cols-3 gap-3">
      <div class="bg-red-100" v-for="invoice in invoices" :key="invoice">
        <p>{{ invoice.name }}</p>
        <p>{{ invoice.customerName }}</p>

        <button class="bg-blue-500" @click="handleGenerateClick(invoice)">
          generate invoice
        </button>
      </div>
    </div>

    <AddInvoiceForm
      v-if="showInvoiceForm"
      @showInvoiceForm="(msg) => (showInvoiceForm = msg)"
    ></AddInvoiceForm>
  </div>
</template>
