<template>
<div>
    <button v-for="(item, index) in tabs" :key="item"
                        @click="itemClick(item)"
                        :class="{active:CurrentItem === item}">
      {{ item }}
    </button>
</div>
    <keep-alive exclude="category">
          <component :is="CurrentItem" 
                      name="kobe"
                      age="18"
                      @pageClick="pageClick">

          </component>
    </keep-alive>
</template>

<script>

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Category from './pages/Category.vue'


export default {
    components:{
        Home,
        About,
        Category
    },
    data() {
        return {
            tabs:["home", "about", "category"],
            CurrentItem: "home"
        }
    },
    methods: {
        itemClick(item){
            this.CurrentItem = item
        },
        pageClick(){
            console.log("page发生了点击")
        }
    },
}
</script>

<style>
    .active {
        color: red;
    }
</style>