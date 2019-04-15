<template>
	<div class="uni-status-bar" :style="{ height: statusBarHeight }"><slot></slot></div>
</template>

<script>
var statusBarHeight = '44px';
export default {
	name: 'uni-status-bar',
	data() {
		return {
			statusBarHeight: statusBarHeight
		};
	}
};
</script>

<style>
.uni-status-bar {
	display: block;
	width: 100%;
	height: 20px;
}
</style>
