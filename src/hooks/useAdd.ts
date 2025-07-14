import { ref } from "vue";
export const useAdd = () => {
  const a = ref(1);
  setInterval(() => {
    a.value++;
  }, 1000);
  return a;
};
