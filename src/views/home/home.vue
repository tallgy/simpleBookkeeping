<template>
  <nav-bar class="nav-bar">
    <template #center>
      <div>主页</div>
    </template>
  </nav-bar>
</template>

<script>
import navBar from 'components/common/navBar/navBar'

export default {
  name: "home",
  components: {
    navBar
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: rgba(100, 100, 100, .3);
}
</style>