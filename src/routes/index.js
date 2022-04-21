import { createRouter, createWebHashHistory } from "vue-router"
import Home from './Home'
import Skill from './Skill'
import Protfolio from './Protfolio'
import Contact from './Contact'

export default createRouter ({
  history: createWebHashHistory(), // Hash 모드  /#/
  routes: [
    {
      path:'/',
      component: Home
    },
    {
      path:'/skill',
      component: Skill
    },
    {
      path:'/protfolio',
      component: Protfolio
    },
    {
      path:'/contact',
      component: Contact
    },
  ]
})