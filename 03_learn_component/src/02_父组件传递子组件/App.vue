<template>
  <message title="哈哈哈哈" content="我是哈哈哈哈"></message>  
  <message :title="title" :content="content"></message>
  <message v-bind="info"></message>
</template>

<script>

import Message from './ShowMessage.vue'

export default {
    components:{
        Message
    },
    data() {
        return {
            title: "呵呵呵呵呵",
            content: "我是呵呵呵呵呵",
            info:{
                title:"嘎嘎嘎嘎嘎",
                content:"我是嘎嘎嘎嘎嘎嘎"
            }

        }
    },
}
</script>

<style>

</style>