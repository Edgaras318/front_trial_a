<template>
  <div class="modal fade" id="editProfileModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editProfileLabel">Edit Profile</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          <p class="lead text-center">This form used to edit user profile</p>
          <p class="text-danger text-center">{{ error }}</p>
          <form>
            <div class="mb-3">
              <div class="row p-3">
                <img
                  v-if="picturePreview"
                  :src="picturePreview"
                  alt=""
                  class="mb-3 mx-auto w-50 text-center rounded-circle"
                  style="height: 150px; width: 150px"
                />
                <input
                  @change="handlePicture"
                  type="file"
                  class="form-control"
                  id="customFile"
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="name" class="col-form-label"> Name: </label>
              <input
                v-model="name"
                type="text"
                class="form-control"
                id="first-name"
              />
            </div>
            <div class="mb-3">
              <label for="role" class="col-form-label">Role:</label>
              <select v-model="role" class="form-select">
                <option value="intern">Intern</option>
                <option value="developer">Developer</option>
                <option value="boss">Boss</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="email" class="col-form-label">Email:</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="email"
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="col-form-label">Phone:</label>
              <input
                v-model="phone"
                type="tel"
                class="form-control"
                id="phone"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            @click="handleSubmit"
            type="button"
            class="btn btn-success"
            :class="isLoading ? 'disabled' : ''"
          >
            <span
              v-if="isLoading"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import updateWizzkid from "@/composables/updateWizzkid";
import getWizzkid from "@/composables/getWizzkid";
import { ref } from "vue";
import { Modal } from "bootstrap";

export default {
  props: [
    "wizzkidId",
    "wizzkidemail",
    "wizzkidname",
    "wizzkidphone",
    "wizzkidrole",
  ],
  setup(props) {
    const { update, isLoading, error } = updateWizzkid();
    const { getWizz } = getWizzkid();

    // Edit user
    const picturePreview = ref("");
    const email = ref(props.wizzkidemail);
    const name = ref(props.wizzkidname);
    const picture = ref("");
    const role = ref(props.wizzkidrole);
    const phone = ref(props.wizzkidphone);

    const handleSubmit = async () => {
      const formData = new FormData();
      formData.append("email", email.value);
      formData.append("name", name.value);
      formData.append("role", role.value);
      formData.append("phone", phone.value);
      // formData.append("picture", picture.value);

      const res = await update(props.wizzkidId, formData);

      if (res) {
        if (res.status == 200) {
          const modal = document.getElementById("editProfileModal");
          const myModal = Modal.getInstance(modal);
          myModal.hide();
          await getWizz(props.wizzkidId);
        }
      }
    };

    const handlePicture = (e) => {
      picture.value = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(picture.value);
      reader.onload = (e) => {
        picturePreview.value = e.target.result;
      };
    };

    return {
      handlePicture,
      handleSubmit,
      picturePreview,
      picture,
      email,
      role,
      name,
      phone,
      isLoading,
      error,
    };
  },
};
</script>
<style >
</style>