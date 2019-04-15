<template>
  <div>
    <div class="bar"  @click="$router.go(-1)">
      <icons color="#101010" type="fanhui" :size="16"></icons>
      {{title}}
    </div>
    <div style="padding-bottom: 44px"></div>
  </div>

</template>
<script>
export default {
  name: 'backBar',
  props: {
    title: {
      type: String,
      default: '返回'

    }
  }
}
</script>

<style lang="scss" scoped>
.bar {
  position: absolute;
  z-index: 999;
  top: 0px;
  left: 0px;
  width: 375px;
  height: 44px;
  font-size: 16px;
  color: #ffffff;
  line-height: 44px;
  background-color: rgba(5, 154, 220, 1);
  text-align: left;
  .iconfont.icon-fanhui{
  margin-left: 9px;
  color: #FFF !important;
  display: inline-block;
}
}
</style>
