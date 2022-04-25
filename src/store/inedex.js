import { createStore } from 'vuex'
import contact from './contact'
import skill from './skill'

export default createStore({
  modules: {
    contact,
    skill
  }
})