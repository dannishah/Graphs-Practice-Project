// Utilities
import { ref, computed, onMounted } from "vue";
import { defineStore } from 'pinia'
import axios from "axios";

export const useAppStore = defineStore('app', () => {
  let count = ref(10);
  let user = ref(null)
  let doubleCount = computed( () => {
  return  count.value*2
  })

  onMounted( async () => {
    user.value = await axios.get("https://api.publicapis.org/entries")
  });

  return { count, doubleCount, user }
})
