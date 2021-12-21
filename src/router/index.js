import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WizzkidDetails from '@/views/WizzkidDetails.vue'
import Register from '@/views/auth/Register.vue'
import Login from '@/views/auth/Login.vue'
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

export default router
