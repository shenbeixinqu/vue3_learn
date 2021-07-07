<template>
  <div>
      <button @click="updateState">修改状态</button>
  </div>
</template>

<script>


import {reactive,ref,readonly} from 'vue'

export default {
    props:{
        title:{
            type:String,
            required: true
        }
    },
    // setup(props, context) {
    setup() {
    // 普通对象
    const info1 = {name:"why"}
    const readonlyInfo1 = readonly(info1) 

    const info2 =  reactive({
        name: "why"
    })
    const readonlyInfo2 = readonly(info2)

    const updateState = () => {
          readonlyInfo1.info1 = "codewhy"
       }
       return{
          updateState
       }
    }
}
</script>

<style>
 
</style>