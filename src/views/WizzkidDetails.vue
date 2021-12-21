<template>
  <div>
    <TheSpinner v-if="isLoading" />
    <p>wizzkid Id: {{ this.id }}</p>
    <p v-if="!isLoading">{{ wizzkid.name }}</p>
    <button
      :class="isDeleting ? 'disabled' : ''"
      @click="handleDelete"
      class="btn btn-danger"
    >
      <span
        v-if="isDeleting"
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      <i class="bi-person-x"></i> <span> Delete</span>
    </button>
  </div>
</template>
<script>
import deleteWizzkid from "@/composables/deleteWizzkid.js";
import getWizzkid from "@/composables/getWizzkid.js";
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import TheSpinner from "../components/TheSpinner.vue";
export default {
  components: { TheSpinner },
  props: ["id"],
  setup(props) {
    const { isPending: isDeleting, deleteWizz } = deleteWizzkid();
    const { isLoading, getWizz, wizzkid } = getWizzkid();

    const router = useRouter();

    onMounted(async () => await getWizz(props.id));

    const handleDelete = async () => {
      await deleteWizz(props.id);
      router.push("/");
    };

    return {
      isDeleting,
      handleDelete,
      isLoading,
      wizzkid,
    };
  },
};
</script>
<style>
</style>