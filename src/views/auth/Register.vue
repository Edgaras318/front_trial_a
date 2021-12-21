<template >
  <section class="p-5">
    <div class="container">
      <h1 class="text-center mb-4">
        Account <span class="text-primary">Register</span>
      </h1>
      <form @submit.prevent="handleSubmit" class="mx-auto">
        <div class="form-group mb-2">
          <div class="row">
            <img
              v-if="picturePreview"
              :src="picturePreview"
              alt=""
              class="mb-3 mx-auto w-50 text-center rounded-circle"
              style="height: 150px; width: 150px"
            />
          </div>
          <label for="inputImage" class="text-center mb-2"
            >Profile picture</label
          >
          <input
            @change="handlePicture"
            type="file"
            class="form-control"
            id="inputImage"
          />
        </div>
        <div class="form-group mb-2">
          <label for="inputName">Name</label>
          <input
            type="text"
            class="form-control"
            id="inputName"
            placeholder="Enter name"
            v-model="name"
            required
          />
        </div>
        <div class="form-group mb-2">
          <label for="roleInput">Role</label>
          <select v-model="role" class="form-select">
            <option value="intern">Intern</option>
            <option value="developer">Developer</option>
            <option value="boss">Boss</option>
          </select>
        </div>
        <div class="form-group mb-2">
          <label for="emailInput">Email address</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="emailInput"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="form-group mb-2">
          <label for="phoneInput">Phone</label>
          <input
            v-model="phone"
            type="phone"
            class="form-control"
            id="phoneInput"
            placeholder="Enter phone"
          />
        </div>
        <div class="form-group mb-2">
          <label for="passwordInput">Enter Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="passwordInput"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-group mb-3">
          <label for="exampleInputPassword2">Confirm Password</label>
          <input
            v-model="password_confirmation"
            type="password"
            class="form-control"
            id="exampleInputPassword2"
            placeholder="Password"
            required
          />
        </div>
        <div v-if="error" class="text-danger pb-3">{{ error }}</div>
        <button @click="handleSubmit" class="btn btn-dark w-100">
          Register
        </button>
      </form>
    </div>
  </section>
</template>
<script>
import useRegister from "@/composables/useRegister";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";

import { ref } from "vue";

export default {
  name: "Register",
  setup() {
    const { error, register, isLoading } = useRegister();
    const { loadUser } = getUser();

    const picturePreview = ref("");
    const picture = ref("");
    const email = ref("");
    const password = ref("");
    const name = ref("");
    const password_confirmation = ref("");
    const phone = ref("");
    const role = ref("intern");

    const router = useRouter();

    const handleSubmit = async () => {
      const formData = new FormData();
      formData.append("email", email.value);
      formData.append("name", name.value);
      formData.append("role", role.value);
      formData.append("phone", phone.value);
      formData.append("password", password.value);
      formData.append("password_confirmation", password_confirmation.value);
      // formData.append("picture", picture.value);

      // console.log(picture.value);

      await register(formData);

      if (!error.value) {
        router.push("/");
        loadUser();
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
      email,
      password,
      handleSubmit,
      handlePicture,
      picturePreview,
      error,
      isLoading,
      password_confirmation,
      role,
      phone,
      name,
    };
  },
};
</script>
<style scoped>
@media (min-width: 768px) {
  form {
    width: 25%;
  }
}
</style>
