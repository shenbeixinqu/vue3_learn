<template>
  <div>
      <h2>当前计数：{{$store.state.counter}}</h2>
      <hr>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
  </div>
</template>


<script>

import { mapMutations } from 'vuex'

export default {
  setup() {
      const storeMutations = mapMutations(["increment","decrement"])
      return {
        ...storeMutations
      }
  }
}
</script>

<style>

</style>