<script setup>
import { ref } from "vue";
import { login } from "../api/index.js";
import router from "../router/index.js";
import PageHeader from "../components/PageHeader.vue";

const username = ref("");
const password = ref("");

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!username.value || !password.value) {
    alert("Enter valid inputs");
    return;
  }

  const res = await login(username.value, password.value);
  if (res.status == 200) {
    router.push("/customer");
  }

  console.log(res);
};
</script>

<template>
  <PageHeader />
  <form class="mt-7 mb-20 px-20" @submit="handleSubmit">
    <h1 class="text-2xl mb-8">Login</h1>

    <label>Username</label>
    <input
      class="block bg-slate-200 rounded-full px-5 py-2 mt-3 mb-6"
      v-model="username"
      type="text"
    />

    <label>Password</label>
    <input
      class="block bg-slate-200 rounded-full px-5 py-2 mt-3"
      v-model="password"
      type="password"
    />

    <button
      class="mt-8 bg-red-500 px-8 py-2 rounded-full text-white hover:-translate-y-px transition-all"
    >
      Login
    </button>
  </form>
</template>
