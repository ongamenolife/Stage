<template>
  <div>
    <button @click="listadd" :style="btnStyle">
      {{ loads ? `${text}` : `${load}` }}
    </button>
    <ul v-for="item in list" :key="item.id">
      <li>{{ item.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "loadBtn",
  props: {
    btnStyle: String,
    load: String,
    text: String,
  },
  data() {
    return {
      loads: true,
      list: [],
    };
  },
  watch: {
    list(nVal) {
      if (nVal.length !== 0) {
        this.loads = true;
      }
    },
  },
  mounted() {},
  methods: {
    listadd() {
      this.loads = false;
      let List = [
        { id: 1, text: "qwe" },
        { id: 2, text: "asd" },
        { id: 3, text: "zxc" },
        { id: 4, text: "qaz" },
      ];
      setTimeout(() => {
        this.list = List;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
