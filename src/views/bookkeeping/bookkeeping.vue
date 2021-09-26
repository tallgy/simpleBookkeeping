<template>
<div>
  <nav-bar class="nav-bar">
    <template #center><div>记账</div></template>
  </nav-bar>

  <div class="bar-item" >
    <select-item v-for="item in itemSrc" :item="item.name">
      <template #item-icon><img :src="item.src" alt=""></template>
      <template #item-text><div>{{item.name}}</div></template>
    </select-item>
  </div>

</div>
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
  created() {
    this.getItem();
  },
  methods: {
    getItem() {
      this.itemSrc = [
        {
          src: require('assets/img/tabBar/bookkeeping.png'),
          name: '图片'
        },
        {
          src: require('assets/img/tabBar/home.png'),
          name: 'a'
        },
        {
          src: require('assets/img/tabBar/profile.png'),
          name: 'b'
        },
        {
          src: require('assets/img/tabBar/profile.png'),
          name: 'b'
        },
        {
          src: require('assets/img/tabBar/profile.png'),
          name: 'b'
        },
        {
          src: require('assets/img/tabBar/profile.png'),
          name: 'b'
        },
        {
          src: require('assets/img/tabBar/profile.png'),
          name: 'b'
        },
        {
          src: require('assets/img/tabBar/profile.png'),
          name: 'b'
        },
        {
          src: require('assets/img/tabBar/profile.png'),
          name: 'b'
        },
        {
          src: require('assets/img/tabBar/profile.png'),
          name: 'b'
        },
        {
          src: require('assets/img/tabBar/profile.png'),
          name: 'b'
        }
      ];
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

.bar-item {
  margin: 20px 20px 0;

  display: flex;
  flex-wrap: wrap;
}
</style>