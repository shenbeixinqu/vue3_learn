<template>
  <div>
      <h2>基础数：{{counter}}</h2>
      <h2>加倍：  {{doubleCounter}}</h2>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
  </div>
</template>

<script>

import userCounter from './hooks/useCounter'

export default {
    setup() {
        
        const {counter,doubleCounter,increment,decrement} = userCounter()
        return{
            counter,
            doubleCounter,
            increment,
            decrement
        }
    }
}
</script>

<style>

</style>