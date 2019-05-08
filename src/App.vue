<template>
  <div id="app">
    <div class="container">
      <div class="sidebar">
        <Sidebar/>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'app',
  data(){
    return{

    }
  },
  components:{
    Sidebar
  }
}
</script>

<style lang="scss">
.container{
  display: flex;
  flex-direction: row;
}
.sidebar{
  width:200px;
  border-right:1px solid #ddd;
  min-height: 400px;
}
.main{
  flex:1;
}
</style>
