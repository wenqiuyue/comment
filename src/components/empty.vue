<template>
  <div class="empty">
    <svg-icon value="icon-wushuju" :size="8"></svg-icon>
    <p>{{tips}}</p>
  </div>
</template>
<script>
export default {
  name:"empty",
  props:{
    tips:{
      type:String,
      default:null
    }
  }
}
</script>
<style lang="less" scoped>
.empty{
  padding: 5rem;
  text-align: center;
  p{
    color: #aaaaaa;
  }
}
</style>