<script setup>
import { reactive } from "vue";
import { addCustomer } from "../api/index.js";

const emit = defineEmits(["showCustomerForm", "newCustomer"]);

const customerDetails = reactive({
  name: "",
  email: "",
  phone: null,
  city: "",
  state: "",
  country: "",
  companyName: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !customerDetails.name ||
    !customerDetails.email ||
    !customerDetails.city ||
    !customerDetails.state ||
    !customerDetails.country ||
    !customerDetails.companyName ||
    !customerDetails.GSTIN ||
    !customerDetails.phone
  ) {
    return alert("Fill all fields");
  }

  console.log(
    customerDetails.phone,
    isNaN(customerDetails.phone),
    typeof customerDetails.phone
  );

  if (isNaN(customerDetails.phone) || customerDetails.phone < 0) {
    alert("Enter valid number");
    return;
  }

  const res = await addCustomer(customerDetails);
  emit("showCustomerForm", false);
  emit("newCustomer", res.data);
};
</script>

<template>
  <div
    @click="emit('showCustomerForm', false)"
    class="absolute inset-0 bg-black/50"
  ></div>

  <div
    class="px-16 py-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-white border-2 border-slate-100"
  >
    <h1 class="text-2xl mb-10">Add customer</h1>
    <form class="grid grid-cols-2 gap-x-20 text-sm">
      <div>
        <label>Name</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="customerDetails.name"
          type="text"
        />
      </div>

      <div>
        <label>Email</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="customerDetails.email"
          type="email"
        />
      </div>

      <div>
        <label>Phone</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="customerDetails.phone"
        />
      </div>

      <div>
        <label>City</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="customerDetails.city"
          type="text"
        />
      </div>

      <div>
        <label>State</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="customerDetails.state"
          type="text"
        />
      </div>

      <div>
        <label>Country</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="customerDetails.country"
          type="text"
        />
      </div>

      <div>
        <label>Company name</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="customerDetails.companyName"
          type="text"
        />
      </div>

      <div>
        <label>GST IN</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="customerDetails.GSTIN"
          type="text"
        />
      </div>
    </form>

    <button
      class="mt-4 bg-blue-600 px-8 py-2 rounded text-white text-sm hover:-translate-y-px transition-all"
      @click="handleSubmit"
      type="submit"
    >
      Add customer
    </button>
  </div>
</template>
