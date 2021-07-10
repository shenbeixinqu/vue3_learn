<template>
  <div>
      <h2>{{name}}</h2>
      <button @click="changeData">修改</button>
  </div>
</template>

<script>

import {ref, reactive,watchEffect, watch} from 'vue'

export default {
    setup() {       
       const info = reactive({name:"why"})
       const name = ref("james")
        //1.帧听watch时，传入一个getter函数
        // watch(() => info.name,(newValue, oldValue) => {
        //     console.log(newValue,oldValue)
        // })

        // 2.传入一个可响应式的对象
        watch(name,(newValue, oldValue) => {
            console.log(newValue,oldValue)
        })

       const changeData = () => {
        //    info.name = "kobe"
        name.value = 'kobe'
       }
       return{
           info,
           changeData,
           name
       }
    }
}
</script>

<style>

</style>