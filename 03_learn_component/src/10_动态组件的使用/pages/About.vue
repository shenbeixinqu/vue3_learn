<template>
  <div>
      About组件
      <button @click="btnClick">{{counter}}</button>
  </div>
</template>

<script>
export default {
  name:"about",
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    btnClick(){
      this.counter++
    }
  },
}
</script>

<style>

</style>