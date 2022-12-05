<script setup>
import { reactive } from "vue";
import { addCustomer } from "../api/index.js";

const emit = defineEmits(["showCustomerForm", "newCustomer"]);

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

  for (const item in customerDetails) {
    if (customerDetails[item] == "") return alert("Fill all fields");
  }

  const res = await addCustomer(customerDetails);
  emit("showCustomerForm", false);
  emit("newCustomer", res.data);
};
</script>

<template>
  <div
    @click="emit('showCustomerForm', false)"
    class="absolute inset-0 bg-white/30 backdrop-blur-md"
  ></div>

  <div
    class="p-10 absolute inset-x-80 rounded-md bg-white border-2 border-slate-100"
  >
    <h1 class="text-2xl mb-20">Add customer</h1>
    <form class="grid grid-cols-2">
      <div>
        <label>Name</label>
        <input
          class="block bg-slate-100 rounded-full px-5 py-2 mt-3 mb-6"
          v-model="customerDetails.name"
          type="text"
        />
      </div>

      <div>
        <label>Email</label>
        <input
          class="block bg-slate-100 rounded-full px-5 py-2 mt-3 mb-6"
          v-model="customerDetails.email"
          type="email"
        />
      </div>

      <div>
        <label>Phone</label>
        <input
          class="block bg-slate-100 rounded-full px-5 py-2 mt-3 mb-6"
          v-model="customerDetails.phone"
          type="number"
        />
      </div>

      <div>
        <label>City</label>
        <input
          class="block bg-slate-100 rounded-full px-5 py-2 mt-3 mb-6"
          v-model="customerDetails.city"
          type="text"
        />
      </div>

      <div>
        <label>State</label>
        <input
          class="block bg-slate-100 rounded-full px-5 py-2 mt-3 mb-6"
          v-model="customerDetails.state"
          type="text"
        />
      </div>

      <div>
        <label>Country</label>
        <input
          class="block bg-slate-100 rounded-full px-5 py-2 mt-3 mb-6"
          v-model="customerDetails.country"
          type="text"
        />
      </div>

      <div>
        <label>Company name</label>
        <input
          class="block bg-slate-100 rounded-full px-5 py-2 mt-3 mb-6"
          v-model="customerDetails.companyName"
          type="text"
        />
      </div>
    </form>

    <button
      class="mt-4 bg-red-500 px-8 py-2 rounded-full text-white hover:-translate-y-px transition-all"
      @click="handleSubmit"
      type="submit"
    >
      Add customer
    </button>
  </div>
</template>
