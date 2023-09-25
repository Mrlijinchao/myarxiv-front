import { createStore } from 'vuex'
import pageController from './modules/pageController'
import user from '@/store/modules/user'
import submission from '@/store/modules/submission'
import paper from './modules/paper'
import stepController from './modules/stepController'

export default createStore({
  actions: {
    resetAllData(){
      this.dispatch('pageController/resetData')
      this.dispatch('user/resetData')
      this.dispatch('submission/resetData')
      this.dispatch('paper/resetData')
      this.dispatch('stepController/resetData')
    }
  },
  modules: {
    pageController,
    user,
    submission,
    paper,
    stepController
  }
})
