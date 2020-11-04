<template>
  <div class="product-info">
    <header-com></header-com>
    <div class="p_product-info">
      <div class="p_product-info_top">
        <div class="p_info_t_container">
          <div class="left_container">
            <el-image
              style="width: 180px; height: 100px"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              fit="cover">
            </el-image>
            <div class="left_c_info">
              <h2>Paw Print Genetics</h2>
              <h5>Reviews 837  •  Excellent</h5>
              <rate :value="5" :isDisabled="true"></rate>
            </div>
          </div>
          <div class="right_container">
            <div class="r_c_operation_group">
              <div class="r_c_operation">
                <svg-icon value="icon-rili" :size="1.5"></svg-icon>
                <span>2002</span>
              </div>
              <div class="r_c_operation">
                <svg-icon value="icon-qian" :size="1.5"></svg-icon>
                <span>$60</span>
              </div>
              <div class="r_c_operation">
                <svg-icon value="icon-fenxiangzhuanqian" :size="1.5"></svg-icon>
                <span>Earn</span>
              </div>
              <div class="r_c_operation">
                <svg-icon value="icon-xihuan1" :size="1.5"></svg-icon>
                <span>392</span>
              </div>
              <div class="r_c_operation">
                <svg-icon value="icon-fenxiang" :size="1.5"></svg-icon>
                <span>92</span>
              </div>
            </div>
            <el-button size="mini" type="success" plain>Visit Homepage</el-button>
            <el-button size="mini" type="primary" plain>Relevant Articles</el-button>
          </div>
        </div>
      </div>
      <div class="p_p-info_main">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="left_main_top">
              <div class="top_left">
                <svg-icon value="icon-bianpinghuatubiaosheji-" :size="1.8"></svg-icon>
                <span class="w_text" @click="handleWriteReview">Write a review</span>
              </div>
              <el-rate
                v-model="value"
                :icon-classes="iconClasses"
                void-icon-class="iconfont icon-pingfendengjiRating4"
                allow-half
                :colors="['#FF3722', '#FFCE00','#00B67A']">
              </el-rate>
            </div>
            <div class="left_main_review">
              <div class="left_main_review_title">
                <h2> Reviews <span class="num">838</span>
                </h2>
              </div>
            </div>
            <div class="left_main_review_card" v-for="(item,index) in 8" :key="index">
              <div class="card_user">
                <el-avatar size="large" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
                <span class="user_name">Elizabeth Lemke</span>
              </div>
              <div class="score_date">
                <rate :value="5" :isDisabled="true"></rate>
                <span class="date">3月8日</span>
              </div>
              <p class="card_text">Cant Withdraw, communication thats not only ambiguous but often weeks after anything happens and no timetable for a return its a scam people. Probably even changed trust pilot name to Bank to avoid their reviews being found. I would love to be wrong about this but the balls in their court and they already left the building. But with the help of ( Georgebruce 00 at yahoo mail. ) 
I was able to get back my all.
              </p>
              <div class="card_bottom">
                <el-tooltip class="item" effect="dark" content="Useful" placement="top-start">
                  <svg-icon value="icon-xihuan1" :size="1.3" style="color:#aaa"></svg-icon>
                </el-tooltip>
                <span>(0)</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <el-button class="add_comparison_button" type="primary" plain>Add Into Comparison</el-button>
            <div class="right_comparison">
              <div class="comparison_list_title">
                <svg-icon value="icon-cebianlan-bijiao-xuanzhong" :size="1.3"></svg-icon>
                <span>Comparison[2/4]</span>
              </div>
              <ul class="comparison_list_ul">
                <li v-for="item in 4" :key="item">
                  <span>Steam</span>
                  <svg-icon value="icon-shanchu" :size="1.6"></svg-icon>
                </li>
              </ul>
              <div class="comparison_list_button">
                <el-button class="comparison_button" type="comp" plain @click="handleCompare">Compare</el-button>
                <p class="comparison_tips">
                  Please choose the same type of product to compare the more detailed data
                </p>
              </div>  
            </div>
          </el-col>
        </el-row>
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
     * 进入比较
     */
    handleCompare(){
      this.$router.push('/compare')
    },
    /**
     * 进入写评论
     */
    handleWriteReview(){
      this.$router.push('/write-review')
    },
  }
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
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          .left_container{
            display: flex;
            flex-direction: row;
            .left_c_info{
              margin-left: 24px;
              /deep/.icon-pingfendengjiRating4{
                font-size: 1.6rem;
              }
              h2{
              margin: 0;
              font-size: 2rem;
              }
              h5{
                margin: 5px 0;
                font-size: 1rem;
                color: #515174;
                font-weight: 400;
              }
            }
          }
          .right_container{
            display: flex;
            flex-direction: column;
            .r_c_operation_group{
              display: -webkit-box;
              flex-direction: row;
              margin-bottom: 2px;
              .r_c_operation{
                margin-right: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                span{
                  font-size: 0.75rem;
                  margin-top: 3px;
                  color: #666666;
                }
                svg{
                  color:#aaa;
                  cursor: pointer;
                  &:hover{
                    color:#1989fa;
                  }
                }
              }
            }
            button{
              width: 100%;
              margin-top: 8px;
              margin-left: 0;
            }
          }
        }
    }
    .p_p-info_main{
      padding: 16px;
      max-width: 1056px;
      margin: 0 auto;
      .left_main_top{
        background: #ffffff;
        padding: 22px 24px;
        margin-bottom: 12px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .top_left{
          display: flex;
          align-items: center;
          .w_text{
            font-size: 0.875rem;
            color: #1a66ff;
            margin-left: 6px;
            cursor: pointer;
            &:hover{
              border-bottom: 1px solid#1a66ff;
            }
          }
        }
        /deep/.icon-pingfendengjiRating4{
          font-size: 1.4rem;
        }
      }
      .left_main_review{
        background: #ffffff;
        padding: 22px 24px;
        margin-bottom: 2px;
        .left_main_review_title{
          h2{
            font-size: 1.5rem;
            color: #32323d;
            margin: 0;
            .num{
              margin-left: 6px;
              color: #73738f;
              font-weight: 500;
              font-size: 1.4rem;
            }
          }
        }
      }
      .left_main_review_card{
        background: #ffffff;
        padding: 22px 24px;
        margin-bottom: 8px;
        .card_user{
          display: flex;
          align-items: center;
          padding-bottom: 16px;
          border-bottom: 1px solid #e8e8eb;
          .user_name{
            margin-left: 8px;
            font-size: 0.875rem;
            color: #454554;
          }
        }
        .score_date{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 13px 0;
          /deep/.icon-pingfendengjiRating4{
            font-size: 1.2rem;
          }
          .date{
            color: #73738f;
            font-size: 0.875rem;
          }
        }
        .card_text{
          margin: 0;
          padding-bottom: 16px;
          border-bottom: 1px solid #e8e8eb;
          line-height: 1.5rem;
          color: #32323d;
        }
        .card_bottom{
          display: flex;
          align-items: center;
          padding-top: 10px;
          svg{
            cursor: pointer;
          }
          span{
            margin-left: 5px;
            color: #666666;
          }
        }
      }
      .add_comparison_button{
        width: 100%;
      }
      .right_comparison{
        margin-top: 3px;
        background: #ffffff;
        .comparison_list_button{
          padding: 0 24px 12px 24px;
          .comparison_button{
            width: 100%;
          }
          .el-button--comp{
            background: #ffffff;
            color:#1b1b21;;
            border: 1px solid #9a9aad;
          }
          .el-button--comp:hover{
            background: #ffffff;
            color:#409eff;
            border: 1px solid#409eff;
          }
          .comparison_tips{
            text-align: center;
            font-size: 12px;
            color: #999999;
          }
        }
        .comparison_list_title{
          padding: 12px 15px;
          border-bottom: 1px dotted #ddd;
          display: flex;
          align-items: center;
          span{
            margin-left: 5px;
            color: #515174;
          }
          svg{
            color: #515174;
          }
        }
        .comparison_list_ul{
          margin: 0;
          padding: 12px 24px;
          list-style-type: none;
          li{
            padding: 6px 0;
            font-size: 13px;
            border-bottom: 1px dashed #ddd;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>