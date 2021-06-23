<template id="">
    <h2>我是VUE渲染出来的</h2>
    <h2>{{title}}</h2>
    <hello-world></hello-world> 
</template>

<script>
import HelloWorld from './HelloWorld.vue'

export default {
    components:{
        HelloWorld
    },
    data() {
        return {
            title:"hello world",
            message: "哈哈哈"
        }
    },
}
</script>

<style>
    h2 {
        color: red
    }
</style>