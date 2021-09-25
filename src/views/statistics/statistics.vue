<template>
  <nav-bar class="nav-bar">
    <template #center>
      <div>统计</div>
    </template>
  </nav-bar>
</template>

<script>
import navBar from 'components/common/navBar/navBar'

export default {
  name: "statistics",
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