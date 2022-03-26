import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage from '@/views/HomePage.vue';
import CardPage from '@/views/CardPage.vue';

const routes = [
  {path: '/', component: HomePage},
  {path: '/card', component: CardPage},
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;