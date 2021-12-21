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
      //console.log(wizzkid.value);
      isLoading.value = false;
      console.log(isLoading.value)
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