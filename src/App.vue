<template>
  <div id="App">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "VueApp",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#App {
  height: 100vh;
}
</style>
