<template>
  <div class="register_container">
    <div class="register_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 登录表单区域 -->
      <el-form ref="registerFormRef" :model="registerForm" :rules="registerFormRules" label-width="0px" class="register_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="registerForm.username" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="registerForm.password" placeholder="请输入密码" prefix-icon="el-icon-key" show-password></el-input>
        </el-form-item>
        <el-form-item prop="passwordrepaet">
          <el-input v-model="registerForm.passwordrepaet" placeholder="请重复密码" prefix-icon="el-icon-key" show-password></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item prop="email">
          <el-input v-model="registerForm.email" placeholder="请输入邮箱" prefix-icon="el-icon-message"></el-input>
        </el-form-item>
        <!-- 手机号 -->
        <el-form-item prop="phonenum">
          <el-input v-model="registerForm.phonenum" placeholder="请输入手机号" prefix-icon="el-icon-phone"></el-input>
        </el-form-item>
        <!-- 选择区域 -->
        <template>
          注册类型：
          <el-radio v-model="radio" label="1">品牌方</el-radio>
          <el-radio v-model="radio" label="2">借卖方</el-radio>
        </template>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="info" @click="resetregisterForm">重置</el-button>
          <el-button @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      // 这是登陆表单的数据绑定对象
      registerForm: {
        username: '',
        password: ''
      },
      // 表单的验证规则对象
      registerFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮重置表单
    resetregisterForm() {
      // console.log(this)
      this.$refs.registerFormRef.resetFields()
    },
    // 注册判断逻辑
    // register() {
    //   this.$refs.registerFormRef.validate(valid => {
    //     if (valid) {
    //       if (this.registerForm.passwordrepaet === this.registerForm.password) {
    //         this.$router.push('/login')
    //         this.$message.success('注册成功！')
    //       } else {
    //         this.$message.error('注册失败，请检查密码是否一致')
    //       }
    //     }
    //   })
    // }
    register() {
      if (this.newUsername === '' || this.newage === '') {
        alert('请输入用户名或密码')
      } else {
        const data = { username: this.newUsername, age: this.newage }
        this.$http.post('/api/user/addUser', data).then(res => {
          console.log(res)
          /* 接口的传值是(-1,该用户已存在) */
          if (res.data === -1) {
            this.$message.error('该账号已存在')
            this.showTishi = true
            this.username = ''
            this.age = ''
          } else if (res.status === 200) {
            this.$message.success('注册成功！')
            this.showTishi = true
            this.username = ''
            this.age = ''
            /* 注册成功之后再跳回登录页 */
            setTimeout(
              function() {
                this.showRegister = false
                this.showLogin = true
                this.showTishi = false
              }.bind(this),
              2000
            )
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
/* // lang="less" 支持less格式
// scoped vue的指令，只在当前组件生效 */
.register_container {
  background-color: #8080ff;
  height: 100%;
}
.register_box {
  width: 450px;
  height: 500px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  background-color: #fff;

  .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.register_form {
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: center;
  transform: translateY(20%);
}
.info {
  font-size: 13px;
  margin: 10px 15px;
}
</style>
