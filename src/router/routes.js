import Home from '../views/Home.vue'
import GiftList from '../views/GiftList.vue'
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/giftlist',
    name: 'GiftList',
    component: GiftList
  }
]

