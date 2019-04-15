<template>
  <div>
    <back-bar title="入网形式"></back-bar>
    <div class="wrap">
      <div class="title">入网类型:</div>
      <div class="btn-wrap">
        <input type="radio" v-model="val1" value="a" id="a">
        <label :class="{selected: val1 ==='a'}" for="a" class="select-btn">小微商户</label>
        <input type="radio" v-model="val1" value="b" id="b">
        <label :class="{selected: val1 ==='b'}" for="b" class="select-btn">营业执照</label>
      </div>
      <div class="title">账户性质:</div>
      <div class="btn-wrap">
        <input type="radio" v-model="val2" value="a" id="c">
        <label :class="{selected: val2 ==='a'}" for="c" class="select-btn">对私</label>
        <input type="radio" v-model="val2" value="b" id="d">
        <label :class="{selected: val2 ==='b'}" for="d" v-if="val1!=='a'" class="select-btn">对公</label>
      </div>
      <div class="title">结算方:</div>
      <div class="btn-wrap">
        <input type="radio" v-model="val3" value="a" id="e">
        <label :class="{selected: val3 ==='a'}" for="e" class="select-btn">同法人</label>
        <input type="radio" v-model="val3" value="b" id="f">
        <label :class="{selected: val3 ==='b'}" v-if="val1!=='a'&&val2!=='b'" for="f" class="select-btn">非法人</label>
      </div>
    </div>
    <div class="next-wrap">
      <div class="next " @click="nextGoRoute">下一步</div>
    </div>
  </div>
</template>
<script>
import backBar from '../components/backBar/backBar'
export default {
  name: 'ruWang',
  data: function () {
    return {
      val1: '',
      val2: '',
      val3: ''
    }
  },
  methods: {
    nextGoRoute () {
      // debugger
      if (this.val && this.val2 && this.val3) {
        return
      }
      let str = this.val1 + this.val2 + this.val3
      if (str === 'baa' || str === 'aba') {
        this.$router.push('/shoppingunit')
      }
      if (str === 'bba') {
        this.$router.push('/shoppingunitOne')
      }
      if (str === 'aaa') {}
      this.$router.push('/shoppingunitTwo')
    }
  },
  components: {
    backBar
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: $gw;
  padding: 24px 0 0 9px;
  background-color: #fff;
}
.next-wrap{
  width: $gw;
  position: absolute;
  bottom: 0px;
  left: 0px;
  /*padding-top: 300px;*/
  .next{
    z-index: 999;
    width: $gw;
    height: 48px;
    font-size: 14px;
    line-height: 48px;
    text-align: center;
     background-color: $lan;
      color: #fff;
  }
}
.title {
  color: rgba(16, 16, 16, 1);
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
  font-size: 16px;
  &::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 12px;
    border-radius: 50%;
    background-color: $lan;
  }
}
.btn-wrap {
  padding-bottom: 36px;
  padding-top: 19px;
  input[type="radio"] {
    width: 0px;
    visibility: hidden;
  }
  .select-btn {
    display: inline-block;
    width: 120px;
    height: 40px;
    outline: none;
    color: #059adc;
    font-size: 14px;
    margin-right: 24px;
    line-height: 40px;
    border-radius: 4px 4px 4px 4px;
    text-align: center;
    border: 1px solid rgba(5, 154, 220, 1);
    &.selected {
      background-color: $lan;
      color: #fff;
    }
  }
}
</style>
