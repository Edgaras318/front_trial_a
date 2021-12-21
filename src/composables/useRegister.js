import { ref } from 'vue';
import axios from 'axios';

const useRegister = () => {
  const error = ref(null);
  const isLoading = ref(false);
  const register = async (formData) => {
    isLoading.value = true;
    error.value = null;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "register",
        formData, config
      );

      localStorage.setItem("token", res.data.token);
      error.value = null;
      isLoading.value = false;
    } catch (err) {
      for (const key in err.response.data.errors) {
        error.value = err.response.data.errors[key][0] + ' '
      }
      isLoading.value = false;
    }
  }


  return { error, register, isLoading }
}

export default useRegister