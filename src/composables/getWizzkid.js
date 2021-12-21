import { ref } from 'vue';
import axios from 'axios';

const wizzkid = ref(null);
const isLoading = ref(false);
const error = ref(null);

const getWizzkid = () => {

  const getWizz = async (id) => {
    isLoading.value = true;
    try {
      const res = await axios.get("users/" + id);
      wizzkid.value = res.data;
      isLoading.value = false;
    } catch (error) {
      isLoading.value = false;
      error.value = error;
    }
  }

  return {
    wizzkid,
    getWizz,
    isLoading,
    error
  }
}

export default getWizzkid;