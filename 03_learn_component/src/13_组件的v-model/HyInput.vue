<template>
    <div>
        <button @click="btnClick">hyinput按钮</button>
        <input type="text" v-model="subInput">
    </div>
</template>

<script>
export default {
    props:{
        modelValue:{
            type:String
        }
    },
    emits:["update:modelValue"],
    computed:{
        subInput:{
            set(subInput){
                 this.$emit("update:modelValue",subInput)
            },
            get(){
                return this.modelValue
            }
        }
    },
    methods:{
        btnClick(){
            this.$emit("update:modelValue","123321")
        }
    }
}
</script>

<style>

</style>