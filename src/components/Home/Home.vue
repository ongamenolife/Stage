<template>
  <el-container style="height: 100%">
    <el-aside width="auto">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "VueHome",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.el-header {
  background: #000;
}
.el-main {
  padding-top: 0;
}
</style>
