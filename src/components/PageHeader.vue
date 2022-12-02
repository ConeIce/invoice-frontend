<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <header>
    <nav class="mt-7 mb-20 px-10">
      <RouterLink class="bg-slate-100 px-5 py-3 rounded-full mr-3" to="/login"
        >Login</RouterLink
      >
      <RouterLink
        class="bg-slate-100 px-5 py-3 rounded-full mr-3"
        to="/register"
        >Register</RouterLink
      >
    </nav>
  </header>
</template>
