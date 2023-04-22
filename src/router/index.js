import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue')
    },
    {
      path: '/questions/:id',
      name: 'question',
      component: () => import('../views/questions/_id.vue')
    },
    {
      path: '/quizzes/:quizIndex/:questionIndex',
      name: 'quiz',
      component: () => import('../views/quizzes/_id.vue')
    }
  ]
})

export default router
