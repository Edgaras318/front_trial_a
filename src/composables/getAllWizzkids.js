import { ref } from 'vue';
import axios from 'axios';

const getAllWizzkids = () => {
  const wizzkids = ref([]);
  const isLoading = ref(false);

  const getWizzkids = async () => {
    isLoading.value = true;
    try {
      const res = await axios.get("users");
      wizzkids.value = res.data;
      isLoading.value = false;
    } catch (error) {
      isLoading.value = false;
    }
  }

  return {
    wizzkids,
    getWizzkids,
    isLoading
  }
}

export default getAllWizzkids;