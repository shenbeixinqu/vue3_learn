<template>
  <div>
      <h2>Home</h2>
      <router-link to="/home/message">消息</router-link>
      <router-link to="/home/shops">商品</router-link>
      <router-link to="/category">分类</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>