<template>
  <div class="wrap" @click="show =!show">
    <div class="content">
      <label v-html="label"></label>
      <div class="select">
        <div class="placeholder">{{placeholder}}</div>
        <icons class="icons" color="#059ADC" type="gengduo" :size="14"></icons>
      </div>
    </div>
    <vue-pickers
      :show="show"
      :columns="columns"
      :defaultData="defaultData"
      :selectData="selectData"
      @cancel="cancel"
      @confirm="confirm"
    ></vue-pickers>
  </div>
</template>
<script>
import vuePickers from '../vuePickers/vuePicker'
import Icons from '../icons'
export default {
  name: 'myInput',
  props: ['label', 'placeholder', 'val', 'columns', 'selectData', 'cancel', 'confirm'],
  components: {
    vuePickers,
    Icons
  },
  data () {
    return {
      show: false,
      // columns: 1,
      defaultData: [
        {
          text: 1999,
          value: 1999
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.wrap {
  box-sizing: border-box;
  width: $gw;
  position: relative;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid transparent;

  .content {
    // width: $gw;
    display: flex;
    // justify-content: space-around;
    box-sizing: border-box;
    // margin: 0 12px ;
    margin-left: 12px;
    padding-right: 12px;

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

.select {
  flex: 1;
  height: 50px;
  display: flex;
  // width: 100%;
  // align-items: center;
  justify-content: space-between;
  .placeholder {
    flex: 2;
    align-self: center;
    box-sizing: border-box;
    vertical-align: middle;
    // line-height: 38px;
    padding: 6px;
    font-size: 14px;
    color: rgba(112, 112, 122, 0.97);
    // flex: 3;
  }
}
.icons {
  display: inline-block;
  vertical-align: middle;
  transform: rotate(90deg);
  // width: 24px;
  // height: 24px;
  align-self: center;
}
</style>
