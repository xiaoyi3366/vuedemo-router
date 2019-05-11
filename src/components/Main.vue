<template>
    <div>
        导航{{key}}
    </div>
</template>

<script>
    export default {
        data(){
            return{
                key:''
            }
        },
        mounted(){
            // this.key=this.$route.query.id;
            // console.log(this.$route.query.id)
            // console.log(this.$route);
            // const { query = {} } = this.$route;
            // const { id } = query;
            // this.key = id;
            // this.$root.eventHub.$on('click123', (data)=>{
            //     // 处理数据
            //     this.key=data
            // })
            this.updateContent(this.$route);
        },
        beforeRouteUpdate (to, from, next) {
            debugger
            this.updateContent(to);
            next();
        },
        methods: {
            updateContent (route) {
                const { query = {} } = route;
                const { id } = query;
                this.key = id;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>