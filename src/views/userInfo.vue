<template>
  <div>
    <back-bar title="用户信息"></back-bar>
    <div class="content">
      <div class="title">商 户 名 称 : <p>英智云科技</p></div>
      <div class="title">经 营 地 址 : <p style="max-width: 196px">福建省厦门市集美区软件园三期B03栋2301室</p></div>
      <div class="title">负责人姓名  : <p>英智云科技</p></div>
      <div class="title">身份证号码  : <p>英智云科技</p></div>
      <div class="title">联 系 电 话 : <p>英智云科技</p></div>
      <div class="title">收 款 银 行 : <p>英智云科技</p></div>
      <div class="title">收 款 账 户 : <p>英智云科技</p></div>
      <div class="title">收款人姓名  : <p>英智云科技</p></div>
      <div class="status-icon" :style="status"></div>
    </div>
  </div>
</template>
<script>
// import { debug } from 'util';
import backBar from '../components/backBar/backBar'

export default {
  name: 'userInfo',
  data () {
    return {
      index: 0
    }
  },
  components: { backBar },
  computed: {
    status () {
      debugger
      let arr = [
        '../assets/image/审核通过.svg'

      ]
      let data = {
        backgroundImage: `url('${arr[this.index]}') ;`
      }
      return `backgroundImageurl('${arr[this.index]}') ;`
    }
  }
}
</script>
<style lang="scss" scoped>
.bar {
  width: 375px;
  height: 44px;
  font-size: 16px;
  color: #ffffff;
  line-height: 44px;
  background-color: rgba(5, 154, 220, 1);
  text-align: left;

}
.content{
  position: relative;
  width: 375px;
  box-sizing: border-box;
  padding: 24px 0 0 7px;
  background-color: #fff;
  .status-icon{
    width: 145px;
    height: 145px;
    // background-color: red;
    background-image: url('../assets/image/审核通过.svg');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 120px;
    right: 0px;
  }
  .title>p{
    margin: 0;
    vertical-align: top;
    display: inline-block;
    max-width: 196px;
    padding-left: 6px;
    word-wrap: break-word;
    color:$f-hei;
  }
}
.title{
  width: $gw;
  line-height: 1.5;
  padding-bottom: 21px;
  font-size: 14px;
  color: $f-hui;

}

</style>
