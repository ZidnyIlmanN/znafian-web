import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import { inject } from '@vercel/analytics';

// Panggil fungsi inject untuk menambahkan skrip pelacakan
inject();

const app = createApp(App);
app.use(router);
app.mount('#app');
