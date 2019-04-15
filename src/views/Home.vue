<template>
  <div class="home">
    <div class="home-bar">卡e族收银台</div>
   <pop-box>
      <div class="fill-in-pop">
        <div class="fill-wrap">
          <div class="warn"></div>
          <p>
            此功能需要您完善商户资料
            <br>才能使用
          </p>
        <div class="btn" @click="$router.push('/ruWangXingShi')">马上完善</div>

        </div>
      </div>
    </pop-box>
    <pop-Box v-if="showPop">
      <div class="pop-wrap">
        <div class="input-wrap ignore">
          <!-- <div class="input-content"> -->
          设置金额
          <input type="text" placeholder="请输入金额">
          <!-- </div> -->
        </div>
        <div class="btn-wrap">
          <span @click="showPop=false">取消</span>
          <span>确认</span>
        </div>
      </div>
    </pop-Box>
    <div class="checkout-info" @click="$router.push('/views/orderList/orderDetail')">
      <div class="checkout-text-wrap">
        你有一笔支付宝进账
        <span class="_text_right">20.00元</span>
      </div>
    </div>
    <div class="qr-wrap">
      <div class="qr-content">
        <div class="qr-title">在此扫码付款</div>
        <div class="qr-icon-wrap">
          <div class="qe-icon-wrap-content">
            <span class="icon-left icon"></span>
            <span class="qr-text">支付宝</span>
          </div>
          <div class="qe-icon-wrap-content">
            <span class="icon-right icon"></span>
            <span class="qr-text">微信支付</span>
          </div>
        </div>
        <div class="qr-img-wrap">
          <div class="qr-img"></div>
        </div>
        <div class="amount">￥20.00</div>
        <div class="tool-wrap">
          <div>
            <span @click="showPop=true">设置金额</span>
          </div>
          <div class="_text_right">
            <span class="_text_right">保存图片</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <uni-list>
      <uni-list-item title="标题文字"
        show-extra-icon="true"
        :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}">
    </uni-list-item>
    </uni-list>-->

    <div class="bottom-content-wrap">
      <div class="bottom-content-button" @click="$router.push('/views/orderList')">
        <div>
          <span class="checkout-log icon"></span>
          收款信息
        </div>
        <icons color="#101010" type="gengduo" :size="16"></icons>
      </div>
      <div class="bottom-content-button" @click="$router.push('/userInfo')">
        <div>
          <span class="user-info icon"></span>
          用户信息
        </div>
        <icons color="#101010" type="gengduo" :size="16"></icons>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
import popBox from '@/components/popBox/popBox.vue'
export default {
  name: 'home',
  data () {
    return {
      showPop: false
    }
  },
  methods: {},
  components: {
    uniListItem,
    uniList,
    popBox
  }
}
</script>

<style lang="scss" scoped>
.fill-in-pop {
  width: 250px;
  .fill-wrap {
    width: 250px;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
  }
  .warn {
    margin-top: 6px;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background: url("../assets/image/驳回.svg") center no-repeat;
    background-size: 100% 100%;
  }
  p {
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin: 0px;
    margin-bottom: 18px;
    width: 100px;
    height: 35px;
    line-height: 35px;
    border-radius: 2px;
    background-color: rgba(5, 154, 220, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    text-align: center;
    font-family: Arial;
    border: 1px solid rgba(187, 187, 187, 1);
  }
}
.amount {
  padding-top: 23px;
  width: 100%;
  text-align: center;
  color: rgba(16, 16, 16, 1);
  font-size: 36px;
  font-family: PingFangSC-regular;
}
.home-bar {
  width: 375px;
  height: 55px;
  line-height: 55px;
  background-color: rgba(5, 154, 220, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  text-align: center;
  font-family: Microsoft Yahei;
}
.pop-wrap {
  width: 300px;
  // height: 154px;

  .input-wrap {
    // box-sizing: border-box;
    /*height: 40px;*/
    padding: 43px 0px 31px 12px;
    // line-height: 52px;
    color: rgb(16, 16, 16);

    input {
      box-sizing: border-box;
      width: 200px;
      height: 40px;
      padding-left: 7px;

      border-radius: 2px;
      border: 1px solid rgba(187, 187, 187, 1);
      // height: 100%;
      margin-left: 12px;
      &::placeholder {
        color: rgb(16, 16, 16);
      }
    }
  }
  .btn-wrap {
    width: 100%;
    & span:last-child {
      box-sizing: border-box;
      border-left: 2px solid $hui;
      color: $lan;
    }
    span {
      box-sizing: border-box;
      // border-color: rgba(187, 187, 187, 1);
      border-top: 1px solid $hui;
      display: inline-block;
      width: 50%;
      text-align: center;
      height: 40px;
      line-height: 40px;
    }
  }
}
.home {
  width: 375px;
  .checkout-info {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 375px;
    height: 33px;
    line-height: 33px;
    opacity: 0.7;
    background-color: rgba(5, 154, 220, 1);
    text-align: center;
    .checkout-text-wrap {
      width: 192px;
      height: 33px;
      color: rgba(255, 255, 255, 1);
      font-size: 14px;
      text-align: left;
      font-family: PingFangSC-regular;
      span {
        color: white;
      }
    }
  }
  .qr-wrap {
    box-sizing: border-box;
    width: 375px;
    padding: 40px 40px 32px 40px;
    .qr-content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      /*width: 334px;*/
      /*width: 100%;*/
      /*padding: 0px;*/
      .qr-title {
        padding: 8px 0;
        color: rgba(16, 16, 16, 1);
        font-size: 28px;

        text-align: center;
        font-family: PingFangSC-regular;
      }
      .qr-icon-wrap {
        width: 214px;
        display: flex;
        justify-content: space-between;
        .icon-left {
          background-image: url("../assets/image/支付宝.svg");
          background-size: 30px 30px;
          background-repeat: no-repeat;
          background-origin: center;
        }
        .icon-right {
          background-image: url("../assets/image/微信支付1.svg");
          background-size: 30px 30px;
          background-repeat: no-repeat;
          background-origin: center;
        }
        .qr-text {
          /*visibility: visible;*/
          padding-left: 7px;
          vertical-align: middle;
        }

        // .icon-left,
        // .icon-right {
        //   display: inline-block;
        //   width: 30px;
        //   height: 30px;
        //   // background-color: red;
        // }
      }
    }
  }
  .qr-img-wrap {
    padding-top: 36px;
    .qr-img {
      width: 214px;
      height: 220px;
      background-color: darkred;
    }
  }
  .tool-wrap {
    display: flex;
    justify-content: space-between;
    width: 214px;
    padding-top: 12px;
    div {
      width: 50%;
      span {
        color: rgba(5, 154, 220, 1);
        font-size: 16px;
        font-family: PingFangSC-regular;
      }
    }
    & div:first-child {
      border-right: 1px solid rgba(187, 187, 198, 1);
    }
  }
}
.bottom-content-wrap {
  width: 375px;
  .bottom-content-button {
    & > div {
      height: 100%;
    }
    .checkout-log {
      background-image: url("../assets/image/收款记录.svg");
      background-size: 30px 30px;
      background-origin: content-box;
      // background-color: red;
    }
    .user-info {
      background-image: url("../assets/image/用户信息.svg");
      background-size: 30px 30px;
    }

    margin-top: -1px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 0 13px;
    width: 375px;
    height: 50px;
    line-height: 50px;
    left: 49px;

    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
    // line-height: 20px;
    // text-align: center;
    border-top: 1px solid $hui;
    border-bottom: 1px solid $hui;
  }
}
</style>
