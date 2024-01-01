import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    component: () => import('./views/Login/Login.vue'),
  },
  {
    path: '/otp',
    component: () => import('./views/Login/Otp.vue'),
  },
  {
    path: '/regions',
    component: () => import('./components/regions/index.vue'),
  },
  {
    path: '/region/create',
    component: () => import('./components/regions/create.vue'),
  },
  {
    path: '/region/edit/:id',
    component: () => import('./components/regions/edit.vue'),
    props: true,
  },
  {
    path: '/townships',
    component: () => import('./views/Township/index.vue'),
  },
  {
    path: '/departments',
    component: () => import('./views/Department/index.vue'),
  },
  {
    path: '/department/create',
    component: () => import('./views/Department/create.vue'),
  },
  {
    path: '/department/edit/:id',
    component: () => import('./views/Department/edit.vue'),
    props: true,
  },
  {
    path: '/count',
    component: () => import('./views/count.vue'),
    props: true,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
