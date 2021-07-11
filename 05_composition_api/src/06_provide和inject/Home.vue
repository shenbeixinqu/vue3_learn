<template>
  <div>
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
      <h2>{{sex}}</h2>
      <button @click="homeIncrement">home+1</button>
  </div>
</template>

<script>

import {inject} from 'vue'

export default {
    setup() {
        const name = inject("name")
        const age = inject("age")
        const sex = inject("sex","fale")

        const homeIncrement = () => age.value++

        return{
            name,
            age,
            sex,
            homeIncrement
        }
    }
}
</script>

<style>

</style>