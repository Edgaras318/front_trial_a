<template >
  <header>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div class="container">
        <router-link to="/" class="navbar-brand"
          >Wizzkids Manager 2000</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li v-if="user" class="nav-item">
              <span @click="handleClick" type="button" class="nav-link">
                <i class="bi bi-box-arrow-right"> Logout</i>
              </span>
            </li>
            <li v-if="!user" class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li v-if="!user" class="nav-item">
              <router-link to="/register" class="nav-link"
                >Register</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";

export default {
  name: "TheNavBar",
  setup() {
    const { user, loadUser } = getUser();
    const { logout } = useLogout();
    const router = useRouter();

    const handleClick = async () => {
      await logout();
      user.value = null;
      await loadUser();
      router.push({ name: "Login" });
    };

    return { logout, handleClick, user };
  },
};
</script>
<style>
body::before {
  display: block;
  content: "";
  height: 72px;
}
</style>