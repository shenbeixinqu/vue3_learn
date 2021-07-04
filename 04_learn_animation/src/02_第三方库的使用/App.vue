<template>
  <div>
      <div><button @click="isShow=!isShow">显示/隐藏</button></div>
      <transition>
        <h2 class="title" v-if="isShow">Hello World</h2>
      </transition>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style>

</style>