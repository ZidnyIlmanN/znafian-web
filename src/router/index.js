import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorksView from '../views/WorksView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import ContactView from '../views/ContactView.vue'
import ExperienceView from '../views/ExperienceView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/experience',
        name: 'Experience',
        component: ExperienceView
    },
    {
        path: '/projects',
        name: 'Projects',
        component: WorksView
    },
    {
        path: '/projects/:id',
        name: 'ProjectDetail',
        component: ProjectDetailView
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        if (savedPosition) {
            return savedPosition
        }
        return { top: 0, behavior: 'smooth' }
    }
});

export default router