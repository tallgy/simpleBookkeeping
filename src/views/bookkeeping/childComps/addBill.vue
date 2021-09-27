<template>
<div>
  <nav-bar class="nav-bar" :leftMethod="clickLeft">
    <template #left><img src="~assets/img/common/back.png" alt=""></template>
<!--    <template #center><div>{{$route.query.name}}</div></template>-->
    <template #center><div>记账</div></template>
  </nav-bar>

  <div class="body clearfix">
    <div><span>消费类型: </span><input type="text" v-model="info.class"></div>
    <div><span>主题: </span><input type="text" v-model="info.title"></div>
    <div><span>消费金额: </span><input type="number" v-model="info.money"></div>
    <div><span>时间: </span><input type="date" v-model="info.time"></div>
    <div><span>描述: </span><input type="text" v-model="info.describe"></div>
  </div>

  <div @click="clickSubmit">提交</div>

</div>
</template>

<script>
import navBar from 'components/common/navBar/navBar'

export default {
  name: "addBill",
  props: {

  },
  data() {
    return {
      info: {
        class: '',
        title: '',
        money: 0,
        time: 0,
        describe: ''
      }
    };
  },
  created() {
    this.initMethod();
  },
  components: {
    navBar
  },
  methods: {
    initMethod() {
      this.info.class = this.$route.query.name;

      let date = new Date().toLocaleDateString().split('/');
      for (let i = 0; i < date.length; i++) {
        if  (date[i]*1 < 10) date[i] = 0 + date[i];
      }
      date = date.join('-');

      this.info.time = date;
      // this.info.time = '2021-02-12';
      console.log(this.info.time)
    },
    clickLeft() {
      this.$router.back();
    },
    clickSubmit() {
      console.log(this.info.time)
      console.log(typeof this.info.time)
    }
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: rgba(100, 100, 100, .3);
}

.body {
  display: flex;
  flex-direction: column;

  text-align: center;

  margin: 30px 40px 10px;
}

.body div {
  height: 30px;

  line-height: 30px;

}

.body span {
  float: left;
}

.body input {
  float: right;
}
</style>