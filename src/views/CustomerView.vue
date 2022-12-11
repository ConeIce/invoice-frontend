<script setup>
import { ref, onMounted } from "vue";
import DashboardRoutes from "../components/DashboardRoutes.vue";
import { useRoute } from "vue-router";

import { getCustomer, getCustomerInvoices } from "../api";
import InvoiceList from "../components/InvoiceList.vue";

const customer = ref(false);
const invoices = ref(false);

onMounted(async () => {
  const route = useRoute();
  const res = await getCustomer(route.params.id);
  customer.value = res.data;

  const resInvoice = await getCustomerInvoices(route.params.id);
  invoices.value = resInvoice.data;

  console.log(res.data);
  console.log(resInvoice.data);
});
</script>

<template>
  <div class="flex">
    <DashboardRoutes />
    <div class="grow">
      <h1 class="text-2xl">{{ customer.name }}</h1>

      <h2 class="text-xl">Address</h2>
      <p>{{ customer.city }}</p>
      <p>{{ customer.state }}</p>
      <p>{{ customer.country }}</p>

      <InvoiceList :invoices="invoices"></InvoiceList>
    </div>
  </div>
</template>
