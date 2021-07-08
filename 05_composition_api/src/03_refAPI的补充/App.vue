<template>
  <div>
      <h2>{{name}}-{{age}}</h2>
      <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script>

import {reactive,toRefs,toRef} from 'vue'

export default {
    setup() {
        const info = reactive({name:"why", age:19})
        let {name} = info
        let age = toRef(info,"age")
        const changeAge = () => {
            age.value++
        }
        return{
            name,
            age,
            changeAge
        }
    }
}
</script>

<style>

</style>