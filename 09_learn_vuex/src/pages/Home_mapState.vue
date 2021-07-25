<template>
  <div>
      <h2>HOME:{{$store.state.counter}}</h2>
      <h2>{{sCounter}}</h2>
      <h2>{{sName}}</h2>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {    
    // ...mapState(["counter","name","age","height"])
    computed:{
        ...mapState({
            sCounter: state => state.counter,
            sName: state => state.name
        })
    }
}
</script>

<style>

</style>