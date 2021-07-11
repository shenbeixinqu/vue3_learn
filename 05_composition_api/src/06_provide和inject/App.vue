<template>
  <div>
      <home/>
      <h2>App age: {{age}}</h2>
      <button @click="increment">App中的+1</button>
  </div>
</template>

<script>

import {provide, ref, readonly} from 'vue'
import Home from './Home.vue'

export default {
    components:{
        Home
    },
    setup() {
        const name = ref('james')
        const age = ref(36)

        provide("name", readonly(name))
        provide("age", readonly(age))

        const increment = () => age.value++

        return{
            name,
            age,
            increment
        }
    }
}
</script>

<style>

</style>