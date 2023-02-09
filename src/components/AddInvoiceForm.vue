<script setup>
import { ref, onMounted, reactive } from "vue";
import { getCustomers, addInvoice } from "../api/index.js";

const props = defineProps(["invoicesLen"]);
const emit = defineEmits(["showInvoiceForm", "newInvoice"]);

console.log(props.invoicesLen);

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;

const invoiceDetails = reactive({
  customerId: "",
  date: today,
  items: [],
  discount: "0",
  tax: "0",
});

const customers = ref(false);
const currItem = ref({});

onMounted(async () => {
  const res = await getCustomers();
  customers.value = res.data;
});

const addItem = (e) => {
  e.preventDefault();
  invoiceDetails.items.push(currItem.value);
  currItem.value = {};
};

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(
    !!invoiceDetails.customerId,
    !!invoiceDetails.date,
    !!invoiceDetails.items.length,
    !!invoiceDetails.discount,
    !!invoiceDetails.tax
  );

  if (
    !invoiceDetails.customerId ||
    !invoiceDetails.date ||
    !invoiceDetails.items.length
  ) {
    alert("Fill All fields");
    return;
  }

  if (
    isNaN(invoiceDetails.discount) ||
    isNaN(invoiceDetails.tax) ||
    invoiceDetails.discount < 0 ||
    invoiceDetails.discount > 100 ||
    invoiceDetails.tax < 0 ||
    invoiceDetails.tax > 100
  ) {
    alert("Enter valid percentage values");
    return;
  }

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
    <h1 class="text-2xl mb-10">
      Add invoice
      <span class="ml-4 text-xl font-bold">#{{ props.invoicesLen + 1 }}</span>
    </h1>
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
          <label>Invoice date</label>
          <input
            :min="`${today}`"
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

      <div class="mt-6">
        <label>Discount percentage:</label>
        <input
          type="number"
          v-model="invoiceDetails.discount"
          class="block bg-slate-100 mb-3 p-2 rounded"
          min="0"
          max="100"
        />
        <label>Tax percentage:</label>
        <input
          class="block bg-slate-100 p-2 rounded"
          type="number"
          v-model="invoiceDetails.tax"
          min="0"
          max="100"
        />
      </div>
    </form>

    <button
      class="mt-4 bg-blue-600 px-8 py-2 rounded text-white text-sm hover:-translate-y-px transition-all"
      @click="handleSubmit"
      type="submit"
    >
      Add invoice
    </button>
  </div>
</template>
