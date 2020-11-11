<template>
<div class="home" v-loading="loading">
  <header-com :isShowSearch="false"></header-com>
  <div class="h_home">
    <div class="banner">
      <div class="c_banner">
        <h1 class="title_1">Behind every review is an experience that matters</h1>
        <h2 class="title_2">Read reviews. Write reviews. Find products.</h2>
        <div class="b_search">
          <el-input class="s_input" v-model="searchData" placeholder="Search for a company or category…"></el-input>
          <el-button class="s_button" type="primary" icon="el-icon-search" @click="handleSearch">Search</el-button>
        </div>
        <h2 class="title_3">Browse products by category</h2>
        <div class="b_type">
          <div class="type_card" v-for="(item,index) in hotType" :key="item.id">
            <div class="type_card_icon" v-if="index<4">
              <svg-icon value="icon-lanlvtubiaozhizuomoban-03" :size="1.6"></svg-icon>
            </div>
            <div class="type_card_text" v-if="index<4">{{item.name}}</div>
          </div>
          <div class="type_card" @click="goCategories">
            <div class="type_card_icon">
              <svg-icon value="icon-lanlvtubiaozhizuomoban-03" :size="1.6"></svg-icon>
            </div>
            <div class="type_card_text">More</div>
          </div>
        </div>
      </div>
    </div>
    <div class="recent_reviews">
      <div class="r_r_title">Recent reviews</div>
      <div class="r_r_reviews">
        <div class="r_r_r_card" v-for="(item,index) in 20" :key="item">
          <div class="r_r_r_c_card" v-for="(item,ind) in 2" :key="item">
            <div class="c_title">
              <el-avatar class="c_t_img" size="large" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
              <el-rate
                class="c_t_rate"
                v-model="value"
                :icon-classes="iconClasses"
                void-icon-class="iconfont icon-pingfendengjiRating4"
                :colors="['#FF3722', '#FFCE00','#00B67A']">
              </el-rate>
            </div>
            <p class="c_user">Barb Ackerman <span>reviewed</span> Maryposa Shoes</p>
            <p class="c_text" v-if="index%2==0 && ind==1">
              Cant Withdraw, communication thats not only ambiguous but often weeks after anything happens and no timetable for a return its a scam people. Probably even changed trust pilot name to Bank to avoid their reviews being found. I would love to be wrong about this but the balls in their court and they already left the building. But with the help of ( Georgebruce 00 at yahoo mail. ) 
I was able to get back my all.
            </p>
            <p class="c_text" v-else>
              Cant Withdraw, communication thats not only ambiguous but often weeks after anything happens
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="be_heard">
      <h1 class="heard_title">Be heard</h1>
      <p class="heard_text">
        Trustpilot is free and open to every company and consumer everywhere. Sharing your experiences helps others make better choices and companies up their game.
      </p>
      <div class="what_do"><el-button class="companies" type="gone" plain>For companies</el-button></div>
    </div>
    <footer-com></footer-com>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      loading:false, //加载
      searchData:null, //搜索
      hotReview:null, //热门评论
      hotType:null, //热门分类
      iconClasses: ['iconfont icon-pingfendengjiRating4', 'iconfont icon-pingfendengjiRating4', 'iconfont icon-pingfendengjiRating4'],
      value:3
    }
  },
  mounted(){
    // const data={
    //   EventeId: 422
    // }
    // this.$apiHttp.getAllRecentFilms(data).then((res)=>{
    //   console.log(res);
    // })
    // const d={params: {
    //   format: 'DateTime',
    //   c:22
		// }}
    // this.$apiHttp.getAllRecentFilmsGet(d).then((res)=>{
    //   console.log(res);
    // })
    // console.log(new Date().format('yyyy月dd'))
    this.getQueryCommentTypeData();
  },
  methods:{
    /**
     * 搜索
     */
    handleSearch(){
      if(this.searchData){
          this.$router.push({
          path:'/product-list',
          query:{
            searchData:this.searchData
          }
        })
      }
    },
    /**
     * 获取首页热门评论
     */
    getQueryCommentTypeData(){
      // this.loading=true;
      const data={
        pageCount:15
      }
      Promise.all([
        this.$apiHttp.getQueryHotType(),
        // this.$apiHttp.getQueryCommentInfo(data)
      ]).then((resp)=>{
        if(resp[0].res == 200){
          // this.hotReview=resp[1].data;
          this.hotType=resp[0].data;
        }
        this.loading=false;
      })
    },
    /**
     * 查看分类
     */
    goCategories(){
      this.$router.push({ path: '/categories'});
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  height: 100%;
}
.h_home{
  height: calc(100% - 72px);
  overflow: auto;
  .banner{
    background: url("~@/assets/images/banner.png") no-repeat;
    height: 600px;
    width: 100%;
    background-size:cover;
    .c_banner{
      padding: 80px 24px 88px;
      width: 38%;
      margin-left: 20%;
      .title_1{
        margin-bottom: 12px;
      }
      .title_2{
        font-size: 1.25rem;
        color: #454554;
        margin-bottom: 40px;
        font-weight: 500;
      }
      .title_3{
        font-size: 1rem;
        color: #454554;
        margin-bottom: 30px;
        font-weight: 500;
      }
      .b_search{
        display: flex;
        flex-direction: row;
        margin-bottom: 56px;
        .s_input{
          margin-right: 3px;
          /deep/.el-input__inner{
            height: 60px;
            color: #1B1B21;
            font-size: 1rem;
          }
        }
        .s_button{
          font-size: 1rem;
        }

      }
      .b_type{
        padding-top: 16px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .type_card{
          cursor: pointer;
          width: 16%;
          background-color: white;
          margin-bottom: 8px;
          box-shadow: 0 2px 2px 0 rgba(0,0,50,0.04);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 5px 12px 5px;
          .type_card_text{
            font-size: 0.875rem;
            line-height: 1rem;
            color: #1b1b1b;
            text-align: center;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;

          }
          .type_card_icon{
            margin-bottom: 0.2rem;
          }
          &:hover{
            .type_card_text{
              color: #409eff;
            }
          }
        }
      }
    }
  }
  .recent_reviews{
    background-color: rgb(220, 220, 230);
    width: 100%;
    .r_r_title{
      text-align: center;
      font-size: 1.25rem;
      font-weight: 500;
      padding:45px 0 48px 0;
    }
    .r_r_reviews{
      padding: 0 8px;
      display:-webkit-box;
      flex-direction: row;
      width: calc(100% - 24px);
      overflow-x: scroll;
      .r_r_r_card{
        display: flex;
        flex-direction: column;
        padding-bottom: 15px;
        margin-right: 10px;
        width: 20%;
        .r_r_r_c_card{
          background: #ffffff;
          margin-bottom: 10px;
          padding: 22px 15px 22px 22px;
          width: calc(100% - 37px);
          .c_title{
            display: flex;
            flex-direction: row;
            align-items: center;
            .c_t_img{

            }
            .c_t_rate{
              margin-left: 8px;
              /deep/.icon-pingfendengjiRating4{
                font-size: 1.2rem;
              }
            }
          }
          .c_user{
            color: #1b1b21;
            font-weight: 700;
            font-size: 0.75rem;
            span{
              color: #adadad;
            }
          }
          .c_text{
            font-size: 0.875rem;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            color: #1B1B21;
          }
        }
      }
    }
  }
  .be_heard{
    background-color:rgb(245, 233, 247);
    padding: 88px 24px 80px;
    .heard_title{
      text-align: center;
      font-size: 2.875rem;
      margin-top: 0;
      margin-bottom: 16px;
    }
    .heard_text{
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 32px;
      font-size: 1.25rem;
      line-height: 1.75rem;
      max-width: 750px;
    }
    .what_do{
      text-align: center;
      .companies{
        border: 2px solid  #000032;
        font-weight: bold;    
      }
      .el-button--gone:hover
      {
        background: #000032;
        color: #ffffff;
      }
      .el-button--gone{
        background: rgb(245, 233, 247);
        color: #000032;
      }
    }
  }
}
	@media all and (max-width: 1024px) {
    .h_home{
      height: calc(100% - 72px);
      overflow: auto;
      .banner{
        background: url("~@/assets/images/banner.png") no-repeat;
        height: auto;
        .c_banner{
          padding: 1rem;
          width: 90%;
          margin-left: auto;
          margin-right: auto;
          .title_1{
            margin-bottom: 0.875rem;
            font-size: 1.7rem;
          }
          .title_2{
            font-size: 0.875rem;
            margin-bottom: 1rem;
          }
          .title_3{
            font-size: 1rem;
            margin-bottom: 1rem;
          }
          .b_search{
            margin-bottom: 2rem;
            .s_input{
              margin-right: 0.1rem;
              /deep/.el-input__inner{
                height: 3rem;
                font-size: 1rem;
              }
            }
            .s_button{
              font-size: 1rem;
            }

          }
          .b_type{
            padding-top: 0.2rem;
            .type_card{
              width: 17%;
              margin-bottom: 0;
              box-shadow: 0 2px 2px 0 rgba(0,0,50,0.04);
              padding:0.5rem 0.2rem 0.2rem 0.2rem;
              .type_card_text{
                font-size: 0.75rem;
                line-height: 1rem;
              }
              .type_card_icon{
                margin-bottom: 0.1rem;
              }
            }
          }
        }
      }
      .recent_reviews{
        .r_r_title{
          font-size: 1.25rem;
          padding:2rem 0;
        }
        .r_r_reviews{
          .r_r_r_card{
            padding-bottom: 0.8rem;
            margin-right: 0.5rem;
            width: 70%;
            .r_r_r_c_card{
              margin-bottom: 0.5rem;
              padding: 1.1rem 0.5rem;
              width: calc(100% - 1rem);
              .c_title{
                .c_t_rate{
                  margin-left: 0.5rem;
                }
              }
            }
          }
        }
      }
      .be_heard{
        padding: 2rem 1rem 2rem;
        .heard_title{
          font-size: 2rem;
          margin-bottom: 0;
        }
        .heard_text{
          margin-bottom: 1rem;
          font-size: 1rem;
          line-height: 1.75rem;
        }
      }
    }
	}
</style>