<template>
	<div class="orderList">
		<uni-nav-bar leftText='收款记录' rightText="收入统计" leftIcon="back" @clickLeft="back" @clickRight="right" class="header"></uni-nav-bar>
		<van-pull-refresh v-model="isLoading" @refresh="refresh" class="">
			<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="infinite" class="scroll_vant">
				<div v-for="(value,key) in list" :key="key" class="list_item">
					<div class="lsit_time flex-space-between flex-y-center">
						<span>2019年4月2日（今天）</span>
						<div v-if="key == 0"  @click="urlTo('/views/orderList/orderListFiltrate')"><icons2 type="iconshaixuan1" :size="30" :colour="false"></icons2></div>
						<div v-else="key == 0"></div>
					</div>
					<div class="uni-list">
						<div class="uni-list-cell flex-space-between" v-for="(item,key2) in value.list" :key="key2" hover-class="uni-list-cell-hover" @click="urlTo('/views/orderList/orderDetail')">
							<div class="uni-media-list-left flex-space-between">
								<icons2 :colour="false" type="iconzhifubao" :size="30"></icons2>
								<div class="left_5">
									<div class="title">{{item.payment}}</div>
									<div class="flex-row span_12">
										<span>{{item.date}}</span>
										<div class="left_10 flex-row"><span>订单后四位：</span><span>{{item.order_id_tail}}</span></div>
									</div>
								</div>
							</div>
							<div class="uni-media-list-right">
								<div class="right">
									<span class="span_right">￥{{item.amount}}</span>
									<span class="span_12 order_state"  :class="item.type != 0 ? 'color_707070' : ''">{{item.remark}}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</van-list>
		</van-pull-refresh>
	</div>
</template>

<script>
// @ is an alias to /src
import { List, PullRefresh } from 'vant'
export default {
  data () {
  	return {
      loading: false,
      finished: false,
      isLoading: false,
      pages: 1,
      pages_size: 10,
  		list: [
  			{
          date: '2019-4-9(今天)',
          list: [
            {
              type: 1,
              remark: '未支付',
              date: '09:07:21',
              order_id_tail: 110,
              amount: 0.02,
              payment: '微信支付收款'
            },
            {
              type: 2,
              remark: '已关闭',
              date: '09:07:21',
              order_id_tail: 110,
              amount: 0.02,
              payment: '微信支付收款'
            },
            {
              type: 3,
              remark: '已撤销',
              date: '09:07:21',
              order_id_tail: 110,
              amount: 0.02,
              payment: '微信支付收款'
            },
            {
              type: 4,
              remark: '转入退款',
              date: '09:07:21',
              order_id_tail: 110,
              amount: 0.02,
              payment: '微信支付收款'
            },
            {
              type: 0,
              remark: '收款成功',
              date: '09:07:21',
              order_id_tail: 110,
              amount: 0.02,
              payment: '微信支付收款'
            }
          ]
        }
  		],
      list2: [
        {
          date: '2019-4-9(今天)',
          list: [
            {
              type: 1,
              remark: '未支付',
              date: '09:07:21',
              order_id_tail: 110,
              amount: 0.02,
              payment: '微信支付收款'
            },
            {
              type: 2,
              remark: '已关闭',
              date: '09:07:21',
              order_id_tail: 110,
              amount: 0.02,
              payment: '微信支付收款'
            },
            {
              type: 3,
              remark: '已撤销',
              date: '09:07:21',
              order_id_tail: 110,
              amount: 0.02,
              payment: '微信支付收款'
            },
            {
              type: 4,
              remark: '转入退款',
              date: '09:07:21',
              order_id_tail: 110,
              amount: 0.02,
              payment: '微信支付收款'
            },
            {
              type: 0,
              remark: '收款成功',
              date: '09:07:21',
              order_id_tail: 110,
              amount: 0.02,
              payment: '微信支付收款'
            }
          ]
        }
      ]
  	}
  },
  components: {
	  [List.name]: List,
	  [PullRefresh.name]: PullRefresh
  },
  mounted () {
	  if (window.localStorage.getItem('orderListFiltrate')) {
		  console.log('获取到缓存')
		  console.log(window.localStorage.getItem('orderListFiltrate'))
	  } else {
		  console.log('没有获取到缓存')
	  }
  },
  methods: {
  	urlTo (e) {
  		console.log('点击事件')
      this.$router.push({
        path: e
      })
  	},
    back () {
      this.$router.back()
    },
    right () {
      // 跳转统计页面
      this.$router.push({
        path: '/views/statistics'
      })
    },
    get_data () {
      this.list = this.list.concat(this.list2)
    },
    refresh () {
      // 下拉刷新
      console.log('刷新')
      let that = this
      setTimeout(() => {
        that.page = 1
        that.finished = false
        that.get_data()
        that.finished = true
        that.isLoading = false
      }, 1000)
    },
    infinite () {
      // 上拉加载
      console.log('加载')
      let that = this
      setTimeout(() => {
        that.get_data()
        that.finished = true
      }, 1000)
      that.loading = false
    }
  }
}
</script>
<style lang="scss" scoped>
.orderList{
	width: 375px;
	text-align: center;
	.header{
		position: fixed;
		top: 0;
		left: 0;
		width: 375px;
		z-index: 500;
	}
	.scroll_vant{
		margin-top: 44px;
	}
	.lsit_time{
		height: 50px;
		padding: 0 12px;
	}
	.uni-list{
		padding: 12px;
		padding-top: 0;
		&::before{
			background-color: #fff!important;
		}
	}
	.uni-list-cell-hover {
		background-color: #eee;
	}
	.uni-list-cell{
		background-color: #FFFFFF;
		height: 70px;
		line-height: 20px;
		color: rgba(16, 16, 16, 1);
		font-size: 16px;
		font-family: PingFangSC-regular;
		&::after{
			    position: absolute;
				z-index: 1;
				right: 0;
				left: 0;
				height: 1px;
				content: "";
				-webkit-transform: scaleY(.5);
				transform: scaleY(.5);
				background-color: #c8c7cc;
		}
		.left_5{
			margin-top: 17px;
			margin-left: 7px;
			.title{
				height: 23px;
				color: rgba(16, 16, 16, 1);
				font-size: 16px;
				text-align: left;
				font-family: PingFangSC-regular;
			}
			.left_10{
				margin-left: 10px;
			}
		}
		.uni-media-list-right{
			display: flex;
			align-items:center;
			.right{
				display: flex;
				flex-direction: column;
				text-align: right;
				.span_right{
					width: 66px;
					height: 26px;
					color: rgba(16, 16, 16, 1);
					font-size: 18px;
					text-align: right;
					font-family: PingFangSC-regular;
				}
				.order_state{
					height: 17px;
					color: rgba(5, 154, 220, 1);
					font-size: 12px;
					text-align: right;
					font-family: PingFangSC-regular;
				}
			}
		}
		.span_12{
			font-size: 12px;
		}
	}

}
.color_707070{
	color: rgba(112, 112, 112, 0.97)!important;
}
</style>
