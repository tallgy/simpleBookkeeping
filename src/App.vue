<template>
<div>
  <router-view></router-view>
  <main-tab-bar></main-tab-bar>
</div>
</template>

<script>
import mainTabBar from 'components/content/mainTabBar/mainTabBar'

export default {
  components: {
    mainTabBar,
  }
}

</script>

<style lang="scss">
@import "assets/css/base.css";

router-view {
  height: 30vh;
}

</style>
