<template>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="addN">+10</button>
</template>

<script>
export default {
    methods: {
        increment(){
            this.$emit("add")
        },
        decrement(){
            this.$emit("sub")
        },
        addN(){
            this.$emit("addn",10)
        }
    },
}
</script>

<style>

</style>