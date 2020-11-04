<template>
  <el-rate
    class="c_t_rate"
    v-model="value"
    :icon-classes="iconClasses"
    void-icon-class="iconfont icon-pingfendengjiRating4"
    :colors="['#FF3722', '#FFCE00','#00B67A']">
  </el-rate>
</template>
<script>
export default {
  name:'rate',
  props:{
    value:{
      type:Number,
      default:null
    }
  },
  data(){
    return{
      iconClasses: ['iconfont icon-pingfendengjiRating4', 'iconfont icon-pingfendengjiRating4', 'iconfont icon-pingfendengjiRating4'],
    }
  },
}
</script>
<style lang="less" scoped>
</style>