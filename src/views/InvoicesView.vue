<script setup>
import { ref, onMounted } from "vue";
import AddInvoiceForm from "../components/AddInvoiceForm.vue";
import DashboardRoutes from "../components/DashboardRoutes.vue";

import html2pdf from "html2pdf.js";

import { getInvoices, getCustomer } from "../api/index";

import generateInvoiceHTML from "./generateInvoiceHTML.js";
import InvoiceList from "../components/InvoiceList.vue";

const invoices = ref([]);

onMounted(async () => {
  const res = await getInvoices();
  invoices.value = res.data;

  console.log(res.data);
});

// const handleGenerateClick = async (invoice) => {
//   const invoiceData = JSON.parse(JSON.stringify(invoice));
//   const customer = await getCustomer(invoiceData.customerId);

//   const HTML = generateInvoiceHTML(invoiceData, customer.data);

//   html2pdf()
//     .set({ html2canvas: { scale: 2 } })
//     .from(HTML, "string")
//     .save();
// };

const showInvoiceForm = ref(false);
</script>

<template>
  <div class="flex">
    <DashboardRoutes />

    <div class="py-8 px-10 grow">
      <h1 class="text-2xl flex items-center gap-4 mb-10">
        Your invoices
        <button
          @click="showInvoiceForm = true"
          class="bg-sky-600 text-white text-sm py-2 px-4 rounded"
        >
          + New
        </button>
      </h1>

      <InvoiceList :invoices="invoices"></InvoiceList>
    </div>

    <AddInvoiceForm
      v-if="showInvoiceForm"
      @showInvoiceForm="(msg) => (showInvoiceForm = msg)"
      @newInvoice="(newInvoice) => invoices.push(newInvoice)"
    ></AddInvoiceForm>
  </div>
</template>
