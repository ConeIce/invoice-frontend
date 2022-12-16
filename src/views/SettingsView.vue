<script setup>
import { ref, onMounted } from "vue";
import DashboardRoutes from "../components/DashboardRoutes.vue";

import { editGSTIN, getGSTIN } from "../api/";

const GSTIN = ref("");

const handleClick = async () => {
  const res = await editGSTIN({ GSTIN: GSTIN.value });
};

onMounted(async () => {
  const res = await getGSTIN();
  GSTIN.value = res.data.GSTIN;
});
</script>

<template>
  <div class="flex">
    <DashboardRoutes />
    <div class="py-8 px-12">
      <h1 class="text-2xl mb-10">Settings</h1>
      <label>Company GSTIN</label>
      <input
        v-model="GSTIN"
        type="text"
        class="block bg-sky-50 rounded-md px-3 py-2 mt-2"
      />

      <button
        @click="handleClick"
        class="rounded-md bg-sky-600 text-white py-2 px-4 mt-5"
      >
        Submit
      </button>
    </div>
  </div>
</template>
