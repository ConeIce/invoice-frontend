<script setup>
import { ref, onMounted, reactive } from "vue";
import DashboardRoutes from "../components/DashboardRoutes.vue";

import { editCompanyDetails, getCompanyDetails } from "../api/";

import { useModalStore } from "@/stores/modal";

const store = useModalStore();
const { toggleModal } = store;

let companyDetails = reactive({
  name: "",
  GSTIN: "",
  accountName: "",
  accountNumber: "",
  branchName: "",
});

const handleClick = async () => {
  if (
    !companyDetails.name ||
    !companyDetails.GSTIN ||
    !companyDetails.accountName ||
    !companyDetails.accountNumber ||
    !companyDetails.branchName
  ) {
    alert("Enter a valid input");
    return;
  }

  if (isNaN(companyDetails.accountNumber) || companyDetails.accountNumber < 0) {
    alert("Enter a valid account number");
    return;
  }

  try {
    const res = await editCompanyDetails(companyDetails);
    alert("Submitted");
    toggleModal("Company details updated");
  } catch (err) {
    console.log(err);
  }
};

onMounted(async () => {
  const res = await getCompanyDetails();
  companyDetails.name = res.data.name;
  companyDetails.GSTIN = res.data.GSTIN;
  companyDetails.accountName = res.data.accountName;
  companyDetails.accountNumber = res.data.accountNumber;
  companyDetails.branchName = res.data.branchName;

  console.log(res.data);
  console.log(companyDetails);
});
</script>

<template>
  <div class="flex">
    <DashboardRoutes />
    <div class="py-8 px-12">
      <h1 class="text-2xl mb-10">Settings</h1>
      <label>Company name</label>
      <input
        v-model="companyDetails.name"
        type="text"
        class="block bg-sky-50 rounded-md px-3 py-2 mt-2"
      />
      <label>Company GSTIN</label>
      <input
        v-model="companyDetails.GSTIN"
        type="text"
        class="block bg-sky-50 rounded-md px-3 py-2 mt-2"
      />

      <h1 class="text-xl font-bold">Account details</h1>

      <label>Account number</label>
      <input
        v-model="companyDetails.accountNumber"
        type="number"
        class="block bg-sky-50 rounded-md px-3 py-2 mt-2"
      />
      <label>Account name</label>
      <input
        v-model="companyDetails.accountName"
        type="text"
        class="block bg-sky-50 rounded-md px-3 py-2 mt-2"
      />
      <label>Branch name</label>
      <input
        v-model="companyDetails.branchName"
        type="text"
        class="block bg-sky-50 rounded-md px-3 py-2 mt-2"
      />

      <button
        @click="handleClick"
        class="rounded-md bg-blue-600 text-white py-2 px-4 mt-5"
      >
        Submit
      </button>
    </div>
  </div>
</template>
