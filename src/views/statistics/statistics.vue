<template>
<div>
  <nav-bar class="nav-bar">
    <template #center>
      <div>统计</div>
    </template>
  </nav-bar>

  <form-statistics></form-statistics>

</div>
</template>

<script>
import navBar from 'components/common/navBar/navBar'
import formStatistics from './childComps/formStatistics'

export default {
  name: "statistics",
  components: {
    navBar,
    formStatistics
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: rgba(100, 100, 100, .3);
}
</style>
