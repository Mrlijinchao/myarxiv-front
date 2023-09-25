export default {
    namespaced:true,
    state: {
        paperList: []
    },
    getters: {
      getPaperList(state){
        return state.paperList
      }
    },
    mutations: {
      SET_PAPER_LIST(state,paperList){
        state.paperList = paperList;
      },
      RESET_DATA(state){
        state.paperList = []
      }
    },
    actions: {
      setPaperList(context,paperList){
        context.commit('SET_PAPER_LIST',paperList)
      },
      resetData(context){
        context.commit('RESET_DATA')
      }
    },
    modules: {
    }
}