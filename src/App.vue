<template>
  <div>
    <LoadBtn :text="'提交'" :load="'loading'" />
  </div>
</template>

<script>
import LoadBtn from "./components/loadBtn";
export default {
  name: "VueApp",
  components: {
    LoadBtn,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
