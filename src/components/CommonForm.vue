<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" :inline="inline">
      <el-form-item
        v-for="item in formLabel"
        :key="item.label"
        :label="item.label"
      >
        <el-input
          v-if="item.type === 'input'"
          :placeholder="`请输入` + item.label"
          v-model="form[item.model]"
        ></el-input>
        <el-switch
          v-if="item.type === 'switch'"
          v-model="form[item.model]"
        ></el-switch>
        <el-date-picker
          v-model="form[item.model]"
          type="date"
          v-if="item.type === 'date'"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
        ></el-date-picker>
        <el-select
          v-model="form[item.model]"
          placeholder="请选择"
          v-if="item.type === 'select'"
        >
          <el-option
            v-for="val in item.opts"
            :key="val.value"
            :label="val.label"
            :value="val.value"
          ></el-option>
          -->
        </el-select>
      </el-form-item>
      <el-form-item>
        <slot></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    formLabel: Array,
    form: Object,
    inline: Boolean,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
