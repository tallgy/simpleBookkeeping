<template>
<dvi>
  <nav-bar class="nav-bar">
    <template #center><div>记账</div></template>
  </nav-bar>

  <div>
    <select-item v-for="item in itemSrc">
      <template #item-icon><img :src="item.src" alt=""></template>
      <template #item-text><div>{{item.name}}</div></template>
    </select-item>
  </div>

</dvi>
</template>

<script>
import navBar from 'components/common/navBar/navBar'
import selectItem from './childComps/selectItem'

export default {
  name: "bookkeeping",
  data() {
    return {
      itemSrc: []
    };
  },
  created: {
    // getItem();
  },
  methods: {
    getItem() {
      this.itemSrc = [
        {
          src: '~assets/img/tabBar/bookkeeping.png',
          name: '图片'
        },
        {
          src: '~assets/img/tabBar/home.png',
          name: 'a'
        },
        {
          src: '~assets/img/tabBar/profile.png',
          name: 'b'
        }
      ]
    }
  },
  components: {
    navBar,
    selectItem
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: rgba(100, 100, 100, .3);
}
</style>