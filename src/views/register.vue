<template>
  <div class="navtop">
    <login-top text="注册bilibili">
      <div
        slot="right"
        style="font-size: 3.611vw"
        @click="$router.push('/login')"
      >
        用户注册
      </div>
    </login-top>
    <login-text label="账号" placeholder="请输入账号"> </login-text>

    <login-text label="密码" placeholder="请输入密码" type="password">
    </login-text>
    <login-btn btntext='注册'></login-btn>
  </div>
</template>

<script>
import LoginTop from "../components/logintop";
import LoginText from "../components/logintext";
import LoginBtn from'../components/loginbtn'
export default {
  components: {
    LoginTop,
    LoginText,
    LoginBtn
  },
};
</script>
