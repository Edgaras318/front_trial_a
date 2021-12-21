import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import getUser from "@/composables/getUser";

// Bootstrap and bootstrap icons
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Base URL
axios.defaults.baseURL = "http://localhost:8000/api/"

const { loadUser } = getUser();
loadUser().then(() => createApp(App).use(router).mount('#app'));

