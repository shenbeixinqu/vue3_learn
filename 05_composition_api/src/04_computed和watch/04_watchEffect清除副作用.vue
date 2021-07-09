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

    const stop = watchEffect((onInvalidate) => {
      const timer = setTimeout(() => {
        console.log("网络请求成功！")
      }, 2000)

    onInvalidate(() => {
        clearTimeout(timer)
        console.log("onInvalidate")
     })
    })

    const changeName = () => name.value = 'james'
    const changeAge = () => {
      age.value++
      if (age.value > 22){
        stop()
      }
    }



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