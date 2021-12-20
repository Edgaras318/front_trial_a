import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap and bootstrap icons
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(router).mount('#app')
