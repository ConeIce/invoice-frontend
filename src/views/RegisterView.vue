<script setup>
import { ref } from "vue";
import { register } from "../api/index.js";

const email = ref("");
const username = ref("");
const password = ref("");

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await register(email.value, username.value, password.value);
  console.log(res);
};
</script>

<template>
  <h1>Register</h1>
  <form @submit="handleSubmit">
    <label>Email</label>
    <input v-model="email" type="email" />

    <label>Username</label>
    <input v-model="username" type="text" />

    <label>Password</label>
    <input v-model="password" type="password" />

    <button>Register</button>
  </form>
</template>
