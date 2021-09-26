<template>
<div>
  <nav-bar class="nav-bar" :leftMethod="clickLeft">
    <template #left><img src="~assets/img/common/back.png" alt=""></template>
    <template #center><div>{{$route.query.name}}</div></template>
  </nav-bar>

  <div class="body clearfix">
<!--    <table>-->
<!--      <tr>-->
<!--        <td>主题: </td>-->
<!--        <td><input type="text"></td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td>消费金额: </td>-->
<!--        <td><input type="number"></td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td>时间: </td>-->
<!--        <td><input type="date"></td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td>描述: </td>-->
<!--        <td><input type="text"></td>-->
<!--      </tr>-->
<!--    </table>-->

    <div><span>主题: </span><input type="text"></div>
    <div><span>消费金额: </span><input type="number"></div>
    <div><span>时间: </span><input type="date"></div>
    <div><span>描述: </span><input type="text"></div>
  </div>

</div>
</template>

<script>
import navBar from 'components/common/navBar/navBar'

export default {
  name: "addBill",
  props: {

  },
  components: {
    navBar
  },
  methods: {
    clickLeft() {
      this.$router.back();
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

.body span {
  float: left;
}

.body input {
  float: right;
}
</style>