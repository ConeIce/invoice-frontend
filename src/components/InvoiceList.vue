<script setup>
import { RouterLink } from "vue-router";

const props = defineProps(["invoices"]);
</script>

<template>
  <div class="rounded-md border-2">
    <div class="border-b-2 p-3 flex text-sm font-semibold bg-sky-50">
      <p class="basis-1/2">Invoice number</p>
      <p class="basis-1/2">Invoice date</p>
    </div>

    <RouterLink
      class="border-b-2 p-3 flex hover:bg-slate-50 text-sm"
      :to="'/invoice/' + invoice._id"
      v-for="invoice in props.invoices"
      :key="invoice._id"
    >
      <p class="basis-1/2">{{ invoice.invoiceNo }}</p>
      <p class="basis-1/2">{{ invoice.date.substring(0, 10) }}</p>
    </RouterLink>
  </div>
</template>
