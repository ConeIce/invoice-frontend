import { ref } from "vue";
import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", () => {
  const showModal = ref(true);

  function toggleModal(message) {
    showModal.value = message;
  }
  function off() {
    showModal.value = false;
  }

  return { showModal, toggleModal, off };
});
