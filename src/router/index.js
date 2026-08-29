import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FeaturesView from '../views/FeaturesView.vue';
import PlatformsView from '../views/PlatformsView.vue';
import DownloadView from '../views/DownloadView.vue';
import DocsView from '../views/DocsView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/features', name: 'features', component: FeaturesView },
  { path: '/platforms', name: 'platforms', component: PlatformsView },
  { path: '/download', name: 'download', component: DownloadView },
  { path: '/docs', name: 'docs', component: DocsView },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
