<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template #img><img class="simple" src="~assets/img/tabBar/home.png" alt=""></template>
      <template #imgActive><img src="~assets/img/tabBar/homeActive.png" alt=""></template>
      <template #text><div>首页</div></template>
    </tab-bar-item>

    <tab-bar-item path="/bookkeeping">
      <template #img><img class="simple" src="~assets/img/tabBar/bookkeeping.png" alt=""></template>
      <template #imgActive><img src="~assets/img/tabBar/bookkeepingActive.png" alt=""></template>
      <template #text><div>记账</div></template>
    </tab-bar-item>

    <tab-bar-item path="/statistics">
      <template #img><img class="simple" src="~assets/img/tabBar/statistics.png" alt=""></template>
      <template #imgActive><img src="~assets/img/tabBar/statisticsActive.png" alt=""></template>
      <template #text><div>统计</div></template>
    </tab-bar-item>

    <tab-bar-item path="/profile">
      <template #img><img class="simple" src="~assets/img/tabBar/profile.png" alt=""></template>
      <template #imgActive><img src="~assets/img/tabBar/profileActive.png" alt=""></template>
      <template #text><div>我的</div></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBar from 'components/common/tabBar/tabBar'
import tabBarItem from 'components/common/tabBar/tabBarItem'

export default {
  name: "mainTabBar",
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style scoped>

</style>