<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="flex flex-col">
    <RouterLink
      class="bg-sky-100 px-10 text-sm py-3 rounded-full text-center mb-2 font-semibold"
      to="/login"
      >Customers</RouterLink
    >
    <RouterLink
      class="bg-sky-100 px-10 text-sm py-3 rounded-full text-center mb-2 font-semibold"
      to="/login"
      >Invoices</RouterLink
    >
  </nav>
</template>
