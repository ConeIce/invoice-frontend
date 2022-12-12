<script setup>
import { ref, onMounted, reactive } from "vue";
import { getCustomers, addInvoice } from "../api/index.js";

const emit = defineEmits(["showInvoiceForm", "newInvoice"]);

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
  emit("newInvoice", res.data);
};
</script>

<template>
  <div
    @click="emit('showInvoiceForm', false)"
    class="absolute inset-0 bg-black/50"
  ></div>

  <div
    class="mt-20 p-10 absolute inset-x-80 rounded-md bg-white border-2 border-slate-100"
  >
    <h1 class="text-2xl mb-10">Add invoice</h1>
    <form class="text-sm">
      <div class="grid grid-cols-2">
        <div>
          <label>Customer name:</label>
          <select
            class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
            v-model="invoiceDetails.customerId"
            name="customers"
          >
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
          <label>Invoice name</label>
          <input
            class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
            v-model="invoiceDetails.name"
            type="text"
          />
        </div>
        <div>
          <label>Invoice date</label>
          <input
            class="block bg-slate-100 rounded px-5 py-2 mt-3 mb-6"
            v-model="invoiceDetails.date"
            type="date"
          />
        </div>
      </div>

      <h2 class="font-semibold my-3">Items</h2>

      <div class="rounded-md border-2">
        <div class="flex grow font-semibold bg-sky-50">
          <p class="basis-1/3 border-r-2 border-b-2 p-2">Name</p>
          <p class="basis-1/3 border-r-2 border-b-2 p-2">Cost</p>
          <p class="basis-1/3 border-r-2 border-b-2 p-2">Quantity</p>
        </div>

        <div>
          <div
            v-for="item in invoiceDetails.items"
            :key="item"
            class="flex grow"
          >
            <input
              class="basis-1/3 border-r-2 border-b-2 p-2"
              v-model="item.name"
            />
            <input
              class="basis-1/3 border-r-2 border-b-2 p-2"
              v-model="item.cost"
            />
            <input
              class="basis-1/3 border-r-2 border-b-2 p-2"
              v-model="item.quantity"
            />
          </div>
        </div>
      </div>
      <div class="my-4">
        <input
          v-model="currItem['name']"
          class="basis-1/3 bg-sky-50 rounded px-3 py-2 mr-3"
          type="text"
          placeholder="Item name"
        />
        <input
          v-model="currItem['cost']"
          class="basis-1/3 bg-sky-50 rounded px-3 py-2 mr-3"
          type="number"
          placeholder="Item cost"
        />
        <input
          v-model="currItem['quantity']"
          class="basis-1/3 bg-sky-50 rounded px-3 py-2 mr-3"
          type="number"
          placeholder="Item quantity"
        />
        <button
          @click="addItem"
          class="bg-sky-500 py-1 px-2 text-white rounded"
        >
          Add item +
        </button>
      </div>
    </form>

    <button
      class="mt-4 bg-sky-600 px-8 py-2 rounded text-white text-sm hover:-translate-y-px transition-all"
      @click="handleSubmit"
      type="submit"
    >
      Add invoice
    </button>
  </div>
</template>
