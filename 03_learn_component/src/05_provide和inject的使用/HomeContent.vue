<template>
  <div>
      homecontent: {{name}} - {{age}} - {{length.value}}
  </div>
</template>

<script>
export default {
    inject:["name", "age", "length"]
}
</script>

<style>

</style>