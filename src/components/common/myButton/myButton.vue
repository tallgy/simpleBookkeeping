<template>
<div>
  <span class="button-box"><slot></slot></span>
</div>
</template>

<script>
export default {
  name: "button",
  props: {

  }
}
</script>

<style scoped>
.button-box {
  display: inline-block;
  text-align: center;
  padding: 10px 30px;
  color: white;

  border-radius: 4px;

  background-color: #e13131;

  transition: all .5s;
}
.button-box:active {
  background-color: #c96868;
  color: white;
  box-shadow: 0px 0px 5px #de7f7f;
}
</style>
