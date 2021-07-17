import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'

const routes = [
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        name:"home",
        component:() => import (/*webpackChunkName:"Home-chunk"*/'../pages/Home.vue'),
        children:[
            {
                path:"",
                redirect:"/home/message"
            },
            {
                path:"message",
                component:() => import ('../pages/HomeMessage.vue')
            },
            {
                path:"shops",
                component: () => import ('../pages/HomeShop.vue')
            }
        ]
    },
    {
        path:"/about",
        name:"about",
        component:() => import (/*webpackChunkName:"About-chunk"*/'../pages/About.vue')
    },
    {
        path:"/user/:username",
        component:() => import('../pages/User.vue')
    },
    {
        path:"/:pathMatch(.*)",
        component:() => import('../pages/PageNot.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router