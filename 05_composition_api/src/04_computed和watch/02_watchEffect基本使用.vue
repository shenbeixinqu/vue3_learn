<template>
  <div>
    {{name}}-{{age}}
    <button @click="changeAge">修改年龄</button>
    <button @click="changeName">修改姓名</button>
  </div>
</template>

<script>

import {ref, watchEffect} from 'vue'

export default {
  setup() {
    const name = ref('kobe')
    const age = ref(18)
    const changeAge = () => age.value++
    const changeName = () => name.value = 'james'

    watchEffect(() => {
      console.log("age",age.value)
      }
    )
    return{
      name,
      age,
      changeAge,
      changeName
    }
  }
}
</script>

<style>

</style> 