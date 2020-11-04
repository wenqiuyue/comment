<template>
  <div class="footer">
    <h4 class="b_share">SHARE PAGE</h4>
    <div class="b_hre">©2020<a href="/">comment.com</a></div>
  </div>
</template>
<script>
export default {
  name:'footer-com'
}
</script>
<style lang="less" scoped>
.footer{
    background: #000032;
    color: #ffffff;
    padding: 25px 0;
    .b_share{
      text-align: center;
      font-size: 20px;
    }
    .b_hre{
      text-align: center;
      a{
        margin-left: 3px;
        color: #ffffff;
        border-bottom: 1px dotted #ddd;
        text-decoration:none
      }
    }
  }
</style>