<script setup>
import { ref, onMounted } from "vue";
import DashboardRoutes from "../components/DashboardRoutes.vue";

// import { getCustomer } from "../api";

const customer = ref(false);

// onMounted(async () => {
//   const res = await getCustomer();
//   customer.value = res.data;
// });
</script>

<template>
  <div class="flex gap-x-20">
    <DashboardRoutes />
    <div class="container">
      <div class="customers"></div>
    </div>
  </div>
</template>
