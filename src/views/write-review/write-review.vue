<template>
  <div class="write-review">
    <header-com></header-com>
    <div class="w_write-review">
      <div class="write-review_top">
        <div class="t_container">
          <el-image
            style="width: 80px; height: 60px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="cover">
          </el-image>
          <div class="t_c_right_info">
            <h2 @click="handleReturn"><svg-icon value="icon-fanhui"></svg-icon> Paw Print Genetics</h2>
            <h5>pawprintgenetics.com</h5>
          </div>
        </div>
      </div>
      <div class="write-review_main">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
          <h2>Give your comments</h2>
          <el-rate
            class="r_rate"
            v-model="value"
            :icon-classes="iconClasses"
            void-icon-class="iconfont icon-pingfendengjiRating4"
            allow-half
            :colors="['#FF3722', '#FFCE00','#00B67A']">
          </el-rate>
          <h2>Tell us about your experience</h2>
          <el-form-item prop="textarea">
            <el-input
              class="input_experience"
              type="textarea"
              :rows="8"
              placeholder="This is where you write your review. Explain what happened, and leave out offensive words. Keep your feedback honest, helpful, and constructive."
              v-model="ruleForm.textarea">
            </el-input>
          </el-form-item>
          <div class="form_inline">
            <el-form-item class="form_item" label="Upload Avatar:">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-success="handleAvatarSuccess"
                :show-file-list="false"
                >
                <el-avatar v-if="imageUrl" size="large" :src="imageUrl"></el-avatar>
                <svg-icon v-else value="icon--" :size="2.5"></svg-icon>
              </el-upload>
            </el-form-item>
            <el-form-item prop="name" class="form_item">
              <el-input v-model="ruleForm.name" placeholder="name"></el-input>
            </el-form-item>
          </div>
          <div class="form_inline">
            <el-form-item prop="name" class="form_item">
              <el-input v-model="ruleForm.name" placeholder="Email"></el-input>
            </el-form-item>
            <el-form-item prop="name" class="form_item">
              <el-input v-model="ruleForm.name" placeholder="1+8=?"></el-input>
            </el-form-item>
          </div>
          <el-form-item>
            <el-button type="primary" style="width:100%">Submit My Review</el-button>
          </el-form-item>
        </el-form>
      </div>
      <footer-com></footer-com>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value:null,
      iconClasses: ['iconfont icon-pingfendengjiRating4', 'iconfont icon-pingfendengjiRating4', 'iconfont icon-pingfendengjiRating4'],
      ruleForm:{
        textarea: '',
        name:null,
        imageUrl:null
      },
      imageUrl:null,
      fileList:[],
      rules: {
        textarea: [
          { required: true, message: 'Please enter the content', trigger: 'blur' },
        ],
        name:[
          { required: true, message: 'Please enter the content', trigger: 'blur' },
        ]
      }
    }
  },
  methods:{
    handleAvatarSuccess(res, file){
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    /**
     * 返回
     */
    handleReturn(){
      this.$router.back();
    },
  }
}
</script>
<style lang="less" scoped>
.write-review{
  height: 100%;
  .w_write-review{
    background: #f2f2f5;
    height: calc(100% - 72px);
    overflow: auto;
    .write-review_top{
      background: #ffffff;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 50, 0.04);
      .t_container{
        max-width: 510px;
        margin-left: auto;
        margin-right: auto;
        padding: 18px 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .t_c_right_info{
          margin-left: 24px;
          h2{
            margin: 0;
            font-size: 1.17em;
            cursor: pointer;
            &:hover{
              border-bottom: 1px solid #1989fa;
              color: #1989fa;
            }
          }
          h5{
            margin: 3px 0;
            font-size: 1rem;
            color: #9a9aad;
            font-weight: 400;
          }
        }
      }
    }
    .write-review_main{
      max-width: 510px;
      background: #ffffff;
      margin: 16px auto;
      padding: 24px 24px 1px;
      h2{
        margin: 0;
        font-size: 1.125rem;
        color: #454554;
      }
      .r_rate{
        margin: 8px 0 18px 0;
        /deep/.icon-pingfendengjiRating4{
          font-size: 1.7rem;
        }
      }
      .input_experience{
        margin: 16px 0;
      }
      /deep/.el-form-item__content{
        margin-left: 0 !important;
        width: 100%;
        line-height: 0;
      }
      .form_inline{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .form_item{
        display: flex;
        flex-direction: row;
        width: 48%;
        /deep/.el-form-item__label{
          width: 85% !important;
        }
      }
    }
  }
}
</style>