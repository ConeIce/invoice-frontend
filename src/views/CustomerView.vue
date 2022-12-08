<script setup>
import { ref, onMounted } from "vue";
import DashboardRoutes from "../components/DashboardRoutes.vue";
import { useRoute } from "vue-router";

import { getCustomer } from "../api";

const customer = ref(false);

onMounted(async () => {
  const route = useRoute();
  const res = await getCustomer(route.params.id);
  customer.value = res.data;
});
</script>

<template>
  <div class="flex gap-x-20">
    <DashboardRoutes />
    <h1>{{ customer.name }}</h1>
  </div>
</template>
