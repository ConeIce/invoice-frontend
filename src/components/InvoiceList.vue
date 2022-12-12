<script setup>
import { RouterLink } from "vue-router";

const props = defineProps(["invoices"]);
</script>

<template>
  <div class="rounded-md border-2">
    <div class="border-b-2 p-3 flex text-sm font-semibold bg-sky-50">
      <p class="basis-1/3">Invoice name</p>
      <p class="basis-1/3">Invoice date</p>
      <p class="basis-1/3">Download</p>
    </div>

    <RouterLink
      class="border-b-2 p-3 flex hover:bg-slate-50 text-sm"
      to="/invoice/"
      v-for="invoice in props.invoices"
      :key="invoice._id"
    >
      <p class="basis-1/3">{{ invoice.name }}</p>
      <p class="basis-1/3">{{ invoice.date.substring(0, 10) }}</p>
    </RouterLink>
  </div>
</template>
