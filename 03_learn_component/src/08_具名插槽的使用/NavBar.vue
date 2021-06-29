<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.nav-bar {
  display: flex;
}

.left,
.right,
.center {
  height: 44px;
}

.left,
.right,
.addition {
  width: 80px;
  background-color: red;
}

.center {
  flex: 1;
  background-color: blue;
}
</style>