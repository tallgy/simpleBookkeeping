<template>
<div class="nav-bar">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
  name: "navBar",
  props: {

  }
}
</script>

<style scoped>
.nav-bar {
  display: flex;

  text-align: center;

  height: 50px;
  line-height: 50px;

  box-shadow: 0px 1px 1px rgba(100, 100, 100, .1);

  color: white;
  font-size: 18px;
}

.nav-bar .left,
.nav-bar .right {
  width: 60px;
}

.nav-bar .center {
  flex: 1;
}
</style>