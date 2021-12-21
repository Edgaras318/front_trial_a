import { ref } from 'vue'
import axios from 'axios'

// refs
const error = ref(null)

// logout function
const logout = async () => {
  error.value = ''

  try {
    await axios.post("logout");
    localStorage.removeItem("token");
  }
  catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}

const useLogout = () => {
  return { error, logout }
}

export default useLogout