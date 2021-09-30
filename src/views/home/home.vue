<template>
<div class="home">
  <nav-bar class="nav-bar">
    <template #center>
      <div>主页</div>
    </template>
  </nav-bar>

  <div class="title">
    首页
  </div>

</div>
</template>

<script>
import navBar from 'components/common/navBar/navBar'

export default {
  name: "home",
  data() {
    return {
      imgSrc: [],
    }
  },
  methods: {

  },
  mounted() {

  },
  components: {
    navBar
  }
}
</script>

<style scoped lang="scss">
$back-color: rgba(2, 34, 66, 0.91);
$title-color: rgba(255, 0, 0, 0.98);

.home {
  background-color: $back-color;
  height: 100vh;

  .nav-bar {
    background-color: rgba(100, 100, 100, .3);
  }

  .title {
    color: $title-color;
  }

}
</style>
