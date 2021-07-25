<template>
  <h2>
      <div>home2:{{sCounter}}</div>

  </h2>
</template>

<script>

import {useStore} from 'vuex'
import { computed } from 'vue'

export default {
    setup() {
        const store = useStore()
        const sCounter = computed(() => store.state.counter)
        return {
            sCounter
        }
    }
}
</script>

<style>

</style>