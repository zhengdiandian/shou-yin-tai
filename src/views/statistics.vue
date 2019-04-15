<template>
	<div class="statistics">
		<uni-nav-bar leftText='收入统计'  leftIcon="back" @clickLeft="back" @clickRight="right" class="header">
			<icons2 type="iconshaixuan1" :size="30" color="#fff" slot="right"></icons2>
		</uni-nav-bar>
		<van-tabs v-model="active" class="bar" title-active-color="#059ADC" color="#059ADC" :line-height="1" >
		  <van-tab title="日报">
			  <div class="info flex-x-center">
				  <div class="info_header flex-column">
					  <div class="info_title">共收到</div>
					  <div class="info_amonut_span">￥<span class="info_amount">220.00</span></div>
				  </div>
			  </div>
			  <div class="pay">
				  <p class="pay_title">支付宝</p>
				  <div class="pay_statistics">
					  <div class="flex-space-between">
						  <span>收款笔数</span>
						  <span>收款总金额</span>
					  </div>
					  <div class="flex-space-between pay_amount">
							<span>1</span>
							<span>￥<span class="info_amount">20.00</span></span>
					  </div>
				  </div>
			  </div>
			   <div class="pay">
				  <p class="pay_title">微信</p>
				  <div class="pay_statistics">
					  <div class="flex-space-between">
						  <span>收款笔数</span>
						  <span>收款总金额</span>
					  </div>
					  <div class="flex-space-between pay_amount">
							<span>1</span>
							<span>￥<span class="info_amount">20.00</span></span>
					  </div>
				  </div>
			  </div>
		  </van-tab>
		  <van-tab title="月报">
			  <div class="info flex-x-center">
				  <div class="info_header flex-column">
					  <div class="info_title">共收到</div>
					  <div class="info_amonut_span">￥<span class="info_amount">220.00</span></div>
				  </div>
			  </div>
			  <div class="pay">
				  <p class="pay_title">支付宝</p>
				  <div class="pay_statistics">
					  <div class="flex-space-between">
						  <span>收款笔数</span>
						  <span>收款总金额</span>
					  </div>
					  <div class="flex-space-between pay_amount">
							<span>1</span>
							<span>￥<span class="info_amount">20.00</span></span>
					  </div>
				  </div>
			  </div>
			   <div class="pay">
				  <p class="pay_title">微信</p>
				  <div class="pay_statistics">
					  <div class="flex-space-between">
						  <span>收款笔数</span>
						  <span>收款总金额</span>
					  </div>
					  <div class="flex-space-between pay_amount">
							<span>1</span>
							<span>￥<span class="info_amount">20.00</span></span>
					  </div>
				  </div>
			  </div>
		  </van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  mounted () {
    if (window.localStorage.getItem('statisticsFiltrate')) {
      console.log(window.localStorage.getItem('statisticsFiltrate'))
      console.log('取到缓存')
    } else {
      console.log('没取到缓存')
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    right () {
      this.$router.push({
        path: '/views/statistics/filtrate'
      })
    }
  }
}
</script>

<style scoped="true" lang="scss">
	.statistics{
		width: 375px;
		.info{
			width: 375px;
			height: 161px;
			line-height: 20px;
			background: #fff;
			color: rgba(112, 112, 112, 1);
			font-size: 14px;
			text-align: center;
			font-family: PingFangSC-regular;
			.info_title{
				padding-top: 36px;
			}
			.info_amonut_span{
				width: 129px;
				height: 40px;
				padding-bottom: 54px;
				padding-top: 11px;
				color: rgba(16, 16, 16, 1);
				font-size: 28px;
				text-align: left;
				font-family: PingFangSC-regular;
			}

		}
		.pay{
			.pay_title{
				padding: 10px 12px;
				margin: 0;
				color: rgba(16, 16, 16, 1);
				font-size: 14px;
				text-align: left;
				font-family: PingFangSC-regular;
			}
			.pay_statistics{
				padding: 12px;
				line-height: 20px;
				text-align: center;
				background: #fff;
				color: rgba(16, 16, 16, 1);
				font-size: 14px;
				font-family: PingFangSC-regular;
				.pay_amount{
					height: 40px;
					line-height: 40px;
					color: rgba(16, 16, 16, 1);
					font-size: 28px;
				}
			}
		}
		.info_amount{
			padding-left: 5px;
		}
	}

</style>
