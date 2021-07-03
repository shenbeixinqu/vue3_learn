<template>
  <h2 ref="title">哈哈哈哈</h2>
  <nav-bar ref="navBar"></nav-bar>
  <button @click="btnClick">获取元素</button>

</template>

<script>

import NavBar from './NavBar.vue'

export default {  
    components:{
        NavBar
    },  
    methods: {
        btnClick(){
            console.log(this.$refs.title)
            // this.$refs.navBar 获取组件
            console.log(this.$refs.navBar.message)
            this.$refs.navBar.sayHello()
        }
    },
}
</script>

<style>

</style>