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
              <th class="m_th">1</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
            </tr>
            <tr>
              <th class="m_th">1</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
            </tr>
          </tbody>
        </table>
      </div>
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
        border-collapse: separate;
        th{
          color: #666;
          padding: .7rem;
          line-height: 1.6;
          font-size: 20px;
        }
        .m_th{
          vertical-align: middle;
          border-left: 1px dashed #ddd;
          border-right: 1px dashed #ddd;
        }
      }
    }
  }
}
</style>