<template>
  <div class="wrap">
    <div class="content">
      <label v-html="label" > </label>
      <input v-model="val.value" type="text" name id :placeholder="placeholder">
    </div>
  </div>
</template>
<script>
export default {
  name: 'myInput',
  props: [
    'label',
    'placeholder',
    'val'
  ],
  data () {
    return {
      test: '姓&emsp;&emsp;名: '
    }
  }

}
</script>

<style lang="scss" scope="true">
.wrap {
  box-sizing: border-box;
  width: $gw;
  height: 50px;
  line-height: 50px;
    border-bottom: 1px solid transparent;

  .content {
    display: flex;
    box-sizing: border-box;
    // margin: 0 12px;
    margin-left: 12px;
    border-bottom: 1px solid $hui;
  }
}
label {
    min-width: 70px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
input {
  width: auto;
  // padding: 15px 0;
  // padding: 6px;
  flex: 3;
  border: none;
  outline: none;
  background-color: transparent;
}
</style>
