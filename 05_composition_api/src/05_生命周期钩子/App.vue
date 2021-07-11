<template>
  <div>
      <button @click="increment">{{counter}}</button>
  </div>
</template>

<script>

import {onMounted, onUpdated, onUnmounted, ref} from 'vue'

export default {
    setup() {
        const counter = ref(0)
        const increment = () => counter.value++

        onMounted(() => {
            console.log("App mounted")
        })
        onUpdated(() => {
            console.log("App updated")  
        })
        return {
            counter,
            increment
        }
    }
}
</script>

<style>

</style>