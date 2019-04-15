<template>
	<div class="uni-navbar">
		<div class="uni-navbar__content" :class="{'uni-navbar--fixed': !!fixed,'uni-navbar--shadow':!!border,'uni-navbar--border':!!border}"
		 :style="{'background-color':backgroundColor}">
			<uni-status-bar v-if="statusBar"></uni-status-bar>
			<div class="uni-navbar__header" :style="{color:color}">
				<div class="uni-navbar__header-btns" @click="onClickLeft">
					<div v-if="leftIcon.length">
						<icons color="#fff" type="fanhui" :size="16"></icons>
					</div>
					<div v-if="leftText.length" class="uni-navbar-btn-text" :class="{'uni-navbar-btn-icon-left':!leftIcon.length}">{{leftText}}</div>
					<slot name="left"></slot>
				</div>
				<div class="uni-navbar__header-container">
					<div v-if="title.length" class="uni-navbar__header-container-inner">{{title}}</div>
					<!-- 标题插槽 -->
					<slot></slot>
				</div>
				<div class="uni-navbar__header-btns" @click="onClickRight">
					<div v-if="rightIcon.length">
						<uni-icon :type="rightIcon" :color="color" size="24"></uni-icon>
					</div>
					<!-- 优先显示图标 -->
					<div v-if="rightText.length&&!rightIcon.length" class="uni-navbar-btn-text">{{rightText}}</div>
					<slot name="right"></slot>
				</div>
			</div>
		</div>
		<div class="uni-navbar__placeholder" v-if="fixed">
			<uni-status-bar v-if="statusBar"></uni-status-bar>
			<div class="uni-navbar__placeholder-div"></div>
		</div>
	</div>
</template>

<script>
	import uniStatusBar from '../uni-status-bar/uni-status-bar.vue'
	import uniIcon from '../uni-icon/uni-icon.vue'

	export default {
		name: 'uni-nav-bar',
		components: {
			uniStatusBar,
			uniIcon
		},
		props: {
			title: {
				type: String,
				default: ''
			},
			leftText: {
				type: String,
				default: ''
			},
			rightText: {
				type: String,
				default: ''
			},
			leftIcon: {
				type: String,
				default: ''
			},
			rightIcon: {
				type: String,
				default: ''
			},
			fixed: {
				type: [Boolean, String],
				default: false
			},
			color: {
				type: String,
				default: '#fff'
			},
			backgroundColor: {
				type: String,
				default: '#059ADC'
			},
			statusBar: {
				type: [Boolean, String],
				default: false
			},
			shadow: {
				type: [String, Boolean],
				default: true
			},
			border: {
				type: [String, Boolean],
				default: true
			}
		},
		methods: {
			onClickLeft() {
				this.$emit('clickLeft')
			},
			onClickRight() {
				this.$emit('clickRight')
			}
		}
	}
</script>

<style lang="scss">
	$nav-height:44px;

	.uni-navbar {
		&__content {
			display: block;
			position: relative;
			width: 100%;
			background-color: $uni-bg-color;
			overflow: hidden;
			padding: 0 10px;
			div {
				line-height: $nav-height;
			}
		}

		&__header {
			display: flex;
			flex-direction: row;
			width: 100%;
			height: $nav-height;
			line-height: $nav-height;
			font-size: 16px;

			&-btns {
				display: inline-flex;
				flex-wrap: nowrap;
				flex-shrink: 0;
				padding: 0 6px;

				&:first-child {
					padding-left: 0;
				}
			}

			&-container {
				width: 100%;
				margin: 0 5px;

				&-inner {
					font-size: 15px;
					text-align: center;
					padding-right: 30px;
				}
			}
		}

		&__placeholder {
			&-div {
				height: $nav-height;
			}
		}
		
		&--fixed {
			position: fixed;
			z-index: 998;
		}

		&--shadow {
			box-shadow: 0 1px 6px #ccc;
		}

		&--border:after {
			position: absolute;
			z-index: 3;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1px;
			content: '';
			-webkit-transform: scaleY(.5);
			transform: scaleY(.5);
			background-color: $uni-border-color;
		}
	}
</style>
