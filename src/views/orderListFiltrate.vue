<template>
	<div class="orderListFiltrate">
		<uni-nav-bar leftText='自定义查询'  leftIcon="back" @clickLeft="back" class="header"></uni-nav-bar>
		<div class="info">
			<div class="flex-row list">
				<div class="title">开始时间：</div>
				<div class="value" @click="time_click(1)">{{stard_time}}</div>
			</div>
			<div class="flex-row list">
				<div class="title">结束时间：</div>
				<div class="value" @click="time_click(2)">{{end_time}}</div>
			</div>
			<div class="flex-row list">
				<div class="title">收款方式：</div>
				<div class="value" @click="pay_click(1)">{{pay_type}}</div>
			</div>
			<div class="flex-row list">
				<div class="title">收款状态：</div>
				<div class="value" @click="pay_click(2)">{{pay_state}}</div>
			</div>
			<div class="flex-x-center list" @click="submit_btn">
				<div class="btn">查询</div>
			</div>
		</div>
		<van-popup v-model="show_1" class="popup" position="bottom">
			<van-datetime-picker
			  v-model="currentDate"
			  type="date"
			  :max-date="maxDate"
			  @confirm="confirm"
			  @cancel="cancel"
			/>
		</van-popup>
		<van-popup v-model="show_2" class="popup" position="bottom">
			<van-picker
			  show-toolbar
			  :columns="columns"
			  @cancel="onCancel"
			  @confirm="onConfirm"
			/>
		</van-popup>
	</div>
</template>

<script>

export default {

  data () {
    return {
      show_1: false,
      show_2: false,
      currentDate: new Date(),
      maxDate: new Date(),
      time_type: 0,
      proceeds_type: 0,
      stard_time: '请选择时间',
      end_time: '请选择时间',
      columns: [],
      columns_type: ['全部', '微信', '支付宝'],
      pay_type: '全部',
      pay_type_key: '',
      columns_state: ['全部', '收款成功', '收款失败'],
      pay_state: '全部',
      pay_state_key: ''
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    time_click (e) {
      this.show_1 = true
      this.time_type = e
    },
    pay_click (e) {
      this.proceeds_type = e
      if (e == 1) {
        this.columns = this.columns_type
      }
      if (e == 2) {
        this.columns = this.columns_state
      }
      this.show_2 = true
    },
    confirm (e) {
      if (this.time_type == 1) {
        this.stard_time = this.set_time(e)
      }
      if (this.time_type == 2) {
        this.end_time = this.set_time(e)
      }
      this.show_1 = false
    },
    onConfirm (value, ley) {
      if (this.proceeds_type == 1) {
        this.pay_type = value
        console.log(value)
      }
      if (this.proceeds_type == 2) {
        this.pay_state = value
      }
      this.show_2 = false
    },
    cancel () {
      this.show_1 = false
    },
    onCancel () {
      this.show_2 = false
    },
    submit_btn () {
      let obj = {
        stard_time: this.stard_time == '请选择时间' ? '' : this.stard_time,
        end_time: this.end_time == '请选择时间' ? '' : this.end_time,
        pay_type: this.pay_type_key,
        pay_state: this.pay_state_key
      }
      window.localStorage.setItem('orderListFiltrate', JSON.stringify(obj))
      this.$router.back()
    },
    set_time (time) {
      /**
			 * 格式化时间：yy-mm-dd
			 */
      let y = time.getFullYear()
      let m = time.getMonth() + 1
      let d = time.getDate()
      return y + '-' + m + '-' + d
    }
  }
}
</script>

<style scoped="true" lang="scss">
	.orderListFiltrate{
		width: 375px;
		.info{
			width: 375px;
			background: #fff;
			.list{
				padding: 15px 12px;
				border-bottom: 1px solid rgba(187, 187, 187, 1);
				line-height: 20px;
				text-align: center;
				color: rgba(16, 16, 16, 1);
				font-size: 14px;
				font-family: PingFangSC-regular;
				.title{
					padding-right: 24px;
				}
				.value{
					flex-grow:1;
					color: rgba(112, 112, 112, 1);
					font-size: 14px;
					text-align: left;
					font-family: PingFangSC-regular;
				}
				.btn{
					width: 32px;
					height: 23px;
					margin: 0;
					color: rgba(5, 154, 220, 1);
					font-size: 16px;
					font-family: PingFangSC-regular;
				}
			}
		}
	}
</style>
