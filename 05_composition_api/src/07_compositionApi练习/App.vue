<template>
  <div>
      <h2>基础数：{{counter}}</h2>
      <h2>加倍：  {{doubleCounter}}</h2>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
      <h2>{{data}}</h2>
      <p class="content"></p>
      <div class="scoll">
          <div class="scollX">scollX:{{scollX}}</div>
          <div class="scollY">scollY:{{scollY}}</div>
      </div>
  </div>
</template>

<script>

import {
    useLocalStorage,
    useTitle,
    userCounter,
    useScollPosition
} from './hooks'

export default {
    setup() {
        
        const {counter,doubleCounter,increment,decrement} = userCounter()
        const titleRef = useTitle("coderwhy")
        setTimeout(() =>{
            titleRef.value = 'kobe'
        },3000)

        const {scollX,scollY} = useScollPosition()
        const data = useLocalStorage("info",{name:"kobe", age:18})

        return{
            counter,
            doubleCounter,
            increment,
            decrement,

            scollX,
            scollY,

            data
        }
    }
}
</script>

<style>
    .content{
        width: 3000px;
        height: 5000px;
    }

    .scoll {
        position: fixed;
        right: 30px;
        bottom: 30px
    }
</style>