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

  const HTML = generateInvoiceHTML(invoiceData, customer.data);

  html2pdf()
    .set({ html2canvas: { scale: 2 } })
    .from(HTML, "string")
    .save();
};

const showInvoiceForm = ref(false);
</script>

<template>
  <div class="flex">
    <DashboardRoutes />

    <div class="py-8 px-14">
      <h1 class="text-2xl flex items-center gap-4 mb-10">
        Your invoices
        <button
          @click="showInvoiceForm = true"
          class="bg-red-400 text-white text-sm py-2 px-4 rounded"
        >
          Add invoice
        </button>
      </h1>

      <div class="flex gap-3 flex-wrap">
        <div
          class="bg-red-50 rounded-md py-5 px-6 flex items-center border-r-2 border-white"
          v-for="invoice in invoices"
          :key="invoice"
        >
          <h1 class="mr-20">{{ invoice.name }}</h1>

          <button class="rounded-full" @click="handleGenerateClick(invoice)">
            <img class="w-8" src="../assets/icons/download.svg" alt="" />
          </button>
        </div>
      </div>
    </div>

    <AddInvoiceForm
      v-if="showInvoiceForm"
      @showInvoiceForm="(msg) => (showInvoiceForm = msg)"
      @newInvoice="(newInvoice) => invoices.push(newInvoice)"
    ></AddInvoiceForm>
  </div>
</template>
