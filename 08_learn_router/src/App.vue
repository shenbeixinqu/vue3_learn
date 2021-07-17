<template>
  <div>
      <router-link to='/home' active-class="why-active">首页</router-link>
      <router-link to='/about' active-class="why-active">关于</router-link>
      <router-link to='/user/kobe'>用户</router-link>
      <router-view></router-view>
      <button @click="jupmToAbout">关于</button>
  </div>
</template>

<script>

import {useRouter} from 'vue-router'

export default {
    setup() {
        const route = useRouter()
        const jupmToAbout = () => {
            route.push({
                path:"/about",
                query:{
                    age:18,
                    name:"why"
                }
            })
        }

        return{
           jupmToAbout 
        }
    }
}
</script>

<style>
    .router-link-active {
        color:red
    }

    .why-active {
        color: gray;
    }
</style>