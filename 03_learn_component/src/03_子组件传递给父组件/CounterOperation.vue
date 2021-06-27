<template>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>

  <input type="text" v-model.number="num">
  <button @click="incrementN">+n</button>
</template>

<script>
export default {
    data() {
        return {
            num:0
        }
    },
    emits:["add", "sub", "addN"],
    methods: {
        increment(){
            this.$emit("add")
        },
        decrement(){
            this.$emit("sub")
        },
        incrementN(){
            this.$emit("addN", this.num)
        }
    },
}
</script>

<style>

</style>