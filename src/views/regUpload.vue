<template lang="html">
  <div class="view">
    <x-header title="资料上传"></x-header>
    <div class="content pt50">
      <p class="content-remark" @click="gohelp">
        <icons type="icon-tishi" color="#FF0000" size="20"></icons>
        <span class="content-remark-info">查看具体认证类型所需资质</span>
      </p>
      <div class="other-remark">
        <p class="">点击<icons type="icon-bangzhu" color="#8DD4FE" size="20"></icons>可查看示例图片</p>
        <p class=""><span style="font-size: 20px;color:red;font-weight: bold;">*</span>为开通银联收款必填项，其他为开通支付宝/微信收款项目</p>
      </div>
      <div class="list">
        <div class="list-cell">
          <span>法人身份证正面</span>
          <uploadimg class="uploadimg" :src="img_idcard_back" @geturl="get_idcard_back"></uploadimg>
          <icons type="icon-bangzhu" color="#8DD4FE" size="25" class="icons" @click.native="show_help('img_idcard_back')"></icons>
          <span class="require">*</span>
        </div>
        <div class="list-cell">
          <span>法人身份证反面</span>
          <uploadimg class="uploadimg" :src="img_idcard_front" @geturl="get_idcard_front"></uploadimg>
          <icons type="icon-bangzhu" color="#8DD4FE" size="25" class="icons" @click.native="show_help('img_idcard_front')"></icons>
          <span class="require">*</span>
        </div>
        <div class="list-cell" v-if="merchants.accountType==1">
          <span>银行卡正面</span>
          <uploadimg class="uploadimg" :src="img_bankcard" @geturl="get_bankcard"></uploadimg>
          <icons type="icon-bangzhu" color="#8DD4FE" size="25" class="icons" @click.native="show_help('img_bankcard')"></icons>
          <span class="require">*</span>
        </div>
        <div class="list-cell" v-if="merchants.settleType==1">
          <span>结算人身份证反面</span>
          <uploadimg class="uploadimg" :src="img_useidcard_front" @geturl="get_useidcard_front"></uploadimg>
          <icons type="icon-bangzhu" color="#8DD4FE" size="25" class="icons" @click.native="show_help('img_useidcard_front')"></icons>
          <span class="require">*</span>
        </div>
        <div class="list-cell" v-if="merchants.settleType==1">
          <span>结算人身份证正面</span>
          <uploadimg class="uploadimg" :src="img_useidcard_back" @geturl="get_useidcard_back"></uploadimg>
          <icons type="icon-bangzhu" color="#8DD4FE" size="25" class="icons" @click.native="show_help('img_useidcard_back')"></icons>
          <span class="require">*</span>
        </div>
        <div class="list-cell" v-if="merchants.joinType==0">
          <span>结算人手持身份证照</span>
          <uploadimg class="uploadimg" :src="img_useidcard_hand" @geturl="get_useidcard_hand"></uploadimg>
          <icons type="icon-bangzhu" color="#8DD4FE" size="25" class="icons" @click.native="show_help('img_useidcard_hand')"></icons>
          <span class="require">*</span>
        </div>
        <div class="list-cell">
          <span>收银台</span>
          <uploadimg class="uploadimg" :src="img_cashier" @geturl="get_cashier"></uploadimg>
          <icons type="icon-bangzhu" color="#8DD4FE" size="25" class="icons" @click.native="show_help('img_cashier')"></icons>
        </div>
        <div class="list-cell">
          <span>经营内容</span>
          <uploadimg class="uploadimg" :src="img_business" @geturl="get_business"></uploadimg>
          <icons type="icon-bangzhu" color="#8DD4FE" size="25" class="icons" @click.native="show_help('img_business')"></icons>
        </div>
        <div class="list-cell">
          <span>结算人站门头照</span>
          <uploadimg class="uploadimg" :src="img_shop" @geturl="get_shop"></uploadimg>
          <icons type="icon-bangzhu" color="#8DD4FE" size="25" class="icons" @click.native="show_help('img_shop')"></icons>
        </div>
        <div class="list-cell" v-if="merchants.joinType==1">
          <span>经营执照</span>
          <uploadimg class="uploadimg" :src="img_license" @geturl="get_license"></uploadimg>
          <icons type="icon-bangzhu" color="#8DD4FE" size="25" class="icons" @click.native="show_help('img_license')"></icons>
        </div>
        <div class="list-cell" v-if="merchants.accountType==0">
          <span>开户许可证</span>
          <uploadimg class="uploadimg" :src="img_newaccount" @geturl="get_newaccount"></uploadimg>
          <icons type="icon-bangzhu" color="#8DD4FE" size="25" class="icons" @click.native="show_help('img_newaccount')"></icons>
        </div>
        <div class="list-cell" v-if="merchants.settleType==1">
          <span>授权结算书</span>
          <uploadimg class="uploadimg" :src="img_authorization" @geturl="get_authorization"></uploadimg>
          <icons type="icon-bangzhu" color="#8DD4FE" size="25" class="icons" @click.native="show_help('img_authorization')"></icons>
        </div>
        <div class="list-cell" v-if="merchants.settleType==1">
          <span>结算人手持授权结算书与法人合照</span>
          <uploadimg class="uploadimg" :src="img_authorization_coop" @geturl="get_authorization_coop"></uploadimg>
          <icons type="icon-bangzhu" color="#8DD4FE" size="25" class="icons" @click.native="show_help('img_authorization_coop')"></icons>
        </div>
      </div>
      <div class="btn next" @click="next">提交申请</div>
    </div>
    <x-dialog v-model="showimg" class="dialog-demo" hide-on-blur>
      <img :src="default_img" alt="">
    </x-dialog>
  </div>
</template>

<script>
import { XDialog } from 'vux'
import uploadimg from '../commons/uploadimg'
export default {
  data () {
    return {
      showimg: false,
      merchants: {},
      img_idcard_front: require('@/assets/img/reg_idcard.png'),
      img_idcard_back: require('@/assets/img/reg_idcard2.png'),
      img_bankcard: require('@/assets/img/reg_bank.png'),
      img_cashier: require('@/assets/img/reg_cashier.png'),
      img_business: require('@/assets/img/reg_business.png'),
      img_shop: require('@/assets/img/reg_shop.png'),
      img_license: require('@/assets/img/reg_license.png'),
      img_newaccount: require('@/assets/img/reg_authorization.png'),
      img_authorization: require('@/assets/img/reg_authorization.png'),
      img_authorization_coop: require('@/assets/img/reg_authorization.png'),
      img_useidcard_front: require('@/assets/img/reg_idcard.png'),
      img_useidcard_back: require('@/assets/img/reg_idcard2.png'),
      img_useidcard_hand: require('@/assets/img/reg_idcard3.png'),
      upload: {
        idcard_front: false,
        idcard_back: false,
        bankcard: false,
        cashier: false,
        business: false,
        shop: false,
        license: false,
        newaccount: false,
        authorization: false,
        authorization_coop: false,
        useidcard_front: false,
        useidcard_back: false,
        useidcard_hand: false
      },
      default_img: '',
      defaultimg: {
        img_idcard_front: require('../../assets/img/sample/img_idcard_front.png'),
        img_idcard_back: require('../../assets/img/sample/img_idcard_back.png'),
        img_bankcard: require('../../assets/img/sample/img_bankcard.png'),
        img_cashier: require('../../assets/img/sample/img_cashier.png'),
        img_business: require('../../assets/img/sample/img_business.png'),
        img_shop: require('../../assets/img/sample/img_shop.png'),
        img_license: require('../../assets/img/sample/img_license.png'),
        img_newaccount: require('../../assets/img/sample/img_newaccount.png'),
        img_authorization: require('../../assets/img/sample/img_authorization.png'),
        img_authorization_coop: require('../../assets/img/sample/img_authorization_coop.png'),
        img_useidcard_front: require('../../assets/img/sample/img_idcard_front.png'),
        img_useidcard_back: require('../../assets/img/sample/img_idcard_back.png'),
        img_useidcard_hand: require('../../assets/img//sample/img_useidcard_hand.png')
      }
    }
  },
  mounted () {
    let obj = this.$store.state.merchants
    console.log(obj)
    this.merchants = obj
  },
  methods: {
    show_help (e) {
      console.log(e)
      let that = this
      this.showimg = true
      for (let item in this.defaultimg) {
        if (item == e) {
          that.default_img = this.defaultimg[item]
        }
      }
    },
    gohelp () {
      if (this.merchants.joinType == 0) {
        this.$router.push({
          path: '/found/help/certification/detail',
          query: { id: 1500 }
        })
        return
      }
      if (this.merchants.joinType == 1 && this.merchants.accountType == 1 && this.merchants.settleType == 0) {
        this.$router.push({
          path: '/found/help/certification/detail',
          query: { id: 1501 }
        })
        return
      }
      if (this.merchants.joinType == 1 && this.merchants.accountType == 1 && this.merchants.settleType == 1) {
        this.$router.push({
          path: '/found/help/certification/detail',
          query: { id: 1502 }
        })
        return
      }
      if (this.merchants.joinType == 1 && this.merchants.accountType == 0) {
        this.$router.push({
          path: '/found/help/certification/detail',
          query: { id: 1503 }
        })
      }
    },
    get_idcard_front (e) {
      this.http(this.api.commons.upload, {
        img: e,
        type: 3
      }).then(res => {
        this.img_idcard_front = res.img_url
        this.upload.idcard_front = true
      })
    },
    get_idcard_back (e) {
      this.http(this.api.commons.upload, {
        img: e,
        type: 4
      }).then(res => {
        this.img_idcard_back = res.img_url
        this.upload.idcard_back = true
      })
    },
    get_bankcard (e) {
      this.http(this.api.commons.upload, {
        img: e,
        type: 5
      }).then(res => {
        this.img_bankcard = res.img_url
        this.upload.bankcard = true
      })
    },
    get_cashier (e) {
      this.http(this.api.commons.upload, {
        img: e,
        type: 6
      }).then(res => {
        this.img_cashier = res.img_url
        this.upload.cashier = true
      })
    },
    get_business (e) {
      this.http(this.api.commons.upload, {
        img: e,
        type: 7
      }).then(res => {
        this.img_business = res.img_url
        this.upload.business = true
      })
    },
    get_shop (e) {
      this.http(this.api.commons.upload, {
        img: e,
        type: 8
      }).then(res => {
        this.img_shop = res.img_url
        this.upload.shop = true
      })
    },
    get_license (e) {
      this.http(this.api.commons.upload, {
        img: e,
        type: 9
      }).then(res => {
        this.img_license = res.img_url
        this.upload.license = true
      })
    },
    get_newaccount (e) {
      this.http(this.api.commons.upload, {
        img: e,
        type: 10
      }).then(res => {
        this.img_newaccount = res.img_url
        this.upload.newaccount = true
      })
    },
    get_authorization (e) {
      this.http(this.api.commons.upload, {
        img: e,
        type: 11
      }).then(res => {
        this.img_authorization = res.img_url
        this.upload.authorization = true
      })
    },
    get_authorization_coop (e) {
      this.http(this.api.commons.upload, {
        img: e,
        type: 12
      }).then(res => {
        this.img_authorization_coop = res.img_url
        this.upload.authorization_coop = true
      })
    },
    get_useidcard_front (e) {
      this.http(this.api.commons.upload, {
        img: e,
        type: 13
      }).then(res => {
        this.img_useidcard_front = res.img_url
        this.upload.useidcard_front = true
      })
    },
    get_useidcard_back (e) {
      this.http(this.api.commons.upload, {
        img: e,
        type: 14
      }).then(res => {
        this.img_useidcard_back = res.img_url
        this.upload.useidcard_back = true
      })
    },
    get_useidcard_hand (e) {
      this.http(this.api.commons.upload, {
        img: e,
        type: 15
      }).then(res => {
        this.img_useidcard_hand = res.img_url
        this.upload.useidcard_hand = true
      })
    },
    next () {
      let that = this
      if (!this.upload.idcard_front) {
        this.$vux.toast.show({
          text: '请上传法人身份证反面照',
          type: 'text'
        })
        return
      }
      if (!this.upload.idcard_back) {
        this.$vux.toast.show({
          text: '请上传法人身份证正面照',
          type: 'text'
        })
        return
      }
      // if(!this.upload.cashier){
      //   this.$vux.toast.show({
      //     text:'请上传收银台照片',
      //     type:'text'
      //   })
      //   return
      // }
      // if(!this.upload.business){
      //   this.$vux.toast.show({
      //     text:'请上传经营内容照片',
      //     type:'text'
      //   })
      //   return
      // }
      // if(!this.upload.shop){
      //   this.$vux.toast.show({
      //     text:'请上传门头照',
      //     type:'text'
      //   })
      //   return
      // }
      if (this.merchants.accountType == 1) {
        if (!this.upload.bankcard) {
          this.$vux.toast.show({
            text: '请上传银行卡正面照',
            type: 'text'
          })
          return
        }
      }
      // if(this.merchants.joinType==1){
      //   if(!this.upload.license){
      //     this.$vux.toast.show({
      //       text:'请上传营业执照',
      //       type:'text'
      //     })
      //     return
      //   }
      // }
      // if(this.merchants.accountType==0){
      //   if(!this.upload.newaccount){
      //     this.$vux.toast.show({
      //       text:'请上传开户许可证',
      //       type:'text'
      //     })
      //     return
      //   }
      // }
      if (this.merchants.joinType == 0) {
        if (!this.upload.useidcard_hand) {
          this.$vux.toast.show({
            text: '请上传结算人手持身份证照',
            type: 'text'
          })
          return
        }
      }
      if (this.merchants.settleType == 1) {
        // if(!this.upload.authorization){
        //   this.$vux.toast.show({
        //     text:'请上传授权结算书照片',
        //     type:'text'
        //   })
        //   return
        // }
        // if(!this.upload.authorization_coop){
        //   this.$vux.toast.show({
        //     text:'请上传结算人手持授权结算书与法人合照',
        //     type:'text'
        //   })
        //   return
        // }
        if (!this.upload.useidcard_front) {
          this.$vux.toast.show({
            text: '请上传结算人身份证反面照',
            type: 'text'
          })
          return
        }
        if (!this.upload.useidcard_back) {
          this.$vux.toast.show({
            text: '请上传结算人身份证正面照',
            type: 'text'
          })
          return
        }
      }
      console.log(this.merchants)
      this.http(this.api.scan.settleInApy, {
        industryFirst: this.merchants.industryFirst,
        industrySecond: this.merchants.industrySecond,
        industryThird: this.merchants.industryThird,
        settleBankBranch: this.merchants.settleBankBranch,
        merchantName: this.merchants.merchantName,
        settleCardNo: this.aes.encrypt(this.merchants.settleCardNo),
        settleCardPhone: this.merchants.settleCardPhone,
        shopAddress: this.merchants.shopAddress,
        shopArea: this.merchants.shopArea,
        shopCity: this.merchants.shopCity,
        shopProvince: this.merchants.shopProvince,
        shopMail: this.merchants.shopMail,
        settleBankName: this.merchants.settleBankName,
        joinType: this.merchants.joinType,
        accountType: this.merchants.accountType,
        settleType: this.merchants.settleType
      }).then(res => {
        console.log(res)
        that.$vux.toast.show({
          text: '提交成功'
        })
        setTimeout(function () {
          that.$router.go(-3)
          that.$store.commit('clear_merchants')
        }, 1000)
      })
    }
  },
  components: {
    uploadimg,
    XDialog
  }
}
</script>

<style lang="css" scoped>
.view{
  background: #fff;
  height: 100%;
}
.content{
  padding-bottom: 40px;
}
.content-remark{
  display: flex;
  color: #FF0000;
  padding: 20px 20px 0 20px;
}
.content-remark-info{
  margin-left: 10px;
  text-decoration: underline;
}
.list{
  padding: 20px;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
}
.list-cell{
  border:2px dashed;
  position: relative;
  padding: 10px 15px;
  min-height: 100px;
  color: #8DD4FE;
  width: 120px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border-radius: 10px;
  margin-bottom: 20px;
}
.list-cell>span{
  margin-bottom: 5px;
  font-size: 12px;
  color: #888;
  text-align: left;
  padding-left: 5px;
  max-width: 100px;
}
.uploadimg{
  width: 100px;
}
.icons{
  position: absolute;
  top: 5px;
  right: 5px;
}
.require{
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 20px !important;
  color: red !important;
  font-weight: bold;
}
.next{
  height: 40px;
  width: 300px;
  margin: 0 auto;
}
.dialog-demo img{
  width: 90%;
}
.other-remark{
  font-size: 10px;
  padding-left: 20px;
  color: #888;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
}

</style>
