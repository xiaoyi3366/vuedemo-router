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
            this.$root.eventHub.$on('click123', (data)=>{
                // 处理数据
                this.key=data
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>