<script setup>
import { ref } from "vue";
import { login } from "../api/index.js";

const username = ref("");
const password = ref("");

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await login(username.value, password.value);
  console.log(res);
};
</script>

<template>
  <h1>Login</h1>
  <form @submit="handleSubmit">
    <label>Username</label>
    <input v-model="username" type="text" />

    <label>Password</label>
    <input v-model="password" type="password" />

    <button>Login</button>
  </form>
</template>
