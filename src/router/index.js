// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/cookies', name: 'CookiesView', component: () => import('../views/CookiesView.vue') },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue'),
  },
  {
    path: '/terms',
    name: 'TermsAndConditions',
    component: () => import('../views/TermsAndConditions.vue'),
  },
  { path: '/legal', name: 'LegalView', component: () => import('../views/LegalView.vue') },
  { path: '/send', name: 'BtobForm', component: () => import('../views/BtobForm.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return new Promise((resolve) => {
        const tries = 20
        let i = 0
        const waitForEl = () => {
          const el = document.querySelector(to.hash)
          if (el) {
            const navbar = document.querySelector('.navbar')
            const offset = navbar ? navbar.offsetHeight : 0
            const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 8
            window.scrollTo({ top, behavior: 'smooth' })
            resolve({ left: 0, top })
          } else if (i < tries) {
            i++
            setTimeout(waitForEl, 50)
          } else {
            resolve({ left: 0, top: 0 })
          }
        }
        waitForEl()
      })
    }
    return { left: 0, top: 0 }
  },
})

export default router
