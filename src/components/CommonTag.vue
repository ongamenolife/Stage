<template>
  <div class="tabs">
    <el-tag
      type=""
      size="small"
      v-for="(item, index) in tags"
      :key="item.name"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      >{{ item.label }}</el-tag
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      close: "closeTag",
    }),
    changeMenu(item) {
      this.$router.push(
        { name: item.name },
        (onComplete) => {},
        (onAbort) => {}
      );
    },
    handleClose(item, index) {
      const length = this.tags.length - 1;
      this.close(item);
      if (item.name !== this.$router.name) {
        return;
      }
      if (index === length) {
        this.$router.push({ name: this.tags[index - 1].name }),
          (onComplete) => {},
          (onAbort) => {};
      } else {
        this.$router.push({ name: this.tags[index].name }),
          (onComplete) => {},
          (onAbort) => {};
      }
    },
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  padding: 10px;
  .el-tag {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
