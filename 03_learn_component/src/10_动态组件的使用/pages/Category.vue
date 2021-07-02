<template>
  <div>
      Category组件
      <button @click="btnClick">{{counter}}</button>

  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      counter: 0
    }
  },
  methods:{
    btnClick(){
      this.counter++
    }
  }
}
</script>

<style>

</style>