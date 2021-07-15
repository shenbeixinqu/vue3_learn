<template>
  <div>
      <router-link to='/home' active-class="why-active">Home</router-link>
      <router-link to='/about' active-class="why-active">About</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .router-link-active {
        color:red
    }

    .why-active {
        color: gray;
    }
</style>