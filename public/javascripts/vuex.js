let vuex = new Vuex.Store({
    state:{
        tabList:[]
    },
    mutations: {
        tabList (state,arr) {
            state.tabList = arr.data
        }
    }
})