<template>
  <div>
      Home Page
      <h2>{{title}}</h2>
      <span>当前计数：{{counter}}</span>
      <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            required: true
        }
    },
    // setup(props, context) {
    setup() {
       let counter = 100;
       const increment = () => {
           counter++
           console.log(counter)
       }
       return{
           title:"Hello World",
           counter
       }
    }
}
</script>

<style>
 
</style>