<template>
  <tab-control :titles="titles"  @titleClick="titleClick"></tab-control>
  <h2>{{content[contentIndex]}}</h2>
</template>

<script>

import TabControl from './TabControl.vue'

export default {
    components:{
        TabControl
    },
    data() {
        return {
            titles:["衣服", "裤子", "鞋子"],
            content:["衣服页面","裤子页面","鞋子页面"],
            contentIndex: 0
        }
    },
    methods: {
        titleClick(index){
            this.contentIndex = index
        }
    },
}
</script>

<style>

</style>