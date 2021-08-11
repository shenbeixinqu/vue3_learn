<template>
  <h2>
      <div>home2:{{sCounter}}</div>
      <div>{{age}}</div>
      <div>{{counter}}</div>
      <div>{{name}}</div>
      <div>{{height}}</div>

  </h2>
</template>

<script>

import {useStore, mapState} from 'vuex'
import { computed } from 'vue'

export default {
    setup() {
        const store = useStore()
        const sCounter = computed(() => store.state.counter)
        const storeStateFns = mapState(["counter","name","age","height"])
        
        const storeState = {}
        Object.keys(storeStateFns).forEach(fnKey => {
            const fn = storeStateFns[fnKey].bind({$store:store})
            storeState[fnKey] = computed(fn)
        })
        return {
            sCounter,
            ...storeState
        }
    }
}
</script>

<style>

</style>