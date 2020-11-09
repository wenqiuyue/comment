<template>
  <div class="product-info">
    <header-com></header-com>
    <div class="p_product-info">
      <div class="p_product-info_top">
        <div class="p_info_t_container">
          <div class="left_container">
            <el-image
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
                <span class="r_c_num">2002</span>
              </div>
              <div class="r_c_operation">
                <svg-icon value="icon-qian" :size="1.5"></svg-icon>
                <span class="r_c_num">$60</span>
              </div>
              <div class="r_c_operation">
                <svg-icon value="icon-fenxiangzhuanqian" :size="1.5"></svg-icon>
                <span class="r_c_num">Earn</span>
              </div>
              <div class="r_c_operation">
                <svg-icon value="icon-xihuan1" :size="1.5" @click="handleLike"></svg-icon>
                <span class="r_c_num">392</span>
              </div>
              <div class="r_c_operation">
                <el-popover
                  placement="bottom"
                  trigger="click">
                  <div>
                    <p class="share_title">Please select where to share</p>
                    <share :size="2"></share>
                  </div>
                  <svg-icon value="icon-fenxiang" :size="1.5" slot="reference"></svg-icon>
                </el-popover>
                <span class="r_c_num r_c_num_share">92</span>
              </div>
            </div>
            <el-button size="mini" type="success" plain>Visit Homepage</el-button>
            <el-button size="mini" type="primary" plain>Relevant Articles</el-button>
          </div>
        </div>
      </div>
      <div class="p_p-info_main">
        <el-row :gutter="20">
          <el-col :span="16" :xs="24">
            <div class="left_main_introduce">
              <div class="introduce_title">
                <svg-icon value="icon--1" :size="1.8"></svg-icon>
                <h2>What is the Steam</h2>
              </div>
              <p :class="isEllipsis?'introduce_container c_ellipsis':'introduce_container'">The definitive resource for canine genetic health, providing canine genetic testing to both owners and breeders. We offer the highest standards in testing and customer service.The definitive resource for canine genetic health, providing canine genetic testing to both owners and breeders. We offer the highest standards in testing and customer service.</p>
              <div class="more">
                <span @click="isEllipsis=!isEllipsis">{{isEllipsis?'see more':'take back'}}</span>
                <svg-icon :value="isEllipsis?'icon-z044':'icon-z045'" :size="0.6" :color="'#1a66ff'"></svg-icon>
              </div>
            </div>
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
                <svg-icon value="icon--1" :size="1.8"></svg-icon>
                <h2> Reviews <span class="num">838</span>
                </h2>
              </div>
            </div>
            <div class="left_main_review_card" v-for="(item,index) in 3" :key="index">
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
            <div class="left_page">
              <el-pagination
                layout="prev, pager, next"
                :total="50">
              </el-pagination>
            </div>
            <!-- <div class="left_main-img" v-if="false">
              <div class="img_title">
                <svg-icon value="icon--1" :size="1.8"></svg-icon>
                <h2>10 Images</h2>
              </div>
              <div>
                <el-carousel indicator-position="outside">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <el-image
                      style="height:100%"
                      src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
                     >
                    </el-image>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div> -->
            <!-- <div class="left_main-informations" v-if="false">
              <div class="informations_title">
                <svg-icon value="icon--1" :size="1.8"></svg-icon>
                <h2>Steam Informations</h2>
              </div>
              <div class="informations_card">
                <el-row class="c_row">
                  <el-col :span="6"><div class="card_left">Contacts</div></el-col>
                  <el-col :span="18">
                    <div class="card_right">
                      <span v-for="item in 2" :key="item" class="c_r_span">
                        <svg-icon value="icon-qian"></svg-icon>
                        <span>Animal Health</span>
                      </span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="c_row">
                  <el-col :span="6"><div class="card_left">Infomations</div></el-col>
                  <el-col :span="18">
                    <div class="card_right">
                      <span v-for="item in 7" :key="item" class="c_r_span">
                        <svg-icon value="icon-qian"></svg-icon>
                        <span>Animal Health</span>
                      </span>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div> -->
          </el-col>
          <el-col :span="8" :xs="24">
            <div class="right_discount">
              <h3>$60 one time fee</h3>
              <div class="r_d_main">
                <span class="m_discount">优惠10％</span>
                <span>优惠券：steam_coupon</span>
              </div>
              <div class="relevant_pro">
                <el-dropdown trigger="click" placement="bottom-start">
                  <el-button type="product" plain>
                    <span class="button_text">
                      <span>Related products</span>
                      <svg-icon value="icon-goahead" :size="1.4"></svg-icon>
                    </span>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Test Sub</el-dropdown-item>
                    <el-dropdown-item>Paw Print Genetics</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <el-button class="add_comparison_button" type="primary" plain @click="handleAddComparison">Add Into Comparison</el-button>
            <div class="right_comparison">
              <div class="comparison_list_title">
                <svg-icon value="icon-cebianlan-bijiao-xuanzhong" :size="1.3"></svg-icon>
                <span>{{`Comparison[${comparisonList.length}/4]`}}</span>
              </div>
              <ul class="comparison_list_ul">
                <li v-for="(item,index) in comparisonList" :key="index">
                  <span>{{item.name}}</span>
                  <svg-icon value="icon-shanchu" :size="1.6" @click="handleComparisonDel(index)"></svg-icon>
                </li>
              </ul>
              <div class="comparison_list_button">
                <el-button class="comparison_button" type="comp" plain @click="handleCompare">Compare</el-button>
                <p class="comparison_tips">
                  Please choose the same type of product to compare the more detailed data
                </p>
              </div>  
            </div>
            <div class="right_img">
              <h3>10 Images</h3>
              <div class="r_r_img">
                <el-carousel indicator-position="outside">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <el-image
                      style="height:100%"
                      src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
                     >
                    </el-image>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div class="right_Informations">
              <h3>Steam Informations</h3>
              <div class="r_r_Informations">
                <div class="c_row">
                  <div class="card_left">Contacts</div>
                    <div class="card_right">
                      <span v-for="item in 2" :key="item" class="c_r_span">
                        <svg-icon value="icon-qian"></svg-icon>
                        <span>Animal Health</span>
                      </span>
                    </div>
                </div>
                <div class="c_row">
                  <div class="card_left">Infomations</div>
                    <div class="card_right">
                      <span v-for="item in 7" :key="item" class="c_r_span">
                        <svg-icon value="icon-qian"></svg-icon>
                        <span>Animal Health</span>
                      </span>
                    </div>
                </div>
              </div>
            </div>
            <div class="right_scam">
              <h3>Is a Steam Scam?</h3>
              <div class="scam_tips">Do you think that Steam is a scam ? Please vote!</div>
              <div class="scam_button">
                <el-button type="success" plain @click="handleVote(1)">
                  <div class="button_text">
                    <div>
                      <svg-icon value="icon-dui"></svg-icon>
                      <span> NOT SCAM (327)</span>
                    </div>
                    <div>Steam is <strong>NOT</strong> a scam</div>
                  </div>
                </el-button>
                <el-button type="danger" plain @click="handleVote(2)">
                  <div class="button_text">
                    <div>
                      <svg-icon value="icon-icon1"></svg-icon>
                      <span>SCAM (99)</span>
                    </div>
                    <div>Steam is a scam</div>
                  </div>
                </el-button>
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
import types from '../../commons/types';
export default {
  data(){
    return{
      isEllipsis:true, //产品介绍是否是省略状态
      value:3,
      iconClasses: ['iconfont icon-pingfendengjiRating4', 'iconfont icon-pingfendengjiRating4', 'iconfont icon-pingfendengjiRating4'],
      comparisonList:[]
    }
  },
  mounted(){
    this.getComparisonList();
  },
  methods:{
    /**
     * 投票
     */
    handleVote(vote){
      const data={
        ProId:1,
        voteY:vote==1?1:null,
        voteN:vote==2?1:null
      }
      this.$apiHttp.vote(data).then((resp)=>{
        if(resp.res==0){
          this.$message({
            message: '投票成功',
            type: 'success'
          });
        }
      })
    },
    /**
     * 喜欢
     */
    handleLike(){
      const data={
        proId:1
      }
      this.$apiHttp.fabulous(data).then((resp)=>{
        if(resp.res==0){
          this.$message({
            message: '点赞成功',
            type: 'success'
          });
        }
      })
    },
    /**
     * 删除比较列表
     */
    handleComparisonDel(index){
      this.comparisonList=this.comparisonList.filter((m,ind) => ind!=index);
      localStorage.setItem(types.PRODUCT_COMPARISON, JSON.stringify(this.comparisonList));
    },
    /**
     * 获取产品比较列表
     */
    getComparisonList(){
      this.comparisonList=[];
      const cList=JSON.parse(localStorage.getItem(types.PRODUCT_COMPARISON));
      if(cList){
        this.comparisonList.push(...cList)
      }
    },
    /**
     * 将产品加入到比较列表
     */
    handleAddComparison(){
      if(this.comparisonList.length>=4){
        return;
      }
      const comparisonData={
        name:"Steam",
        id:1
      }
      this.comparisonList.push(comparisonData)
      localStorage.setItem(types.PRODUCT_COMPARISON, JSON.stringify(this.comparisonList));
    },
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
.share_title{
  color: #333333;
  font-weight: bold;
}
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
            .el-image{
                width: 180px;
                height: 100px;
              }
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
                .r_c_num{
                  font-size: 0.75rem;
                  margin-top: 3px;
                  color: #666666;
                }
                .r_c_num_share{
                  margin-top: 0;
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
      .left_main_introduce{
        background: #ffffff;
        padding: 22px 24px;
        margin-bottom: 12px;
        .introduce_title{
          display: flex;
          flex-direction: row;
          align-items: center;
          // justify-content: space-between;
          h2{
            font-size: 1.5rem;
            color: #32323d;
            margin: 0;
            margin-left: 5px;
          }
        }
        .introduce_container{
          padding-left: 5px;
          font-size: 0.875rem;
          text-indent: 2em;
          color: #515174;
          line-height: 1.5rem;
        }
        .c_ellipsis{
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }
        .more{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          span{
            font-size: 13px;
            margin-right: 5px;
            color: #1a66ff;
            cursor: pointer;
            &:hover{
              border-bottom: 1px solid  #1a66ff;
            }
          }
        }
      }
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
          display: flex;
          flex-direction: row;
          align-items: center;
          h2{
            font-size: 1.5rem;
            color: #32323d;
            margin: 0;
            margin-left: 5px;
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
      .left_page{
        background: #ffffff;
        padding: 5px 0;
      }
      .left_main-img{
        background: #ffffff;
        padding: 22px 24px 10px 24px;
        margin-bottom: 12px;
        .img_title{
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 15px;
          h2{
            font-size: 1.5rem;
            color: #32323d;
            margin: 0;
            margin-left: 5px;
          }
        }
      }
      .left_main-informations{
        background: #ffffff;
        padding: 22px 24px 10px 24px;
        margin-bottom: 12px;
        .informations_title{
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 15px;
          h2{
            font-size: 1.5rem;
            color: #32323d;
            margin: 0;
            margin-left: 5px;
          }
        }
        .informations_card{
          .c_row{
            border-bottom: 1px dotted #ddd;
            padding-bottom: 10px;
            margin-bottom: 10px;
            .card_left{
              font-size: 15px;
              color: #555;
            }
            .card_right{
              display: flex;
              flex-flow: row wrap;
              .c_r_span{
                flex-basis: 50%;
                margin-bottom: 8px;
                font-size: 13px;
                color: #aaaaaa;
                display: flex;
                align-items: center;
                span{
                  margin-left: 5px;
                }
              }
            }
          }
        }
      }
      .add_comparison_button{
        width: 100%;
      }
      .right_scam{
        margin-top: 12px;
        background: #ffffff;
        h3{
          margin: 0;
          padding: 12px 15px;
          border-bottom: 1px solid #e8e8eb;
          font-size: 1rem;
          font-weight: 500;
        }
        .scam_tips{
          font-size: 12px;
          color: #999;
          text-align: center;
          padding: 18px 24px;
        }
        .scam_button{
          display: flex;
          flex-direction: column;
          padding: 2px 24px;
          button{
            margin-left: 0;
            margin-bottom: 15px;
          }
          .button_text{
            display: flex;
            flex-direction: column;
            div{
              &:nth-child(1){
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                span{
                  margin-left: 5px;
                }
              }
              &:nth-child(2){
                margin-top: 5px;
              }
            }
          }
        }
      }
      .right_img{
        margin-top: 12px;
        background: #ffffff;
        h3{
          margin: 0;
          padding: 12px 15px;
          border-bottom: 1px solid #e8e8eb;
          font-size: 1rem;
          font-weight: 500;
        }
        .r_r_img{
          padding-top: 5px;
          /deep/.el-carousel__container{
            height: 200px;
          }
        }
      }
      .right_Informations{
        margin-top: 12px;
        background: #ffffff;
        h3{
          margin: 0;
          padding: 12px 15px;
          border-bottom: 1px solid #e8e8eb;
          font-size: 1rem;
          font-weight: 500;
        }
        .r_r_Informations{
          padding: 8px 15px 0 15px;
          .c_row{
            border-bottom: 1px dotted #ddd;
            padding-bottom: 5px;
            margin-bottom: 10px;
            .card_left{
              font-size: 15px;
              color: #555;
              margin-bottom: 5px;
            }
            .card_right{
              display: flex;
              flex-flow: row wrap;
              .c_r_span{
                flex-basis: 50%;
                margin-bottom: 8px;
                font-size: 13px;
                color: #aaaaaa;
                display: flex;
                align-items: center;
                span{
                  margin-left: 5px;
                }
              }
            }
          }
        }
      }
      .right_discount{
        margin-bottom: 12px;
        background: #ffffff;
        h3{
          margin: 0;
          padding: 12px 15px;
          border-bottom: 1px solid #e8e8eb;
          font-size: 1rem;
          font-weight: 500;
        }
        .r_d_main{
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 16px;
          span{
            font-size: 0.875rem;
            margin-bottom: 5px;
            color: #777777;
          }
          .m_discount{
            color: #67c23a !important;
            font-weight: 700;
          }
        }
        .relevant_pro{
          padding: 8px 24px 11px 24px;
          .el-dropdown,button{
            width: 100%;
          }
          button{
            padding-bottom: 8px;
            padding-top: 8px;
            .button_text{
              display: flex;
              align-items: center;
              justify-content: center;
              span{
                margin-right: 5px;
              }
            }
          }
          .el-button--product{
            background: #ffffff;
            color:#1b1b21;;
            border: 1px solid #9a9aad;
          }
          .el-button--product:hover{
            background: #ffffff;
            color:#67c23a;
            border: 1px solid#67c23a;
          }
        }
      }
      .right_comparison{
        margin-top: 2px;
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
  @media all and (max-width: 1024px) {
    .p_product-info{
      .p_product-info_top{
        .p_info_t_container{
            padding: 1.25rem 1rem;
            flex-direction: column;
            .left_container{
              .el-image{
                width: 80px;
                height: 80px;
              }
              .left_c_info{
                margin-left: 1.2rem;
                /deep/.icon-pingfendengjiRating4{
                  font-size: 1.6rem;
                }
                h2{
                margin: 0;
                font-size: 1.25rem;
                }
                h5{
                  margin: 0.3rem 0;
                  font-size: 0.875rem;
                }
              }
            }
            .right_container{
              display: flex;
              flex-direction: column;
              margin-top: 1.5rem;
              .r_c_operation_group{
                .r_c_operation{
                  margin-right: 2rem;
                }
              }
              button{
                width: 100%;
                margin-top: 0.7rem;
                margin-left: 0;
              }
            }
          }
      }
      .p_p-info_main{
        padding: 0.6rem 0.3rem;
        .left_main_introduce{
          padding: 1.5rem 1.6rem;
          margin-bottom: 0.75rem;
          .more{
            span{
              font-size: 0.8rem;
            }
          }
        }
        .left_main_top{
          padding: 1.3rem 1.4rem;
          margin-bottom: 0.75rem;
          .top_left{
            .w_text{
              font-size: 0.875rem;
              margin-left: 5px;
            }
          }
          /deep/.icon-pingfendengjiRating4{
            font-size: 1.1rem;
          }
        }
        .left_main_review{
          padding: 1.3rem 1.5rem;
        }
        .left_main_review_card{
          padding: 1.3rem 1.5rem;
          margin-bottom: 0.5rem;
          .card_user{
            padding-bottom: 1rem;
          }
          .score_date{
            padding: 0.875rem 0;
            /deep/.icon-pingfendengjiRating4{
              font-size: 1.2rem;
            }
            .date{
              font-size: 0.875rem;
            }
          }
          .card_text{
            padding-bottom: 1rem;
            font-size: 0.875rem;
          }
          .card_bottom{
            padding-top: 0.6rem;
          }
        }
        .left_page{
          background: #ffffff;
          padding: 5px 0;
        }
        .right_Informations{
          .r_r_Informations{
            padding: 8px 15px 0 15px;
            .c_row{
              .card_right{
                .c_r_span{
                  font-size: 0.75rem;
                }
              }
            }
          }
        }
        .right_discount{
          margin: 0.75rem 0;
          h3{
            padding: 0.75rem 0.875rem;
          }
          .r_d_main{
            padding-top: 1rem;
          }
        }
      }
    }
  }
}
</style>