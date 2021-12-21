import { ref } from 'vue';
import axios from 'axios';

const error = ref('');
const isLoading = ref(false);

const update = async (id, formData) => {
  isLoading.value = true;
  error.value = '';
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      "Accept": "application/json",
    },
  };

  try {
    const res = await axios.post(
      "user/" + id + "?_method=PUT",
      formData, config
    );
    isLoading.value = false;
    return res;
  } catch (err) {
    isLoading.value = false;

    for (const key in err.response.data.errors) {
      error.value += err.response.data.errors[key][0] + ' '
    }

  }
}

const updateWizzkid = () => {
  return { error, update, isLoading }
}

export default updateWizzkid