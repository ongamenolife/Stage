<template>
  <div>
    <el-form
      :model="form"
      status-icon
      ref="form"
      label-width="80px"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="username" label-width="80px">
        <el-input
          type="text"
          v-model="form.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" label-width="80px">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Mock from "mockjs";
import { getMenu } from "../../api/data";
export default {
  name: "login",
  data() {
    return {
      form: { username: "", password: "" },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, message: "用户名长度不得小于3", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      const token = Mock.Random.guid();
      this.$store.commit("token", token);
      this.$router.push({ name: "home" });
      getMenu(this.form).then((res) => {
        if (res.code === 20000) {
          this.$store.commit("clearMenu");
          this.$store.commit("setMenu", res.data.menu);
          this.$store.commit("setToken", res.data.token);
          this.$store.commit("addMenu", this.$router);
          this.$router.push({ name: "home" });
        } else {
          console.log(res);
          this.$message.warning(res.data.message);
        }
      });
    },
  },
};
</script>

<style></style>
