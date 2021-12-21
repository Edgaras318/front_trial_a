import { ref } from 'vue';
import axios from 'axios';
import setAuthHeader from './../utils/setAuthheader';

// refs
const user = ref(null)
const error = ref('');

// auth changes
const loadUser = async () => {
  const config = {
    headers: {
      "Accept": "application/json",
    },
  };

  if (localStorage.token) {
    setAuthHeader(localStorage.token);
    try {
      const res = await axios.get("auth", config);
      user.value = res.data;
    } catch (error) {
      localStorage.removeItem("token");
      //  console.log(error.response);
      error.value = error;
      user.value = null;
    }
  }
}


const getUser = () => {
  return { user, loadUser, error }
}

export default getUser