<template>
  <div>
    <el-row :gutter="20" class="home">
      <el-col :span="8" style="margin-top: 20px">
        <el-card shadow="hover">
          <div class="user">
            <img :src="userImg" />
            <div class="userinfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登陆的时间:<span>2021-07-10</span></p>
            <p>上次登陆的地点:<span>武汉</span></p>
          </div>
        </el-card>
        <el-card style="margin-top: 20px; height: 460px">
          <el-table :data="tableDate">
            <el-table-column
              v-for="(val, index) in tableLaber"
              :key="index"
              :prop="index"
              :label="val"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col class="margin-top:20px" :span="16">
        <div class="num">
          <el-card
            v-for="val in countDate"
            :key="val.name"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i
              class="icon"
              :class="`el-icon-${val.icon}`"
              :style="{ background: val.color }"
            >
            </i>
            <div class="detail">
              <p class="num">¥{{ val.value }}</p>
              <p class="txt">{{ val.name }}</p>
            </div>
          </el-card>
        </div>
        <el-card style="height: 280px"> </el-card>
        <div class="graph">
          <el-card style="height: 260px"> </el-card>
          <el-card style="height: 260px"> </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getMenu } from "../../api/data.js";
export default {
  data() {
    return {
      userImg: require("../../assets/images/user.png"),
      tableDate: [
        {
          name: "oppo",
          todayBuy: 500,
          monthBuy: 3500,
          totalBuy: 22000,
        },
        {
          name: "vivo",
          todayBuy: 300,
          monthBuy: 2200,
          totalBuy: 24000,
        },
        {
          name: "苹果",
          todayBuy: 800,
          monthBuy: 4500,
          totalBuy: 65000,
        },
        {
          name: "小米",
          todayBuy: 1200,
          monthBuy: 6500,
          totalBuy: 45000,
        },
        {
          name: "三星",
          todayBuy: 300,
          monthBuy: 2000,
          totalBuy: 34000,
        },
        {
          name: "魅族",
          todayBuy: 350,
          monthBuy: 3000,
          totalBuy: 22000,
        },
      ],
      tableLaber: {
        name: "课程名称",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countDate: [
        {
          name: "今日支付订单",
          value: "1234",
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: "1234",
          icon: "success",
          color: "#5ab1ef",
        },
        {
          name: "今日未支付订单",
          value: "1234",
          icon: "success",
          color: "#ffb980",
        },
        {
          name: "本月支付订单",
          value: "1234",
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: "1234",
          icon: "success",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: "1234",
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getMenu().then((res) => {
      console.log(res);
    });
  },
};
</script>

<style></style>
