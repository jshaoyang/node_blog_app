var index = {
    template:'<div class="content">大神发的所发生的</div>',
    computed:{
        message:function () {
            return this.$store.state.message;
        }
    },
    beforeRouteEnter:function (to, from, next) {
        console.log(router,next())
    }
} 