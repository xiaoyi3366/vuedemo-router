<template>
    <div>
        <ul>
          <li v-for="(item,index) in list" :key="index" :class="item.className" @click="changeBg(index)">
            <router-link :to="'/'+item.name+(index+1)">{{item.content}}{{index+1}}</router-link>
          </li>
          <li @click="addList()" class="bg">添加</li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        data () {
            return {
                list:[
                    {
                        name:'daohang',
                        content:'导航',
                        className:'active'
                    },
                    {
                        name:'daohang',
                        content:'导航',
                        className:'bg'
                    },
                    {
                        name:'daohang',
                        content:'导航',
                        className:'bg'
                    }
                ]
            }
        },
        methods:{
            addList(){
                this.list.push({
                    name:'daohang',
                    content:'导航',
                    className:'bg'
                })
            },
            changeBg(index){
                this.list.map(function(item){
                    return item.className='bg'
                })
                const newClass={
                        name:'daohang',
                        content:'导航',
                        className:'active'
                    }
                this.list.splice(index,1,newClass);
                // Vue.set(this.list[index],'className','active')
                const currentIndex = index+1;
                this.$root.eventHub.$emit('click123', currentIndex)
                // this.$router.push({path:'problem'});

            }
        }
    }
</script>

<style lang="scss" scoped>
.bg{
    background: #ddd;
}
.active{
    background: #fff;
}
</style>