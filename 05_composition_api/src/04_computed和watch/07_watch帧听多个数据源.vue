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
       
        watch([()=>({...info}),name],([newInfo,newName], [oldInfo,oldName]) => {
            console.log(newInfo,newName,oldInfo,oldName)
        })

       const changeData = () => {
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