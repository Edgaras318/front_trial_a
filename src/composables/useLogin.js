import { ref } from 'vue';
import axios from 'axios';

const error = ref(null);
const isLoading = ref(false);

const login = async (email, password) => {
  error.value = null;
  isLoading.value = true;

  try {
    const formData = { email, password };
    const res = await axios.post(
      "login", formData
    );
    error.value = "";
    localStorage.setItem("token", res.data.token);

    return res;
  }
  catch (err) {

    error.value = err.response.data.message
    isLoading.value = false;
  }
}

const useLogin = () => {
  return { error, login, isLoading }
}

export default useLogin