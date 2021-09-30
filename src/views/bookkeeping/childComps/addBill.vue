<template>
<div id="body">
  <nav-bar class="nav-bar" :leftMethod="clickLeft">
    <template #left><img src="~assets/img/common/back.png" alt=""></template>
    <template #center><div>记账</div></template>
  </nav-bar>

  <div class="body clearfix">
    <span>消费类型: </span><input type="text" v-model.lazy="info.class">
    <span>主题: </span><input type="text" v-model.lazy="info.title">
    <span>收入支出: </span>
    <div class="radio">
      <input type="radio" name="flag" id="input" v-model="info.flag" value="true"><label for="input">收入</label>
      <input type="radio" name="flag" id="output" v-model="info.flag" value="false"><label for="output">支出</label>
    </div>
    <span>金额: </span><input type="number" v-model.lazy.number="info.money">
    <span>时间: </span><input type="date" v-model.lazy="info.time">
    <span>描述: </span><textarea rows="5" v-model.lazy="info.describe"></textarea>
  </div>

  <div class="button-box">
<!--    <div class="myButton" @click="clickSubmit">提交</div>-->
    <my-button @click="clickSubmit">提交</my-button>
  </div>

</div>
</template>

<script>
import navBar from 'components/common/navBar/navBar'
import myButton from 'components/common/myButton/myButton'

import { addBookkeeping } from 'network/bookkeeping'

export default {
  name: "addBill",
  props: {

  },
  data() {
    return {
      info: {
        class: '',
        title: '',
        flag: false,
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
    navBar,
    myButton
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
    },
    clickLeft() {
      this.$router.back();
    },
    clickSubmit() {
      this.info.flag = this.info.flag==='true' ? true : false;

      const info = this.getInfo();

      // 传递给后台，并刷新页面
      addBookkeeping(info)
        .then(res => {
          console.log('add bookkeeping')
          console.log(res)
        }, err => {
          console.log('add bookkeeping')
          console.log(err)
        });
    },
    getInfo() {
      return {
        class: this.info.class,
        title: this.info.title,
        flag: this.info.flag,
        money: this.info.money,
        time: this.info.time,
        describe: this.info.describe,
      }
    }
  }
}
</script>

<style scoped>
#body {
  height: 90vh;
  overflow: auto;
}

.nav-bar {
  background-color: rgba(100, 100, 100, .5);
}

.body {
  display: flex;
  flex-direction: column;

  text-align: center;

  margin: 10px 40px 10px;
}

.body span{
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  height: 30px;
  margin: 8px 0;
}

.body input {
  width: 100%;
  height: 40px;
  padding: 5px;

  border: 1px solid #938e8e;
}
.body>.radio {
  display: flex;

  height: 20px;
  width: 100%;
  padding: 5px;
}
.body input[type='radio'] {
  height: initial;
  width: 30%;
}
.body textarea {
  width: 100%;
  padding: 5px;
  border: 1px solid #938e8e;
}

.button-box {
  display: flex;
  justify-content: center;
}
</style>
