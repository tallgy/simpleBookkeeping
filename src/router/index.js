import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/home')
const Bookkeeping = () => import('views/bookkeeping/bookkeeping')
const AddBill = () => import('views/bookkeeping/childComps/addBill')
const Profile = () => import('views/profile/profile')
const Statistics = () => import('views/statistics/statistics')

const routes = [
  {
    path: '/',
    redirect: '/bookkeeping'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/bookkeeping',
    name: 'bookkeeping',
    component: Bookkeeping
  },
  {
    path: '/bookkeeping/addBill',
    name: 'addBill',
    component: AddBill
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: Statistics
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
