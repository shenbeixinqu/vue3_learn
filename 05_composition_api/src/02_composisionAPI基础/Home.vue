<template>
  
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            required: true
        }
    },
    // setup(props, context) {
    setup(props, {attrs}) {

        console.log(props.title)
        console.log(attrs.class, attrs.id)
    }
}
</script>

<style>
 
</style>