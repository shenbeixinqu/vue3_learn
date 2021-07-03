<template>
  <home/>
  <suspense>
      <template #deault>
            <category/>
      </template>
  </suspense>    
</template>

<script>

import {defineAsyncComponent} from 'vue'
import Home from './Home.vue'
const Category = defineAsyncComponent(() => import("./Category.vue"))

export default {
    components:{
        Home,
        Category
    }
}
</script>

<style>

</style>