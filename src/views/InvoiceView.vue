<script setup>
import DashboardRoutes from "../components/DashboardRoutes.vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

import { downloadInvoice, getInvoice } from "../api";

const route = useRoute();
const invoiceData = ref("");

const handleClick = async (e) => {
  e.preventDefault();

  const res = await downloadInvoice(route.params.id);
  const blob = new Blob([res.data], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = `invoice.pdf`;
  link.click();
};

onMounted(async () => {
  const res = await getInvoice(route.params.id);
  console.log(res.data);
  invoiceData.value = res.data;
});
</script>

<template>
  <div class="flex">
    <DashboardRoutes></DashboardRoutes>
    <div class="grow py-8 px-10">
      <h1 class="text-2xl inline mr-3 font-bold">Invoice details</h1>
      <button
        @click="handleClick"
        type="submit"
        class="bg-blue-600 p-1 px-3 text-white rounded"
      >
        Download
      </button>

      <h1 class="text-xl mt-6 mb-3">{{ invoiceData.name }}</h1>
      <p>
        Date created:
        {{ invoiceData.date && invoiceData.date.substring(0, 10) }}
      </p>

      <h1 class="text-xl mt-7 mb-2">Item summary:</h1>
      <div class="rounded-md border-2">
        <div class="border-b-2 p-3 flex text-sm font-semibold bg-sky-50">
          <p class="basis-1/3">Item name</p>
          <p class="basis-1/3">Cost</p>
          <p class="basis-1/3">Quantity</p>
        </div>
        <div
          class="border-b-2 p-3 flex hover:bg-slate-50 text-sm"
          v-for="item in invoiceData.items"
          :key="item.name"
        >
          <p class="basis-1/3">{{ item.name }}</p>
          <p class="basis-1/3">{{ item.cost }}</p>
          <p class="basis-1/3">{{ item.quantity }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
