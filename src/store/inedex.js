import { createStore } from 'vuex'
import contact from './contact'
import skill from './skill'
import protfolio from './protfolio'

export default createStore({
  modules: {
    contact,
    skill,
    protfolio
  }
})