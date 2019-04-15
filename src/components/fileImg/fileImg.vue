<template>
    <div>
      <div class="file-img-wrap">
        <div class="file-img-header">
          <!--<solt></solt>-->
          <span class="xingxing" v-if="required"></span>
          <span class="title">{{title}}</span>
          <span class="wenhao" @click="hangdleClickWenHao"  v-if="required"></span>
          <!--<img src="../../assets/image/星.svg" alt="">-->
        </div>
          <vue-core-image-upload class="file-img"
            text="" :crop="false" @imageuploaded="imageuploaded"   :max-file-size="5242880" url="http://101.198.151.190/api/upload.php" >
            <span class="add-icon"></span>
            <!--<img :src="src" alt="">-->

          </vue-core-image-upload>

      </div>
    </div>
</template>

<script>
import VueCoreImageUpload from 'vue-core-image-upload'
export default {
  name: 'fileImg',
  data: function () {
    return {
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png'
    }
  },
  props: {
    title: {
      type: String,
      default: 'title'
    },
    required: {
      type: Boolean,
      default: true
    }
    // pop: {
    //   type: String
    // }
  },
  methods: {
    imageuploaded (res) {
      if (res.errcode === 0) {
        this.src = res.data.src
      }
    },
    hangdleClickWenHao () {
      // debugger
      this.$emit('pop', this.title)
    }
  },
  components: {
    'vue-core-image-upload': VueCoreImageUpload
  }
}
</script>

<style lang="scss" scoped>
  .file-img-header{
    /*display: flex;*/
    min-width: 175px;
  padding-bottom: 9px;
  }
.file-img{
  position: relative;
  /*display: flex;*/
  /*justify-content: space-around;*/
  /*display: inline-block;*/

  box-sizing: border-box;
  padding: 1em;
  width: 150px;
  height: 100px;
  /*line-height: 100px;*/
  text-align: center;
  border: 1px dotted transparent;
  background: linear-gradient(white,white) padding-box,
  repeating-linear-gradient(-45deg,#ccc 0, #ccc 0.35em,white 0,white 0.75em);
  .add-icon{
    display: inline-block;
    position:absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 40px;
    width: 40px;
    /*height: 40px;*/
    background: url('../../assets/image/加.svg') center no-repeat;
    background-size: 100% 100%;
  }
}
  img{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    background-size: 100% 100%;
    height: 100px;
  }
  .xingxing{
    display: inline-block;
    width: 12px;
    height: 12px;
    background: url('../../assets/image/星.svg') center no-repeat;
    background-size: 100% 100%;
  }
  .wenhao{
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    background: url('../../assets/image/wenhao.svg') center no-repeat;
    background-size: 100% 100%;
  }
  span.title{
    padding: 0 5px;
  }
</style>
