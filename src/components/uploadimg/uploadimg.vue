<template lang="html">
  <!-- <div v-if="os=='iOS'" class="upload">
    <input type="file" name="file" accept="image/png,image/gif,image/jpeg" @change="chooseImage">
    <img class="show_img" :src="src" />
  </div> -->
  <div  class="upload" @click="upload">
    <!-- <input id='file' type="file" name="file" accept="image/png,image/gif,image/jpeg" @change="chooseImage"> -->
    <img class="show_img" :src="src" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      required: true
    },
    reduce: {
      default: 600
    }
  },
  data () {
    return {
      url: '',
      os: ''
    }
  },
  mounted () {
    console.log(window.plus.os.name)
    this.os = window.plus.os.name
  },
  methods: {
    // chooseImage(e){
    //   let that = this;
    //   // let file = '';
    //   // let data = {};
    //   if(event.target.files.length>0){
    //     // let file = event.target.files[0];  //提交的图片
    //     //that.$vux.loading.show('上传中');
    //     this.getBase64(event.target,(url)=>{
    //         that.url = 'data:image/png;base64,'+url;   //显示的图片
    //         // that.http(that.api.commons.upload,{img:that.url,type:that.type}).then(res=>{
    //         // })
    //         that.$vux.loading.hide()
    //         // that.$vux.toast.show('上传成功')
    //         that.$emit('geturl',that.url)
    //     });
    //   }
    // },
    upload () {
      let that = this
      plus.nativeUI.actionSheet({ cancel: '取消', buttons: [{ title: '拍照' }, { title: '相册' }] }, function (e) {
        if (e.index == 1) {
          that.getImage()
        } else if (e.index == 2) {
          that.Gallery()
        }
      })
    },
    // 拍照
    getImage () {
      let that = this
      console.log('开始拍照：')
      that.$vux.loading.show('上传中')
      plus.camera.getCamera().captureImage(function (p) {
        plus.io.resolveLocalFileSystemURL(p, function (entry) {
          var localurl = entry.toLocalURL()// 把拍照的目录路径，变成本地url路径，例如file:///........之类的。
          entry.getMetadata(function (metadata) {
            let size = metadata.size
            that.appendFile(localurl, size, (url) => {
              that.url = url
              that.$vux.loading.hide()
              that.$emit('geturl', that.url)
            })
          })
        })
      }, function (error) {
        console.log('Capture image failed: ' + error.message)
        that.$vux.loading.hide()
      })
      // //that.$vux.loading.show('上传中');
      // that.appendFile(p,(url)=>{
      //     that.url = url
      //     that.$vux.loading.hide()
      //     that.$emit('geturl',that.url)
      // })
    },
    // 从相册添加文件
    Gallery () {
      let that = this
      console.log('开始相册：')
      that.$vux.loading.show('上传中')
    	plus.gallery.pick(function (p) {
        that.appendFile(p, false, (url) => {
          that.url = url
          that.$vux.loading.hide()
          that.$emit('geturl', that.url)
        })
      }, function (error) {
        console.log('Capture image failed: ' + error.message)
        that.$vux.loading.hide()
      })
    },
    appendFile (path, size, callback) {
      var _this = this
      var img = new Image()
      img.src = path // 传过来的图片路径在这里用。
      console.log(size)
      img.onload = function () {
        var that = this // 这里是image对象
        // 生成比例
        var w = that.width
        var h = that.height
        var scale = w / h
        w = _this.reduce || w // 480  你想压缩到多大，改这里
        h = w / scale
        console.log('宽' + w + '高' + h)
        // 生成canvas
        var canvas = document.createElement('canvas')
        var ctx = canvas.getContext('2d')
        canvas.setAttribute('width', w)
        canvas.setAttribute('height', h)
        ctx.drawImage(that, 0, 0, w, h)
        var base64 = canvas.toDataURL('image/jpeg', 1) // 1最清晰，越低越模糊。有一点不清楚这里明明设置的是jpeg。弹出 base64 开头的一段 data：image/png;却是png。哎开心就好，开心就好
        callback(base64)
      }
    }
    // getBase64(file,callback){
    //         var maxWidth = 640;
    //         if(file.files && file.files[0]){
    //             var thisFile = file.files[0];
    //             // if(thisFile.size>2019200){
    //             //   this.$vux.toast.show({
    //             //     text:'图片不能超过2M',
    //             //     type:'cancel',
    //             //     position:'middle'
    //             //   })
    //             //     // mualert.alertBox("图片不能超过800K");
    //             //     return
    //             // };
    //             var reader = new FileReader();
    //             reader.onload = function(event){
    //                 var imgUrl = event.target.result;
    //                 var img = new Image();
    //                 img.onload = function(){
    //                     var canvasId = 'canvasBase64Imgid',
    //                     canvas = document.getElementById(canvasId);
    //                     if(canvas!=null){document.body.removeChild(canvas);}
    //                     var canvas = document.createElement("canvas");
    //                     canvas.innerHTML = 'New Canvas';
    //                     canvas.setAttribute("id", canvasId);
    //                     canvas.style.display='none';
    //                     document.body.appendChild(canvas);
    //                     canvas.width = this.width;
    //                     canvas.height = this.height;
    //                     var imageWidth = this.width,
    //                     imageHeight = this.height;
    //                     if (this.width > maxWidth){
    //                         imageWidth = maxWidth;
    //                         imageHeight = this.height * maxWidth/this.width;
    //                         canvas.width = imageWidth;
    //                         canvas.height = imageHeight;
    //                     }
    //                     var context = canvas.getContext('2d');
    //                     context.clearRect(0, 0, imageWidth, imageHeight);
    //                     context.drawImage(this, 0, 0, imageWidth, imageHeight);
    //                     var base64 = canvas.toDataURL('image/png',1);
    //                     var imgbase = base64.substr(22);
    //                     callback(imgbase)
    //                     //this.imgUrl =
    //                 }
    //                 img.src = imgUrl;
    //             }
    //             reader.readAsDataURL(file.files[0]);
    //         }
    //     },
  }
}
</script>

<style lang="css" scoped>
  .upload{
    position: relative;
  }
 .upload>input{
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
}
.show_img{
  display: block;
  width: 100%;
  height: auto;
}
</style>
