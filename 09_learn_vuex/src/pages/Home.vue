<template>
  <div>
      <h2>当前计数：{{$store.state.counter}}</h2>
      <hr>
      <button @click="increment">+1</button>
      <button @click="decrement">发放</button>
  </div>
</template>


<script>

export default {
  methods: {
    increment(){
      this.$store.dispatch("incrementAction")
    },
    decrement(){
      this.$store.dispatch("getHomeMultidata")
    }
  },
  setup() {
     
  }
}
</script>

<style>

</style>