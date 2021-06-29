<template>
  <div>
      <template v-for="item in titles" :key="item">
          <slot :item="item"></slot>
      </template>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>

</style>