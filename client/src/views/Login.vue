<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form ref="userForm" :model="user" status-icon :rules="rules">
        <div class="title">管理后台</div>
        <el-form-item prop="userName">
          <el-input
            type="text"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
            v-model="user.userName"
          />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input
            type="password"
            placeholder="请输入密码"
            prefix-icon="el-icon-view"
            v-model="user.userPwd"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    // 使用闭包的方式，避免组件在复用的时候，组件间的变量互相污染。
    return {
      user: {
        userName: '',
        userPwd: '',
      },
      rules: {
        userName: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
        ],
        userPwd: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    login() {
      // 校验输入
      this.$refs.userForm.validate((valid) => {
        if (valid) {
          this.$api.login(this.user).then((res) => {
            this.$store.commit('saveUserInfo', res)
            this.$router.push('./welcome')
            console.log('res', res)
          })
        } else {
          return false
        }
      })
    },
  },
}
</script>
<style lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;

  .modal {
    width: 500px;
    padding: 50px;
    box-shadow: 0 0 10px 3px #c7c9cb4d;

    .title {
      font-size: 30px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
      font-weight: bold;
    }

    .btn-login {
      width: 100%;
      margin-top: 30px;
    }
  }
}
</style>
