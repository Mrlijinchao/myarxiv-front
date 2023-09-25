export default {
    namespaced:true,
    state: {
      userToken: '',
        user: { 
            userId: 0,
            userName: '',
            userEmail: '',
            userAccount: '',
            userCountry: '',
            userOrganization: '',
            careerStatus: '',
            userCreateTime: '',
            subject: '',
            defaultCategory: '',
            userHomePage: '',
            userStatus: 0
        },
        refreshFlag: 0
    },
    getters: {
      getUserInfo(state){
        return state.user
      },
      getUserToken(state){
        return state.userToken
      }
    },
    mutations: {
      SET_USER_INFO(state,user){
        state.user = user;
      },
      SET_USER_EMAIL(state,email){
        state.user.userEmail = email
      },
      CHANGE_REFRESH(state,flag){
        state.refreshFlag = flag;
      },
      SET_USER_TOKEN(state,token){
        state.userToken = token
      },
      RESET_DATA(state){
        state.user = { 
          userId: 0,
          userName: '',
          userEmail: '',
          userAccount: '',
          userCountry: '',
          userOrganization: '',
          careerStatus: '',
          userCreateTime: '',
          subject: '',
          defaultCategory: '',
          userHomePage: '',
          userStatus: 0
      }
      state.refreshFlag = 0
      }
    },
    actions: {
      setUserInfo(context,user){
        context.commit('SET_USER_INFO',user)
      },
      setUserEmail(context,email){
        context.commit('SET_USER_EMAIL',email)
      },
      changeRefresh(context,flag){
        context.commit('CHANGE_REFRESH',flag)
      },
      setUserToken(context,token){
        context.commit('SET_USER_TOKEN',token)
      },
      resetData(context){
        context.commit('RESET_DATA')
      }
    },
    modules: {
    }
  }
  