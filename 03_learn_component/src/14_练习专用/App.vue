<template>
    <div>{{counter}}</div>
    <show-message
        @add="addOne"
        @sub="subOne"
        @addn="addN">

    </show-message>

    <my-slot-cpn>
      我是中间
    </my-slot-cpn>
    <my-slot-cpn>
      <my-button></my-button>
    </my-slot-cpn>
</template>

<script>

import showMessage from './ShowMessage'
import MyButton from './MyButton'
import MySlotCpn from './MySlotCpn.vue'

export default {
  components:{
    showMessage,
    MyButton,
    MySlotCpn
  },
  data() {
    return {
      counter:0
    }
  },
  methods: {
    addOne(){
      this.counter++
    },
    subOne(){
      this.counter--
    },
    addN(num){
      this.counter+=num
    }
  },
}
</script>

<style>

</style>