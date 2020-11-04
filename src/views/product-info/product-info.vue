<template>
  <div class="product-info">
    <header-com></header-com>
    <div class="p_product-info">
      <div class="p_product-info_top">
        <div class="p_info_t_container">
          <div class="return"><span><i class="el-icon-arrow-left"></i>Animals & Pets</span></div>
          <h2>2 result(s) for "WHB Product"</h2>
          <h5>Find the right products for you and your internet business.</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.product-info{
  height: 100%;
  .p_product-info{
    background: #f2f2f5;
    height: calc(100% - 72px);
    overflow: auto;
    .p_product-info_top{
      background: #ffffff;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 50, 0.04);
      .p_info_t_container{
          max-width: 1056px;
          margin-left: auto;
          margin-right: auto;
          padding: 18px 16px;
          h2{
            margin: 0;
          }
          h5{
            margin: 5px 0 0 0;
            font-size: 16px;
            color: #aaa;
            font-weight: normal;
          }
          .return{
            span{
              cursor: pointer;
              font-size: 0.875rem;
              color: #1b1b21;
              &:hover{
                color:#1989fa;
              }
            }
          }
        }
    }
  }
}
</style>