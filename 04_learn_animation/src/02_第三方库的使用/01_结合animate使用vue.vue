<template>
  <div>
      <button @click="isShow=!isShow">显示/隐藏</button>
      <transition enter-active-class="animate__animated animate__fadeInDown"
                    leave-active-class="animate__animated animate__fadeInLeft">
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

    /* .why-enter-active{
        animation: bounceInUp 1s ease-in;
    }

    .why-leave-active{
        animation: bounceInUp 1s ease-in reverse;

    } */
</style>