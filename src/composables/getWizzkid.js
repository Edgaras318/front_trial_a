import { ref } from 'vue';
import axios from 'axios';



const getWizzkid = () => {

  const wizzkid = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  const getWizz = async (id) => {
    isLoading.value = true;
    try {
      const res = await axios.get("user/" + id);
      wizzkid.value = res.data;
      isLoading.value = false;
    } catch (error) {
      isLoading.value = false;
      error.value = error;
    }
    isLoading.value = false
  }

  return {
    wizzkid,
    getWizz,
    isLoading,
    error
  }
}

export default getWizzkid;