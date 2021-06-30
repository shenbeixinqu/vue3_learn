<template>
  <div @click="pageClick">
      Home组件 {{name}} - {{age}}
  </div>
</template>

<script>
export default {
    props:["name", "age"],
    emits:["pageClick"],
    methods: {
        pageClick(){
            this.$emit("pageClick")
        }
    },
}
</script>

<style>

</style>