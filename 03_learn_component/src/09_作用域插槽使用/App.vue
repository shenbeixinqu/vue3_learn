<template>
  <child-cpn :titles="titles">
      <template v-slot="slotProps">
         <button>{{slotProps.item}}</button>
      </template>
  </child-cpn>
</template>

<script>

import ChildCpn from './ChildCpn.vue'

export default {
    components:{
        ChildCpn
    },
    data() {
        return {
            titles:["cba","abc","nba"]
        }
    },
}
</script>

<style>

</style>