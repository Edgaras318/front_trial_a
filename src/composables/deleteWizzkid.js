import axios from 'axios';
import { ref } from 'vue';

const error = ref(null);
const isPending = ref(false);

const deleteWizzkid = () => {

  const deleteWizz = async (id) => {
    isPending.value = true;
    error.value = null;
    try {
      const res = await axios.delete("user/" + id);
      isPending.value = false;
      return res;
    } catch (error) {
      //console.log(error.message);
      isPending.value = false;
      error.value = 'could not delete the wizzkid';
    }
  }

  return {
    deleteWizz,
    isPending,
    error
  }
}

export default deleteWizzkid;