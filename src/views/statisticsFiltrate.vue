<template>
	<div class="statisticsFiltrate">
		<uni-nav-bar leftText='选择时间'  leftIcon="back" rightText="确定" @clickLeft="back" @clickRight="rigth" class="header"></uni-nav-bar>
		<div>
			<Calendar
			  v-on:choseDay="clickDay"
			  v-on:changeMonth="changeDate"
			  :futureDayHide="nowdate"
			  class="calendar"
			></Calendar>
		</div>
	</div>
</template>

<script>
/**
 * npm i vue-calendar-component --save
 * 使用的是网上第三方插件
 * vue-calendar-component
	基于 vue 2.0 开发的轻量，高性能日历组件
	占用内存小，性能好，样式好看，可扩展性强
	原生 js 开发，没引入第三方库
	转载至：https://github.com/zwhGithub/vue-calendar
 */
import Calendar from 'vue-calendar-component'

export default {

  data () {
    return {
      time: undefined,
      nowdate: ''
    }
  },
  mounted () {
    // this.handleSwitch(this.$refs.calendar.showDate);
    this.nowdate = String((new Date()).getTime())
    this.nowdate = this.nowdate.substring(0, 10)
    // this.nowdate = String(1554967923);
    console.log(this.nowdate)
  },
  components: {
    Calendar
	  },
  methods: {
    back () {
      this.$router.back()
    },
    rigth () {
      if (this.time) {
        window.localStorage.setItem('statisticsFiltrate', this.time)
        this.$router.back()
      } else {
        this.$dialog.alert({
				  message: '请选择要查询的时间'
        })
      }
    },
    clickDay (data) {
		  console.log(data) // 选中某天
		  this.time = data
    },
    changeDate (data) {
		  console.log(data) // 左右点击切换月份
    }
  }
}
</script>

<style scoped="true" lang="css">
	.calendar >>> .wh_content_all{
		background: #fff;
	}
	.calendar >>> .wh_jiantou1{
		border-top: 2px solid #101010;
		border-left: 2px solid #101010;
	}
	.calendar >>> .wh_jiantou2{
		border-top: 2px solid #101010;
		border-right: 2px solid #101010;
	}
	.calendar >>> .wh_content_li{
		color: #101010;
	}
	.calendar >>> .wh_content_item{
		color: #101010;
	}
	.calendar >>> .wh_isToday{
		background: #eaeaea;
	}
	.calendar >>> .wh_chose_day{
		background: rgb(5, 154, 220);
	}
</style>
