<script setup>
import { ref } from "vue";
import { editCustomer } from "../api/index.js";

const emit = defineEmits(["showCustomerForm", "editedCustomer"]);

const props = defineProps(["customerDetails"]);

const editedCustomerDetails = ref({ ...props.customerDetails });
const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await editCustomer(editedCustomerDetails.value);
  emit("showCustomerForm", false);
  emit("editedCustomer");
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
    <h1 class="text-2xl mb-10">Edit customer</h1>
    <form class="grid grid-cols-2 gap-x-20 text-sm">
      <div>
        <label>Name</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="editedCustomerDetails.name"
          type="text"
        />
      </div>

      <div>
        <label>Email</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="editedCustomerDetails.email"
          type="email"
        />
      </div>

      <div>
        <label>Phone</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="editedCustomerDetails.phone"
          type="number"
        />
      </div>

      <div>
        <label>City</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="editedCustomerDetails.city"
          type="text"
        />
      </div>

      <div>
        <label>State</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="editedCustomerDetails.state"
          type="text"
        />
      </div>

      <div>
        <label>Country</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="editedCustomerDetails.country"
          type="text"
        />
      </div>

      <div>
        <label>Company name</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="editedCustomerDetails.companyName"
          type="text"
        />
      </div>

      <div>
        <label>GST IN</label>
        <input
          class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
          v-model="editedCustomerDetails.GSTIN"
          type="number"
        />
      </div>
    </form>

    <button
      class="mt-4 bg-blue-600 px-8 py-2 rounded text-white text-sm hover:-translate-y-px transition-all"
      @click="handleSubmit"
      type="submit"
    >
      Edit customer
    </button>
  </div>
</template>
