<script setup>
import { reactive } from "vue";
import { addCustomer } from "../api/index.js";

const customerDetails = reactive({
  name: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  country: "",
  companyName: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(customerDetails);

  const res = await addCustomer(customerDetails);
  console.log(res);
};
</script>

<template>
  <form @submit="handleSubmit" class="bg-slate-300 p-10">
    <label>Name</label>
    <input v-model="customerDetails.name" type="text" />

    <label>Email</label>
    <input v-model="customerDetails.email" type="email" />

    <label>Phone</label>
    <input v-model="customerDetails.phone" type="number" />

    <label>City</label>
    <input v-model="customerDetails.city" type="text" />

    <label>State</label>
    <input v-model="customerDetails.state" type="text" />

    <label>Country</label>
    <input v-model="customerDetails.country" type="text" />

    <label>Company name</label>
    <input v-model="customerDetails.companyName" type="text" />

    <button type="submit">Add customer</button>
  </form>
</template>
