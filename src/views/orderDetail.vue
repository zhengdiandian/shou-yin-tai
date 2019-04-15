<template>
	<div class="orderDetail">
		<uni-nav-bar leftText='账单详情' leftIcon="back" @clickLeft="back"></uni-nav-bar>
		<div class="header_div flex-y-center flex-x-center">
			<div class="flex-row flex-y-center header_icon">
				<icons2 :colour="false" type="iconzhifubao" :size="40"></icons2>
				<span class="header_text">支付宝收款</span>
			</div>
			<div class="flex-row header_amount flex-y-center">
				<span>￥</span>
				<span class="header_text">20.00</span>
			</div>
		</div>
		<div class="body_detail">
			<div class="flex-space-between list_detail">
				<span>当前状态</span>
				<span>收款完成</span>
			</div>
			<div class="flex-space-between list_detail">
				<span>收款时间</span>
				<span>2019-04-02 15:33:22</span>
			</div>
			<div class="flex-space-between list_detail">
				<span>交易说明</span>
				<span>商品</span>
			</div>
			<div class="flex-space-between list_detail">
				<span>收款单号</span>
				<span>2018040215332255848585</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped="true"  lang="scss">
.orderDetail{
	width: 375px;
	text-align: center;
	color: rgba(16, 16, 16, 1);
	overflow: hidden;
	.header_div{
		padding: 35px 0;
		display: flex;
		flex-direction: column;
		.header_icon{
			height: 40px;
			margin-bottom: 15px;
		}
		.header_amount{
			font-size: 36px;
		}
		.header_text{
			margin-left: 15px;
		}
	}
	.body_detail{
		padding: 0 12px;
		.list_detail{
			width: 351px;
			height: 40px;
			line-height: 20px;
			text-align: center;
			color: rgba(16, 16, 16, 1);
			font-size: 14px;
			font-family: PingFangSC-regular;
		}
	}
}
</style>
