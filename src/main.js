import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/reset.css';
import './assets/styles/style.css';
createApp(App).use(router).mount('#app');
