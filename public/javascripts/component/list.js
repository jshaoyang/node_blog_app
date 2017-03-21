var list = '<ul v-show="listData.length" class="list_wrapper">' + 
                '<li class="list_item" v-for="(item , index) in listData">' +
                    '<router-link :to="\'/list/sss/\'+index" class="adfsads">列表页{{item.name}}</router-link>' +
                '</li>' +
            '</ul>';

var TabList = {
    template: list,
    computed:{
        listData:function () {
            return this.$store.state.tabList;
        }
    }
}
var item = {
    template:'<div class="content"><router-link to="/index?a=b&b=t">回首页{{ $route.params.q }}</router-link></div>',
    computed:{
        message:function () {
            return this.$store.state.message;
        }
    },
    beforeUpdate () {
        console.log(index)
    }
}