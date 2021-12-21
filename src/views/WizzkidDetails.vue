<template>
  <div>
    <p>wizzkid Id: {{ this.id }}</p>
    <button
      :class="isPending ? 'disabled' : ''"
      @click="handleDelete"
      class="btn btn-danger"
    >
      <span
        v-if="isPending"
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
import { useRouter } from "vue-router";
export default {
  props: ["id"],
  setup(props) {
    const { isPending, deleteWizz } = deleteWizzkid();

    const router = useRouter();

    const handleDelete = async () => {
      await deleteWizz(props.id);
      router.push("/");
    };

    return {
      isPending,
      handleDelete,
    };
  },
};
</script>
<style>
</style>