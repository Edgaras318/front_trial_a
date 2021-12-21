import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WizzkidDetails from '@/views/WizzkidDetails.vue'
import Register from '@/views/auth/Register.vue'
import Login from '@/views/auth/Login.vue'
import getUser from "@/composables/getUser";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wizzkid/:id',
    name: 'WizzkidDetails',
    component: WizzkidDetails,
    props: true
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const { user, loadUser } = getUser();
router.beforeEach((to, from, next) => {
  loadUser();
  if (to.name == "WizzkidDetails") {
    if (localStorage.token && user.value) {
      next();
    }
    else {
      next('Login');
    }
  }
  else if (to.name == "Login") {

    if (!localStorage.token && !user.value) {
      next();
    }
    else {
      next('/');
    }
  }
  else {
    next();
  }
})


export default router
