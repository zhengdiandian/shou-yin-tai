<template>
	<div class="uni-load-more">
		<div class="uni-load-more__img" v-show="status === 'loading' && showIcon">
			<div class="load1">
				<div :style="{background:color}"></div>
				<div :style="{background:color}"></div>
				<div :style="{background:color}"></div>
				<div :style="{background:color}"></div>
			</div>
			<div class="load2">
				<div :style="{background:color}"></div>
				<div :style="{background:color}"></div>
				<div :style="{background:color}"></div>
				<div :style="{background:color}"></div>
			</div>
			<div class="load3">
				<div :style="{background:color}"></div>
				<div :style="{background:color}"></div>
				<div :style="{background:color}"></div>
				<div :style="{background:color}"></div>
			</div>
		</div>
		<text class="uni-load-more__text" :style="{color:color}">{{status === 'more' ? contentText.contentdown : (status === 'loading' ? contentText.contentrefresh : contentText.contentnomore)}}</text>
	</div>
</template>

<script>
export default {
  name: 'uni-load-more',
  props: {
    status: {
      // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
      type: String,
      default: 'more'
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#777777'
    },
    contentText: {
      type: Object,
      default () {
        return {
          contentdown: '上拉显示更多',
          contentrefresh: '正在加载...',
          contentnomore: '没有更多数据了'
        }
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center;

		&__text {
			font-size: 28upx;
			color: $uni-text-color-grey;
		}

		&__img {
			height: 24px;
			width: 24px;
			margin-right: 10px;

			&>div {
				position: absolute;

				div {
					width: 6px;
					height: 2px;
					border-top-left-radius: 1px;
					border-bottom-left-radius: 1px;
					background: $uni-text-color-grey;
					position: absolute;
					opacity: 0.2;
					transform-origin: 50%;
					animation: load 1.56s ease infinite;

					&:nth-child(1) {
						transform: rotate(90deg);
						top: 2px;
						left: 9px;
					}

					&:nth-child(2) {
						transform: rotate(180deg);
						top: 11px;
						right: 0px;
					}

					&:nth-child(3) {
						transform: rotate(270deg);
						bottom: 2px;
						left: 9px;
					}

					&:nth-child(4) {
						top: 11px;
						left: 0px;
					}
				}
			}
		}
	}

	.load1,
	.load2,
	.load3 {
		height: 24px;
		width: 24px;
	}

	.load2 {
		transform: rotate(30deg);
	}

	.load3 {
		transform: rotate(60deg);
	}

	.load1 div:nth-child(1) {
		animation-delay: 0s;
	}

	.load2 div:nth-child(1) {
		animation-delay: 0.13s;
	}

	.load3 div:nth-child(1) {
		animation-delay: 0.26s;
	}

	.load1 div:nth-child(2) {
		animation-delay: 0.39s;
	}

	.load2 div:nth-child(2) {
		animation-delay: 0.52s;
	}

	.load3 div:nth-child(2) {
		animation-delay: 0.65s;
	}

	.load1 div:nth-child(3) {
		animation-delay: 0.78s;
	}

	.load2 div:nth-child(3) {
		animation-delay: 0.91s;
	}

	.load3 div:nth-child(3) {
		animation-delay: 1.04s;
	}

	.load1 div:nth-child(4) {
		animation-delay: 1.17s;
	}

	.load2 div:nth-child(4) {
		animation-delay: 1.30s;
	}

	.load3 div:nth-child(4) {
		animation-delay: 1.43s;
	}

	@-webkit-keyframes load {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0.2;
		}
	}
</style>
