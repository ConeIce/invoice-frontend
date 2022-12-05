<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="flex flex-col h-screen px-8 py-10 border-r-2">
    <RouterLink
      class="flex items-center gap-4 px-6 text-sm hover:bg-red-100 transition-all w-60 py-2 rounded-full mb-2"
      to="/customer"
      ><img
        class="w-6"
        src="../assets/icons/customer.svg"
        alt=""
      />Customers</RouterLink
    >
    <RouterLink
      class="flex items-center gap-4 px-6 text-sm hover:bg-red-100 transition-all w-60 py-2 rounded-full mb-2"
      to="/invoice"
      ><img
        class="w-6"
        src="../assets/icons/invoice.svg"
        alt=""
      />Invoices</RouterLink
    >
  </nav>
</template>

<style scoped>
.router-link-active {
  background-color: #ff5858;
  color: #fff;
}

.router-link-active img {
  filter: invert(100%);
}
</style>
