new Vue({
    el:'#app',
    template:'<section id="app"><TabList/><transition><router-view></router-view></transition></section>',
    store:vuex,
    router:router,
    created:function () {
        this.$http.post('/',{a:1}).then(function (data) {
            this.$store.commit('tabList',{data:data.body});
        },function (err) {
            console.log(err);
        })
    },
    components:{
        TabList:TabList
    }
})
