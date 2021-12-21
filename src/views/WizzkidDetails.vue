<template>
  <section id="wizzkid-details" class="p-5">
    <div class="container bg-light rounded-3">
      <TheSpinner v-if="isLoading" />
      <div v-else-if="wizzkid" class="row">
        <div
          class="
            col-md-6 col-lg-4
            py-5
            px-4
            bg-dark
            text-light text-center
            rounded-3
          "
        >
          <div class="row px-1">
            <img
              class="mb-3"
              src="https://randomuser.me/api/portraits/lego/2.jpg"
              alt=""
            />
          </div>
          <div class="row text-center">
            <h3>{{ wizzkid.name }}</h3>
            <p class="lead">{{ wizzkid.role }}</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-8 px-4 py-4 position-relative">
          <button
            @click="handleShow"
            class="btn btn-success position-absolute end-0 top-0 m-2"
          >
            <i class="bi bi-pencil-square"></i>
            <span class="d-none d-md-inline"> Edit Profile</span>
          </button>
          <button
            @click="handleDelete"
            :class="isDeleting ? 'disabled' : ''"
            class="btn btn-danger position-absolute end-0 bottom-0 m-2"
          >
            <i v-if="!isDeleting" class="bi bi-person-dash"></i>
            <span
              v-if="isDeleting"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span class="d-none d-md-inline"> Delete</span>
          </button>
          <button
            class="btn btn-primary position-absolute start-0 bottom-0 m-2"
          >
            <i class="bi bi-person-x"></i>
            <span class="d-none d-md-inline"> Fire</span>
          </button>
          <h1 class="">Information</h1>
          <hr />
          <div class="row mb-4">
            <div class="col">
              <h3>Email</h3>
              <p class="lead">
                <i class="bi bi-envelope"></i> {{ wizzkid.email }}
              </p>
            </div>
            <div class="col">
              <h3>Phone</h3>
              <p class="lead">
                <i class="bi bi-telephone"></i> {{ wizzkid.phone }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit User Modal-->
    <WizzkidEdit
      v-if="wizzkid"
      :wizzkidId="wizzkid.id"
      :wizzkidemail="wizzkid.email"
      :wizzkidrole="wizzkid.role"
      :wizzkidphone="wizzkid.phone"
      :wizzkidname="wizzkid.name"
    />
  </section>
</template>
<script>
import deleteWizzkid from "@/composables/deleteWizzkid.js";
import getWizzkid from "@/composables/getWizzkid.js";
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import TheSpinner from "../components/TheSpinner.vue";
import { Modal } from "bootstrap";
import WizzkidEdit from "../components/Dialogs/WizzkidEdit.vue";

export default {
  name: "WizzkidDetails",
  components: { TheSpinner, WizzkidEdit },
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

    const handleShow = async () => {
      const modal = document.getElementById("editProfileModal");
      const myModal = Modal.getOrCreateInstance(modal);
      myModal.show();
    };

    return {
      isDeleting,
      handleDelete,
      isLoading,
      wizzkid,
      handleShow,
    };
  },
};
</script>
<style scoped>
@media (min-width: 768px) {
  #wizzkid-details .container {
    width: 50% !important;
  }
}
</style>