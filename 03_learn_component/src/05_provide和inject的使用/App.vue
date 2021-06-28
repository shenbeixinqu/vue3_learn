<template>
    <home></home>
    <button @click="addName">+name</button>
</template>

<script>

import Home from './Home.vue'
import { computed } from 'vue'

export default {    
    components:{
        Home
    },
    provide(){
        return{
            name: "why",
            age: 19,
            length: computed(() => this.names.length)
        }
    },
    data() {
        return {
            names:["abc","baa","nba"]
        }
    },
    methods: {
        addName(){
            this.names.push("why")
        }
    },
}
</script>

<style>

</style>