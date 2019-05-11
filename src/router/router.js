import Vue from 'vue'
import VueRouter from 'vue-router'
// export function setStorage
import utils, { setStorage, getStorage, getMaxVisitedNavigation } from '../utils' // 用的时候 setStorage()

// export function setStorage
// import { setStorage as ds } from '../utils'  // 起别名 用的时候 ds()

// export default function setStorage
// import xxx from '../utils'; // 任意起别名 用的时候 xxx()

// function setStorge () {}
// export default { setStorage }
// import xxx from 'utils'; // 任意起别名 用的时候 xxx.setStorage();

// export 和 export default 可以共存，但是 export default 一个文件只能有一个。
// export default 可以看成一个模块，他不一定是一个对象，可以是个函数之类的，后面跟什么，引过来就是什么
// 比如 export default { name: 'utils' } 或者 export default function abc () {}
// 除export default 之外的所有export可以看作一个整体的模块，这个模块可以看成一个对象，用的时候，import {} from '../utils'
// 这个 花括号 相当于这个模块的范围，用哪个属性，就直接写在花括号里头，类似于结构赋值，但是不是解构赋值
// 共存的时候可以这么引：import utils, { setStorage, getStorage } from '../utils'
Vue.use(VueRouter)

import Main from '../components/Main.vue'
const routes = [
    {
        path:'/daohang1',
        component:Main
    },
    {
        path:'/daohang2',
        component:Main
    },
    {
        path:'/daohang3',
        component:Main
    },
    {path: '*',redirect:'/daohang1'}
]
const router = new VueRouter({
    routes,
})

router.beforeEach((to, from, next) => {
    const { query = {} } = to;
    const { id = 1 } = query;
    let navigationVisitData = getStorage('navigationVisitData') || {};
    const currentNavVisitData = navigationVisitData[id] || 0;
    navigationVisitData[id] = currentNavVisitData + 1;
    setStorage('navigationVisitData', navigationVisitData);

    const maxData = getMaxVisitedNavigation(navigationVisitData) || {};

    if (maxData.maxValue >= 3) {
        eventHub.$emit('navigationDataUpdate', maxData.maxKey);
    }

    next();
});
export default router