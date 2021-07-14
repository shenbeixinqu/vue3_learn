<template>
    <div>
        <input type="text" v-focus>
    </div>
</template>

<script>
export default {
    // 局部自定义组件
    directives:{
        focus:{
            mounted(el) {
                console.log("mounted")
                el.focus()
            }
        }
    }
}
</script>

<style>

</style>