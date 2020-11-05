<template>
  <div class="header_com">
    <div class="h_header">
      <div class="logo">
        <span class="l_logo" @click="goHome">
          <el-image
            style="width: 11rem"
            :src="require('../assets/logo1.png')"
            fit="contain">
          </el-image>
        </span>
        <div class="search" v-if="isShowSearch">
          <el-input v-model="searchData" placeholder="请输入内容"></el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </div>
      <div class="header_button">
        <span class="categories" @click="goCategories">Categories</span>
        <el-button class="companies" type="gone" plain>For companies</el-button>
      </div>
    </div>
    <div class="phone_header" v-if="false">
      <div class="p_logo">
        <span @click="goHome">
          <el-image
            style="width: 10rem"
            :src="require('../assets/logo1.png')"
            fit="contain">
          </el-image>
        </span>
       
      </div>
       <i class="el-icon-delete"></i>
    </div>
  </div>
</template>
<script>
export default {
  name:'header-com',
  props:{
    isShowSearch:{
      type:Boolean,
      default:true
    },
  },
  data(){
    return {
      activeIndex: '1',
      searchData:null, //搜索
    }
  },
  methods:{
    /**
     * 去往分类页面
     */
    goCategories(){
      this.isShowSearch=true;
      this.$router.push({ path: '/categories'});
    },
    /**
     * 去往首页
     */
    goHome(){
      this.isShowSearch=false;
      this.$router.push({ path: '/'});
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/style/style.less';
.header_com{
  background: @main-color;
  .h_header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    font-weight: bold;
    height: 72px;
    padding:0 20px;
    color: #ffffff;
    max-width: 1206px;
    margin: 0 auto;
    .logo{
      display: flex;
      flex-direction: row;
      align-items: center;
      .l_logo{
        cursor: pointer;
      }
      .search{
        margin-left: 32px;
        display: flex;
        flex-direction: row;
        button{
          margin-left: 5px;
        }
      }
    }
    .header_button{
      .categories{
        cursor: pointer;
      }
      .companies{
        margin-left: 2rem;
        border: 2px solid #ffffff;
        font-weight: bold;
        display: initial;    
      }
      .el-button--gone:hover
      {
        background:#ffffff;
        border-color: #ffffff;
        color: @main-color;
      }
      .el-button--gone{
        background: @main-color;
        color: #ffffff;
      }
    }
  }
  .phone_header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    font-weight: bold;
    height: 72px;
    padding:0 20px;
    color: #ffffff;
    max-width: 1206px;
    margin: 0 auto;
    .p_logo{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media all and (max-width: 1024px) {
  .h_header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    font-weight: bold;
    height: 72px;
    padding:0 20px;
    color: #ffffff;
    max-width: 1206px;
    margin: 0 auto;
    .logo{
      display: flex;
      flex-direction: row;
      align-items: center;
      .l_logo{
        cursor: pointer;
      }
      .search{
        margin-left: 32px;
        display: flex;
        flex-direction: row;
        button{
          margin-left: 5px;
        }
      }
    }
      .header_button{
        .companies{
          display: none;
        }
      }
    }
  }
}
</style>