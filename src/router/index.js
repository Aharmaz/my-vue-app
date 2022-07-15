import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Prices from '../views/Prices.vue'
import Details from '../views/Details.vue'

import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/prices',
    name: 'Prices',
    component: Prices
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/page1',
    name: 'Page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
