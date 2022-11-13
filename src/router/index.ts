import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CartPage from "../views/Page/CartPage.vue"
import HomePage from "../views/Page/HomePage.vue"
import ProductPage from "../views/Page/ProductPage.vue"


const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name:'home',
      component:HomePage
    },
    {
      path: '/product',
      name:'product',
      component:ProductPage
    },
    {
      path: '/cart',
      name:'cart',
      component:CartPage
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
