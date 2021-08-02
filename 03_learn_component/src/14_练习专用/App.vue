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

    <nav-bar>
        <template #left>我是左边</template>
        <template #center>
          <button>我是中间的内容</button>
        </template>
        <template #right>
            我是右边的
        </template>
    </nav-bar>
</template>

<script>

import showMessage from './ShowMessage'
import MyButton from './MyButton'
import MySlotCpn from './MySlotCpn.vue'
import NavBar from './NavBar.vue'

export default {
  components:{
    showMessage,
    MyButton,
    MySlotCpn,
    NavBar
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