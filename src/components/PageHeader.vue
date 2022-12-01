<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <header>
    <nav class="mb-20">
      <RouterLink class="bg-slate-300 px-3 py-3 rounded mr-3" to="/"
        >Home</RouterLink
      >
      <RouterLink class="bg-slate-300 px-3 py-3 rounded mr-3" to="/login"
        >Login</RouterLink
      >
      <RouterLink class="bg-slate-300 px-3 py-3 rounded mr-3" to="/register"
        >Register</RouterLink
      >
      <RouterLink class="bg-slate-300 px-3 py-3 rounded mr-3" to="/customer"
        >Customers</RouterLink
      >
    </nav>
  </header>
</template>
