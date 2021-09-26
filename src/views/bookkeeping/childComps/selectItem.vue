<template>
<div class="item" @click="itemClick">
  <div class="img"><slot name="item-icon"></slot></div>
  <div><slot name="item-text"></slot></div>
</div>
</template>

<script>
export default {
  name: "selectItem",
  props: {
    item: {
      type: String,
      default: ''
    }
  },
  methods: {
    itemClick() {
      this.$router.push({path: '/bookkeeping/addBill', query: { name: this.item}});
    }
  }
}
</script>

<style>
.item {
  width: 20%;
  text-align: center;

  padding: 10px;
}

.img img {
  width: 100%;
  height: 100%;
}
</style>