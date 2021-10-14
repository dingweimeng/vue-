<template>
  <div class="login">
    <el-form
    :rules="rules" ref="ruleForm"
      :label-position="labelPosition"
     
      :model="formLabelAlign"
    >
      <el-form-item prop="name" >
        <el-input v-model="formLabelAlign.name"  placeholder="请输入用户名" prefix-icon="el-icon-user-solid"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input v-model="formLabelAlign.pwd" placeholder="请输入密码" show-password prefix-icon="el-icon-lock
"></el-input>
      </el-form-item>
       <!-- 登录按钮 -->
    <el-button type="success" class="btn" size='mini' @click="submitForm('ruleForm')">登录</el-button>
    </el-form>
   
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
       ruleForm: {
          name: '',
          pwd: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6到 15 个字符', trigger: 'blur' }
          ],
           pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ]}
    };
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.$message({
          message: '登录成功',
          type: 'success',
          duration:1000
        });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  },
  components: {},
};
</script>

<style scoped lang="less">
.btn {
  width: 100%;
 background-color: rgb(167, 154, 154);
}

.login {
  height: 100%;
  background: rgba(48, 105, 91);
  display: flex;
  justify-content: center;
  align-items: center;
}

 /* login_form  el-form这个标签 */
  .login_form{
    width: 40%;
    padding: 30px;
    background-color: #fff;
    border-radius: 10px;
  }

  .el-form {
    padding: 30px;
    background-color: #fff;
    border-radius: 15px;
  }
</style>
