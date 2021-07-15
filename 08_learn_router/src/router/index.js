import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const routes = [
    {path:"/", redirect:"/home"},
    {path:"/home", component:Home},
    {path:"/about", component:About},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router