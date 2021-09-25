<template>
<div class="tab-bar-item" @click="itemClick">
  <div v-if="isShow"><slot name="img"></slot></div>
  <div v-else><slot name="imgActive"></slot></div>
  <div :style="isActive"><slot name="text"></slot></div>
</div>
</template>

<script>
export default {
  name: "tabBarItem",
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isShow() {
      return this.$route.path.indexOf(this.path) === -1;
    },
    isActive() {
      return this.isShow ? {} : {color: this.activeColor};
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;

  text-align: center;
}

.tab-bar-item img {
  width: 25px;
  height: 25px;

  border-radius: 4px;
}
</style>