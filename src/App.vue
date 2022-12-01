<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/customer">Customers</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  margin-bottom: 30px;
}

nav * {
  margin-right: 30px;
}
</style>
