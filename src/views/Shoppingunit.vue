<template>
  <div >
    <back-bar title="商户入驻" ></back-bar>
    <steps :active="step" activeColor='#059ADC' :options="stepsTitle">
    </steps>
    <div class="content" v-show="step===0">
      <my-input :val='UserName' label="姓&emsp;&emsp;名: " placeholder="请输入真实姓名"></my-input>
      <my-input :val='UserName' label="联系电话: " placeholder="请输入手机号码"></my-input>
      <my-input :val='UserName' label="身份证号: " placeholder="请输入身份证号码"></my-input>
      <my-input :val='UserName' label="邮&emsp;&emsp;箱: " placeholder="请输入邮箱号码（选填）"></my-input>
      <my-input :val='UserName' label="客服电话: " placeholder="请输入客服电话（选填）"></my-input>
    </div>
    <div class="content" v-show="step===1">
      <my-select :val='UserName' :columns="1" :cancel="(() =>this.show=false)" :confirm="log" :selectData="pickData" label="账户类型:  " placeholder="请选择"></my-select>
      <my-input :val='UserName' label="提现卡号: " placeholder="请输入提现卡号"></my-input>
      <my-select :val='UserName' :columns="1" :cancel="(() =>this.show=false)" :confirm="log" :selectData="pickData" label="银行名称:  " placeholder="请选择"></my-select>
      <my-select :val='UserName' :columns="1" :cancel="(() =>this.show=false)" :confirm="log" :selectData="pickData" label="卡号城市:  " placeholder="请选择"></my-select>
      <my-select :val='UserName' :columns="1" :cancel="(() =>this.show=false)" :confirm="log" :selectData="pickData" label="支行名称:  " placeholder="请选择"></my-select>
      <my-input :val='UserName' label="手机号码: " placeholder="请输入与银行卡绑定的手机号码"></my-input>

    </div>
    <div class="content" v-show="step===2">
      <my-input :val='UserName' label="营业执照编号: " placeholder="请输入"></my-input>
      <my-input :val='UserName' label="商户名称: " placeholder="请输入商户全称"></my-input>
      <my-input :val='UserName' label="商户简称: " placeholder="请输入商户简称（选填）"></my-input>
      <my-select :val='UserName' :columns="1" :cancel="(() =>this.show=false)" :confirm="log" :selectData="pickData" label="商户类型:  " placeholder="请选择"></my-select>
      <my-select :val='UserName' :columns="1" :cancel="(() =>this.show=false)" :confirm="log" :selectData="pickData" label="行业类目:  " placeholder="请选择"></my-select>
      <my-select :val='UserName' :columns="1" :cancel="(() =>this.show=false)" :confirm="log" :selectData="pickData" label="所在城市:  " placeholder="请选择"></my-select>
      <my-input :val='UserName' label="详细地址: " placeholder="请输入详细地址"></my-input>

    </div>
    <div class="content file-content" v-show="step===3">
      <div class="file-row">
        <file-img title="身份证正面照" @pop="shiLIPop"></file-img>
        <file-img title="身份证反面照"></file-img>
      </div>
      <div class="file-row">
        <file-img title="手持身份证照"></file-img>
        <file-img title="银行卡/开户许可证照"></file-img>
      </div>
      <div class="file-row">
        <file-img title="门头照"></file-img>
        <file-img title="前台照"></file-img>
      </div>
      <div class="file-row">
        <file-img title="营业场所照"></file-img>
        <file-img title="营业执照"></file-img>
      </div> <div class="file-row">
        <file-img :required="false" title="商户协议照(选填）"></file-img>
        <file-img :required="false" title="特殊行业照（选填）"></file-img>
      </div> <div class="file-row">
        <file-img :required="false" title="其他资料（选填）"></file-img>
      </div>

    </div>
    <div class="next" @click="step++" v-if="step===0" >下一步</div>
    <div class="next" v-if="step!==0" ><span @click="step--">上一步</span><span @click="step++">下一步</span></div>
    <pop-box  @close="cloceShiLiPop" v-if="showShiLiPoP">
      <img :src="imgSrc" alt="" class="shi-li">
    </pop-box>
  </div>
</template>
<script>
import backBar from '../components/backBar/backBar'
import steps from '../components/uni-steps/uni-steps'
import myInput from '../components/myInput/myInput'
import mySelect from '../components/mySelect/mySelect'
import FileImg from '../components/fileImg/fileImg'
import PopBox from '../components/popBox/popBox'
export default {
  name: 'shoppingunit',
  data () {
    return {
      imgSrc: '',
      shiLiImgs: {
        '身份证正面照': require('../assets/img/sample/img_idcard_front.png')
      },
      showShiLiPoP: false,
      step: 0,
      UserName: { value: '' },
      stepsTitle: [
        { title: '法人信息' },
        { title: '结算信息' },
        { title: '商户信息' },
        { title: '资料上传' }
      ],
      pickData: {
        // 第一列的数据结构
        data1: [
          {
            text: 1999,
            value: 1999
          },
          {
            text: 2001,
            value: 2001
          }
        ]
      }
    }
  },
  components: {
    backBar,
    steps,
    myInput,
    mySelect,
    FileImg,
    PopBox
  },
  methods: {
    log (val) {
      console.log(val)
    },
    shiLIPop (key) {
      // debugger
      this.imgSrc = this.shiLiImgs[key]
      this.showShiLiPoP = true
    },
    cloceShiLiPop () {
      debugger
      this.showShiLiPoP = false
    }
  }
}
</script>
<style lang="scss" scoped>
.content{
  padding-top: 10px;
  &.file-content{
    padding: 0 25px ;
    padding-bottom: 63px;
    .file-row {
      padding-bottom: 24px;
      display: flex;
      align-items: start;
      justify-content: space-between;
      /*justify-content: space-around;*/
      /*justify-content: space-evenly;*/
    }
  }
}
.next{
  // margin-top: 325px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: $gw;

height: 48px;
line-height: 48px;
background-color: rgba(5, 154, 220, 1);
color:#FFF;
font-size: 14px;
text-align: center;
font-family: Arial;
span{
  display: inline-block;
  width: 50%;
  height: 100%;
}
  span:first-child{
    background-color: $hui ;
  }
}
  img.shi-li{
    width: 300px;
    height: 300px;
  }
</style>
