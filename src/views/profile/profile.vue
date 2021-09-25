<template>
  <nav-bar class="nav-bar">
    <template #center>
      <div>我的</div>
    </template>
  </nav-bar>
</template>

<script>
import navBar from 'components/common/navBar/navBar'

export default {
  name: "profile",
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