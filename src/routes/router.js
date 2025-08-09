import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/aboutView.vue'
import ProjectsView from '../views/projectsView.vue'
import SkillView from '../views/skillView.vue'

const routes = [
  {
    path: '/',
    component: SkillView,
  },
  {
    path: '/projects',
    component: ProjectsView,
  },
  {
    path: '/about',
    component: AboutView,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
