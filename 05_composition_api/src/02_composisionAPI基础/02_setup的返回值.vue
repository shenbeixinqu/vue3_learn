<template>
  <div>
      Home Page
      <h2>{{title}}</h2>
      <span>{{counter}}</span>
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