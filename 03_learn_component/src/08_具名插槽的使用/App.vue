<template>
  <nav-bar>
      <template #left>
         <button>我是左边的</button>
      </template>
      <template v-slot:center>
          我是中间的内容
      </template>
      <template v-slot:right>
          <i>我是右边的</i>
      </template>
  </nav-bar>
</template>

<script>

import NavBar from './NavBar.vue'

export default {
    components:{
        NavBar
    }
}
</script>

<style>

</style>