let router = new VueRouter({
    routes:[
        {path:'/index',component:index},
        {path:'/list/:q/:n',redirect: '/b'/*component:item*/}
    ],
    mode: 'history',
})