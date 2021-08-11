<template>
  <h2>
      <div>{{age}}</div>
      <div>{{counter}}</div>
      <div>{{name}}</div>
      <div>{{height}}</div>
      <hr>
      <div>{{sCounter}}</div>
      <div>{{sName}}</div>

  </h2>
</template>

<script>

import {useState} from '../hooks/useState'

export default {
    setup() {
        const storeState = useState(["name","age","counter","height"])
        const storeState2 = useState({
            sCounter: state=>state.counter,
            sName: state=> state.name
        })
        return {
            ...storeState,
            ...storeState2
        }
    }
}
</script>

<style>

</style>