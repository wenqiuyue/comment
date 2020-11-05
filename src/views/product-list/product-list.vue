<template>
  <div class="product-list">
    <header-com></header-com>
    <div class="p_product-list">
      <div class="p_product-list_top">
        <div class="p_l_t_container">
          <div class="return"><span><i class="el-icon-arrow-left"></i>Animals & Pets</span></div>
          <h2>2 result(s) for "WHB Product"</h2>
          <h5>Find the right products for you and your internet business.</h5>
        </div>
      </div>
      <div class="p_product-list_container">
        <div class="list_card" v-for="item in 8" :key="item">
          <el-image
            style="width: 100px; height: 100px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover">
          </el-image>
          <div class="list_card_right">
            <div>
              <span class="l_c_r_title" @click="handleProductInfo">Paw Print Genetics</span>
            </div>
            <div class="l_c_r_score">
              <el-rate
                class="c_t_rate"
                v-model="value"
                :icon-classes="iconClasses"
                void-icon-class="iconfont icon-pingfendengjiRating4"
                :colors="['#FF3722', '#FFCE00','#00B67A']">
              </el-rate>
              <span class="score_num">836 reviews</span>
              <el-tag type="primary" size="small">$60 one time fee</el-tag>
              <el-tag type="success" size="small">10% Off</el-tag>
            </div>
            <p class="l_c_r_describ">Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description</p>
          </div>
        </div>
      </div>
      <footer-com></footer-com>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value:3,
      iconClasses: ['iconfont icon-pingfendengjiRating4', 'iconfont icon-pingfendengjiRating4', 'iconfont icon-pingfendengjiRating4'],
    }
  },
  methods:{
    /**
     * 查看产品详情
     */
    handleProductInfo(){
      this.$router.push('/product-info');
    },
  }
}
</script>
<style lang="less" scoped>
  .product-list{
    height: 100%;
    .p_product-list{
      background: #f2f2f5;
      height: calc(100% - 72px);
      overflow: auto;
      .p_product-list_top{
        background: #ffffff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 50, 0.04);
        .p_l_t_container{
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
      .p_product-list_container{
        min-height: calc(100% - 310px);
        max-width: 1056px;
        margin: 0 auto;
        padding: 15px 0 25px 0;
        .list_card{
          background: #ffffff;
          box-shadow: 0 12px 20px 0 rgba(0, 0, 50, 0.12);
          margin-bottom: 12px;
          padding: 24px 10px 24px 40px;
          display: flex;
          flex-direction: row;
        }
        .list_card_right{
          width: calc(100% - 132px);
          padding-left: 32px;
          display: flex;
          flex-direction: column;
          .l_c_r_title{
            font-size: 1.125rem;
            color: #1b1b21;
            cursor: pointer;
            &:hover{
              color:#1989fa;
              border-bottom: 1px solid #1989fa;
            }
          }
          .l_c_r_score{
            margin-top: 12px;
            display: flex;
            flex-direction: row;
            align-items: center;
            /deep/.icon-pingfendengjiRating4{
              font-size: 1.3rem;
            }
            .score_num{
              margin:0 5px;
              color: #454554;
              font-size: 0.875rem;
            }
            .el-tag{
              margin-left: 6px;
            }
          }
          .l_c_r_describ{
            color: #6f6f87;
            font-size: 0.875rem;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
</style>