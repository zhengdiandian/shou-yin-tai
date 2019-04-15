<template>
  <div class="iconfont" :class="type" :style="{color:color,'font-size':fontSize}" @click="click()" v-if="colour"></div>
	<svg v-else class="svg" :style="'width:'+size+'px'">
	    <use :xlink:href="'#'+type"></use>
	</svg>
</template>

<script>
import '@/assets/iconfont/iconfont.js'
export default {
  props: {
    /**
       * 图标类型
       */
    type: String,
    /**
       * 图标颜色
       */
    color: String,
    /**
       * 图标大小
       */
    size: Number,
    /**
		 * 是否支持多色图片
		 */
    colour: {
      default: true
    }
  },
  computed: {
    fontSize () {
      return `${this.size}px`
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped="true" lang="scss">

  @font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1129487_lx734grojwj.eot?t=1554702498582'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1129487_lx734grojwj.eot?t=1554702498582#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1129487_lx734grojwj.woff?t=1554702498582') format('woff'),
  url('//at.alicdn.com/t/font_1129487_lx734grojwj.ttf?t=1554702498582') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1129487_lx734grojwj.svg?t=1554702498582#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconshouyintai:before {
  content: "\e61e";
}

.iconweixinzhifu:before {
  content: "\e61f";
}

.iconwen:before {
  content: "\e620";
}

.iconyou:before {
  content: "\e621";
}

.iconshoukuanjilu:before {
  content: "\e622";
}

.iconweixinzhifuhui:before {
  content: "\e623";
}

.iconyonghuxinxi:before {
  content: "\e624";
}

.iconbohui:before {
  content: "\e625";
}

.iconzhifubao:before {
  content: "\e626";
}

.iconjia:before {
  content: "\e627";
}

.iconshaixuan:before {
  content: "\e628";
}

.iconzhifubaohui:before {
  content: "\e629";
}

.iconchenggong:before {
  content: "\e62a";
}

.iconshaixuan1:before {
  content: "\e62b";
}

.iconshenhetongguo:before {
  content: "\e62c";
}

.iconxing:before {
  content: "\e62d";
}

.icondaishenhe:before {
  content: "\e62e";
}

  .iconfont{
    display: flex;
  }
</style>
