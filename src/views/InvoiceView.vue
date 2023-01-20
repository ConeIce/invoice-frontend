<script setup>
import DashboardRoutes from "../components/DashboardRoutes.vue";
import { useRoute } from "vue-router";

import axios from "axios";

import { downloadInvoice } from "../api";

const route = useRoute();

const handleClick = async (e) => {
  e.preventDefault();

  const res = await downloadInvoice(route.params.id);
  const blob = new Blob([res.data], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = `your-file-name.pdf`;
  link.click();
  console.log(res);
};
</script>

<template>
  <DashboardRoutes></DashboardRoutes>
  <h1>Invoice</h1>
  <form @submit="handleClick"><button type="submit">download</button></form>
</template>
