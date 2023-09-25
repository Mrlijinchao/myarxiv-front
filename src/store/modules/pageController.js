export default {
    namespaced:true,
    state: {
      pageStatusCode: 0,
      pageUrl: '',
      pageHeaderCode: 0
    },
    getters: {
      getCurrentPageStatusCode(state){
        return state.pageStatusCode;
      },
      getCurrentPageUrl(state){
        return state.pageUrl;
      },
      getPageHeaderCode(state){
        return state.pageHeaderCode;
      }
    },
    mutations: {
      SET_PAGE_CODE(state,code){
        state.pageStatusCode = code;
      },
      SET_PAGE_URL(state,url){
        state.pageUrl = url;
      },
      SET_PAGE_HEADER_CODE(state,code){
        state.pageHeaderCode = code;
      },
      RESET_DATA(state){
        state.pageStatusCode = 0
        state.pageUrl = ''
        state.pageHeaderCode = 0
      }
    },
    actions: {
      setPageCode(context,code){
        context.commit('SET_PAGE_CODE',code);
      },
      setPageUrl(context,url){
        context.commit('SET_PAGE_URL',url);
      },
      setPageHeaderCode(context,code){
        context.commit('SET_PAGE_HEADER_CODE',code)
      },
      resetData(context){
        context.commit('RESET_DATA')
      }
    },
    modules: {
    }
  }
  