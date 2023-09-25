export default {
    namespaced:true,
    state: {
        stepActive: 0
    },
    getters: {
      getStepActive(state){
        return state.stepActive
      }
    },
    mutations: {
      SET_STEP_ACTIVE(state,stepActive){
        state.stepActive = stepActive;
      },
      RESET_DATA(state){
        state.stepActive = 0
      }
    },
    actions: {
      setStepActive(context,stepActive){
        context.commit('SET_STEP_ACTIVE',stepActive)
      },
      resetData(context){
        context.commit('RESET_DATA')
      }
    },
    modules: {
    }
}