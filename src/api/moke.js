import Mock from "mockjs";
import homeApi from "./mockServeData";

Mock.mock("/home/getData", homeApi.getStatisticalData);
