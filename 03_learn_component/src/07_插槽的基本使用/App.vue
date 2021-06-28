<template>
  <my-slot-cpn>
      <button>方式1</button>
  </my-slot-cpn>

  <my-slot-cpn>
      插槽放普通文本
  </my-slot-cpn>

  <my-slot-cpn>
      <my-button/>
  </my-slot-cpn>
</template>

<script>

import MySlotCpn from './MySlotCpn.vue'
import MyButton from './MyButton.vue'

export default {
    components:{
        MySlotCpn,
        MyButton
    }
}
</script>

<style>

</style>