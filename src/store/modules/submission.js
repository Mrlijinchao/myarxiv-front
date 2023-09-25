export default {
    namespaced:true,
    state: {
        submissionList: []
    },
    getters: {
      getSubmissionList(state){
        return state.submissionList
      }
    },
    mutations: {
      SET_SUBMISSION_LIST(state,submissionList){
        state.submissionList = submissionList;
      },
      RESET_DATA(state){
        state.submissionList = []
      }
    },
    actions: {
      setSubmissionList(context,submissionList){
        context.commit('SET_SUBMISSION_LIST',submissionList)
      },
      resetData(context){
        context.commit('RESET_DATA')
      }
    },
    modules: {
    }
  }