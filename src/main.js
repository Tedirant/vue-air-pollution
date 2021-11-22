
// import 'mdbootstrap/css/bootstrap.min.css';
// import 'mdbootstrap/css/mdb.min.css';
// import 'mdbootstrap/css/style.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/services/router'
import store from '@/services/store'

// import '@/assets/styles/reset.css';
import '@/assets/styles/style.css';

createApp(App).use(router).use(store).mount('#app');
