import axios from "axios";
import { config } from "../config/config";

const endpoints = config;
const saveEndpoint = endpoints.saveApi;
const listEndpoint = endpoints.listApi;
const loginEndpoint = endpoints.loginApi;

const saveApi = (data, methodType) => {
  return axios.request({
    url: saveEndpoint,
    method: methodType,
    data,
  });
};

const listApi = (methodType) => {
  return axios.request({
    url: listEndpoint,
    headers: { Authorization: localStorage.getItem("token") },
    method: methodType,
  });
};

const loginApi = (data, methodType) => {
  return axios.request({
    url: loginEndpoint,
    method: methodType,
    data,
  });
};

export default { saveApi, listApi, loginApi };
