<template>
  <div class="compare">
    <header-com></header-com>
    <div class="c_compare">
      <div class="c_compare_main">
        <div class="main_top">
          <svg-icon value="icon-cebianlan-bijiao-xuanzhong" :size="1.3"></svg-icon>
          <span>WHICH IS BETTER</span>
        </div>
        <table class="main_table">
          <tbody>
            <tr>
              <th class="m_th">Products</th>
              <th v-for="item in 4" :key="item">
                <span>Steam</span>
              </th>
            </tr>
            <tr>
              <td class="m_th">COVER</td>
              <td v-for="item in 4" :key="item">
                <el-image
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  fit="cover">
                </el-image>
              </td>
            </tr>
            <tr>
              <td class="m_th">RELEASE TIME</td>
              <td v-for="item in 4" :key="item">January 2002</td>
            </tr>
            <tr>
              <td class="m_th">PRICE</td>
              <td v-for="item in 4" :key="item">$60 one time fee</td>
            </tr>
            <tr>
              <td class="m_td_icon">
                <svg-icon value="icon-bianpinghuatubiaosheji-"></svg-icon>
                <span>Reviews</span>
              </td>
              <td v-for="item in 4" :key="item">2</td>
            </tr>
            <tr>
              <td class="m_td_icon">
                <svg-icon value="icon-xihuan"></svg-icon>
                <span>Likes</span>
              </td>
              <td v-for="item in 4" :key="item">391</td>
            </tr>
            <tr>
              <td class="m_th">Commission</td>
              <td v-for="item in 4" :key="item">10% recurring commissions</td>
            </tr>
            <!-- <tr>
              <td class="m_th"></td>
              <td colspan="4">&nbsp;</td>
            </tr> -->
            <tr>
              <td class="m_th">Strong</td>
              <td v-for="item in 4" :key="item">C</td>
            </tr>
            <tr>
              <td class="m_th">Skill</td>
              <td v-for="item in 4" :key="item">S</td>
            </tr>
            <tr>
              <td class="m_th">Speed</td>
              <td v-for="item in 4" :key="item">S</td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer-com></footer-com>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
@import '../../assets/style/style.less';
.compare{
  height: 100%;
  .c_compare{
    height: calc(100% - 72px);
    background: #f2f2f5;
    overflow: auto;
    .c_compare_main{
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px 1.5rem;
      .main_top{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        background: #ecf5ff;
        border: 1px solid #409eff;
        border-radius: 5px;
        color: #409eff;
        span{
          margin-left: 5px;
        }
      }
      .main_table{
        padding: 20px 16px;
        background: #FFF;
        box-shadow: 0px 3px 20px -3px rgba(0,0,0,0.25);
        margin-top: 10px;
        width: 100%;
        tr{
          border-bottom: 1px solid #ddd;;
        }
        th{
          color: #666;
          padding: 7px;
          line-height: 1.6;
          font-size: 19px;
          text-align: center;
          font-weight: normal;
          span{
            color:#409eff;
            border-bottom: 1px dashed  #409eff;
            cursor: pointer;
            &:hover{
              color: #60bf39;
            }
          }
        }
        .m_th{
          vertical-align: middle;
          border-left: 1px dashed #ddd;
          border-right: 1px dashed #ddd;
        }
        .m_td_icon{
          display: flex;
          align-items: center;
          justify-content: center;
          border-left: 1px dashed #ddd;
          border-right: 1px dashed #ddd;
          span{
            margin-left: 3px;
          }
        }
        td{
          border-top: 1px solid #ddd;
          text-align: center;
          padding: 7px;
          line-height: 1.6;
          color: #666;
          font-size: 16px;
          .el-image{
            max-width: 200px;
            max-height: 130px;
            margin: 16px 0px;
          }
        }
      }
    }
  }
}
</style>