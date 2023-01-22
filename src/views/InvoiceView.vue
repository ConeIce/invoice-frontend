<script setup>
import DashboardRoutes from "../components/DashboardRoutes.vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

import { downloadInvoice, getInvoice, editDiscount } from "../api";

const route = useRoute();
const invoiceData = ref("");

const handleClick = async (e) => {
  e.preventDefault();

  const res = await downloadInvoice(route.params.id);
  const blob = new Blob([res.data], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = `your-file-name.pdf`;
  link.click();
};

onMounted(async () => {
  const res = await getInvoice(route.params.id);
  console.log(res.data);
  invoiceData.value = res.data;
});

const handleChange = async () => {
  console.log(invoiceData.value.discountPercentage);

  editDiscount(route.params.id, {
    discount: invoiceData.value.discountPercentage,
    tax: invoiceData.value.tax,
  });
};
</script>

<template>
  <div class="flex">
    <DashboardRoutes></DashboardRoutes>
    <div class="grow py-8 px-10">
      <h1 class="text-2xl">Invoice</h1>
      <form @submit="handleClick"><button type="submit">download</button></form>

      <h1 class="text-xl">{{ invoiceData.name }}</h1>
      <p>{{ invoiceData.date }}</p>

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

      <div>
        <h2>Discount</h2>
        <select name="" id="">
          <option value="0">Percentage</option>
          <option value="1">Fixed amount</option>
        </select>
        <input
          type="number"
          v-model="invoiceData.discountPercentage"
          @change="handleChange"
        />
        <input type="number" v-model="invoiceData.tax" @change="handleChange" />
      </div>
    </div>
  </div>
</template>
