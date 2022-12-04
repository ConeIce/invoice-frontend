<script setup>
import { ref, onMounted, reactive } from "vue";
import { getCustomers, addInvoice } from "../api/index.js";

const emit = defineEmits(["showInvoiceForm"]);

const invoiceDetails = reactive({
  customerId: "",
  name: "",
  date: "",
  items: [],
});

const customers = ref(false);
const currItem = ref({});

onMounted(async () => {
  const res = await getCustomers();
  customers.value = res.data;
  console.log(customers);
});

const addItem = (e) => {
  e.preventDefault();
  invoiceDetails.items.push(currItem.value);
  currItem.value = {};
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await addInvoice(invoiceDetails);
  emit("showInvoiceForm", false);
  console.log(res);
};
</script>

<template>
  <div
    class="p-10 absolute inset-x-80 rounded-md backdrop-blur-md bg-white/30 border-2 border-slate-100"
  >
    <h1 class="text-2xl mb-20">Add invoice</h1>
    <form class="grid grid-cols-2">
      <div>
        <label>Customer name:</label>
        <select v-model="invoiceDetails.customerId" name="customers">
          <option
            v-for="customer in customers"
            :key="customer._id"
            :value="customer._id"
          >
            {{ customer.name }}
          </option>
        </select>
      </div>
      <div>
        <label>Name</label>
        <input
          class="block bg-slate-100 rounded-full px-5 py-2 mt-3 mb-6"
          v-model="invoiceDetails.name"
          type="text"
        />
      </div>
      <div>
        <label>Date</label>
        <input
          class="block bg-slate-100 rounded-full px-5 py-2 mt-3 mb-6"
          v-model="invoiceDetails.date"
          type="date"
        />
      </div>

      <div class="items">
        <div v-for="item in invoiceDetails.items" :key="item">
          <p>{{ item.name }}</p>
          <p>{{ item.cost }}</p>
          <p>{{ item.quantity }}</p>
        </div>
        <div>
          <label>name</label>
          <input
            v-model="currItem['name']"
            class="bg-slate-500 block"
            type="text"
          />
          <label>cost</label>
          <input
            v-model="currItem['cost']"
            class="bg-slate-500 block"
            type="number"
          />
          <label>quantity</label>
          <input
            v-model="currItem['quantity']"
            class="bg-slate-500 block"
            type="number"
          />
          <button @click="addItem">add teim</button>
        </div>
      </div>
    </form>

    <button
      class="mt-4 bg-red-500 px-8 py-2 rounded-full text-white hover:-translate-y-px transition-all"
      @click="handleSubmit"
      type="submit"
    >
      Add invoice
    </button>
  </div>
</template>