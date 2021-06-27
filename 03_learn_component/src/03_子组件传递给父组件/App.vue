<template>
    <div>
        计数器：{{counter}}
    </div>
    <counter-operation  @add="addOne" 
                        @sub="subOne"
                        @addN="addNNum">

    </counter-operation>
</template>

<script>

import CounterOperation from './CounterOperation.vue' 

export default {
    components:{
        CounterOperation
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
        addNNum(num){
            this.counter += num
        }

    },
}
</script>

<style>

</style>