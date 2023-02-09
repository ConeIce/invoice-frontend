<script setup>
import { storeToRefs } from "pinia";
import { useModalStore } from "@/stores/modal";
import { onMounted } from "vue";

const store = useModalStore();
const { showModal } = storeToRefs(store);

onMounted(() => {
  setTimeout(() => {
    store.off();
  }, 3000);
});
</script>

<template>
  <div class="bg-blue-600 px-4 py-3 text-white rounded-md modal">
    {{ showModal }}
  </div>
</template>
