<template>
  <section class="p-5">
    <div class="container">
      <h1 class="text-center mb-4">
        Account <span class="text-primary">Login</span>
      </h1>
      <form @submit.prevent="handleSubmit" class="mx-auto">
        <div class="form-group mb-2">
          <label for="email-input">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email-input"
            v-model="email"
            required
          />
        </div>
        <div class="form-group mb-3">
          <label for="password-input">Password</label>
          <input
            type="password"
            class="form-control"
            id="password-input"
            placeholder="Password"
            v-model="password"
            required
          />
        </div>
        <div v-if="error" class="text-danger pb-3">{{ error }}</div>
        <button class="btn btn-dark w-100" :class="isLoading ? 'disabled' : ''">
          <span
            v-if="isLoading"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Login
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import useLogin from "@/composables/useLogin";
import getUser from "@/composables/getUser";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "Login",

  setup() {
    const { error, login, isLoading } = useLogin();
    const { loadUser } = getUser();

    const email = ref("");
    const password = ref("");

    const router = useRouter();
    const route = useRoute();

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);

      await loadUser();
      if (res) {
        if (res.status == 200) {
          if (route.redirectedFrom) {
            router.push(route.redirectedFrom.path);
            isLoading.value = false;
          } else {
            isLoading.value = false;
            router.push("/");
          }
        }
      }
    };

    return { email, password, handleSubmit, error, isLoading };
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
