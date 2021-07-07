<template>
  <div>
      Home Page1
      <span>当前计数：{{state.counter}}</span>
      <button @click="increment">+1</button>
  </div>
</template>

<script>


import {reactive} from 'vue'

export default {
    props:{
        title:{
            type:String,
            required: true
        }
    },
    // setup(props, context) {
    setup() {
       const state = reactive({
           counter:100
       })
       const increment = () => {
           state.counter++
           console.log(state.counter)
       }
       return{
           state,
           increment
       }
    }
}
</script>

<style>
 
</style>