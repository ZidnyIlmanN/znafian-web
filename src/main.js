import { createApp } from 'vue';
import App from './views/HomeView.vue'
import { inject } from '@vercel/analytics';

// Panggil fungsi inject untuk menambahkan skrip pelacakan
inject();

createApp(App).mount('#app');
