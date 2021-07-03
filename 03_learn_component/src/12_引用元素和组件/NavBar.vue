<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
    data() {
        return {
            message:"我是Navbar"
        }
    },
    methods: {
        sayHello(){
            console.log("hello navbar")
        }
    },
}
</script>

<style>

</style>