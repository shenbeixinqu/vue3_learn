<template>
 
</template>

<script>

import emitter from './utils/eventbus'

export default {
  created() {
    emitter.on("why", (info) => {
      console.log("why:", info)
    });
    emitter.on("*", (type, info) => {
      console.log("*:", type, info)
    })
  },
}
</script>

<style>

</style>