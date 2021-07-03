<template>
  <div>
      <!-- <input type="text" v-model="message">
      <input type="text" v-bind="message" @input=" message = $event.target.value"> -->


      <!-- 组件上使用v-model -->
      <hy-input v-model="message"></hy-input>
      <!-- <hy-input :modelValue="message" @update:model-value="message= $event"></hy-input> -->
      <h2> {{ message }} </h2>
  </div>
</template>

<script>

import HyInput from './HyInput.vue'

export default {
    components:{
        HyInput
    },
    data() {
        return {
            message:"Hello World"
        }
    },
}
</script>

<style>

</style>