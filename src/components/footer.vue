<template>
  <div class="footer">
    <h4 class="b_share">SHARE PAGE</h4>
    <share :url="$route.fullPath"></share>
    <div class="b_hre">©{{year}}<a href="/">Sitespilot.com</a></div>
  </div>
</template>
<script>

export default {
  name:'footer-com',
  data(){
    return{
      year:null
    }
  },
  created(){
    this.year=new Date().getFullYear();
  },
}
</script>
<style lang="less" scoped>
.footer{
    background: #000032;
    color: #ffffff;
    padding: 1px 0 28px 0;
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
  	@media all and (max-width: 1024px) {
      .footer{
        padding: 2rem 0;
        .b_share{
          font-size: 1.125rem;
          margin-top: 0;
        }
        /deep/.share{
          svg{
            height: 2rem;
            width: 2rem;
          }
        }
      }
    }
</style>