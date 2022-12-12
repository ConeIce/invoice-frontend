<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav
    class="flex flex-col h-screen px-8 py-10 border-r-2 bg-black/90 text-white"
  >
    <h1 class="text-xl font-semibold mb-7">Invoice</h1>
    <RouterLink
      class="flex items-center gap-3 px-5 text-sm hover:bg-slate-500 transition-all w-56 py-2 rounded-md mb-2"
      to="/customer"
      ><img
        class="w-5"
        src="../assets/icons/customer.svg"
        alt=""
      />Customers</RouterLink
    >
    <RouterLink
      class="flex items-center gap-3 px-5 text-sm hover:bg-slate-500 transition-all w-56 py-2 rounded-md mb-2"
      to="/invoice"
      ><img
        class="w-5"
        src="../assets/icons/invoice.svg"
        alt=""
      />Invoices</RouterLink
    >
  </nav>
</template>

<style scoped>
.router-link-active {
  background-color: #0077b6;
  color: #fff;
}

img {
  filter: invert(100%);
}
</style>
