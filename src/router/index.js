import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Detalles from '../views/Detalles.vue';
import PeliculasFavoritas from '../views/PeliculasFavoritas.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  { path: '/', name: 'home', component: HomeView },
  { path: '/detalles/:id', 
    name: 'Detalles', 
    component: Detalles
  },
  { path: '/PeliculasFavoritas', 
    name: 'PeliculasFavoritas', 
    component: PeliculasFavoritas
  },
  ]
})

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

export default router;
