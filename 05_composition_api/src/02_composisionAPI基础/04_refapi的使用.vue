<template>
  <div>
      Home Page1
      <h2>当前计数：{{counter}}</h2>
      <button @click="increment">+1</button>
  </div>
</template>

<script>


import {ref} from 'vue'

export default {
    props:{
        title:{
            type:String,
            required: true
        }
    },
    // setup(props, context) {
    setup() {
       let counter = ref(100)
       const increment = () => {
           counter.value++
           console.log(counter.value)
       }
       return{
           counter,
           increment
       }
    }
}
</script>

<style>
 
</style>