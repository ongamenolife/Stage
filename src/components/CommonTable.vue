<template>
  <div class="common-table">
    <el-table :data="tableData" height="90%" stripe style="width: 100%">
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 125"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="180">
        <el-button @click="handelEdit" type="primary" size="mini"
          >编辑</el-button
        >
        <el-button @click="handelDel" type="danger" size="mini">删除</el-button>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pager"
      :total="config.total"
      :current-page.sync="config.page"
      :page-size="20"
      @current-change="changePage"
      layout="prev,pager,next"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
  },
  data() {
    return {};
  },
  methods: {
    handelEdit(row) {
      this.$emit("edit", row);
    },
    handelDel(row) {
      this.$emit("del", row);
    },
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>

<style lang="scss" scoped>
.common-table {
  height: calc(100% - 62px);
  background: #fff;
  position: relative;
  .pager {
    position: absolute;
    bottom: 0;
    right: 20px;
  }
}
</style>
