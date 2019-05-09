import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Main from '../components/Main.vue'
const routes = [
    // {
    //     path:'/daohang1',
    //     component:Main
    // },
    // {
    //     path:'/daohang2',
    //     component:Main
    // },
    // {
    //     path:'/daohang3',
    //     component:Main
    // },
    // {path: '*',redirect:'/daohang1'}
    {path: '*',component:Main}
]
const router = new VueRouter({
    routes
})
export default router