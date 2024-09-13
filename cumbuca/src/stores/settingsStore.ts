// src/stores/settingsStore.ts
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useStoreSettings = defineStore('settingsStore', () => {
  const settings = reactive({
    promptToDelete: true,
  });

  return {
    settings,
  };
});
