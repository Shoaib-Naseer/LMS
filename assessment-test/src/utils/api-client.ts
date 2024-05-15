import axios from "axios";
import config from "../config";
//Base APi Url
const apiUrl = `${config.baseUrl}`;

const axiosApi = axios.create({ baseURL: apiUrl });

import { getAccessToken, removeAccessToken, removeUserInfo } from "../helpers";

import StyledAlert from "../components/reusables/StyledAlert";
import { Config, Get, Post, Put, Del, Patch } from "../types/http";

const setConfigs = (config: Config) => {
  const { token } = { token: getAccessToken() };
  const obj = { ...config, headers: { ...config.headers, authorization: `Bearer ${token}` } };
  return obj;
};

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      removeAccessToken();
      removeUserInfo();
      StyledAlert("Session Expired", "Please Login Again").then(() => (window.location.href = "/login"));
    }
    return Promise.reject(error);
  },
);

export const get: Get = async function (url, config = {}, hasAuth = true) {
  try {
    if (hasAuth) {
      config = setConfigs(config);
    }

    const { data, headers } = await axiosApi.get(url, { ...config });

    const isTotalRecordsExists = Boolean(headers["total-records"]);
    if (isTotalRecordsExists)
      data.totalRecords = isNaN(headers["total-records"]) ? false : Number(headers["total-records"]);

    return { success: true, data };
  } catch (error: any) {
    return { success: false, data: error };
  }
};

export const post: Post = async function (url, reqBody, config = {}, hasAuth = true) {
  try {
    if (hasAuth) {
      config = setConfigs(config);
    }
    const { data } = await axiosApi.post(
      url,
      { ...reqBody },
      {
        ...config,
      },
    );
    return { success: true, data };
  } catch (error: any) {
    return { success: false, data: error };
  }
};

export const put: Put = async function (url, reqBody, config = {}, hasAuth = true) {
  try {
    if (hasAuth) {
      config = setConfigs(config);
    }
    const { data } = await axiosApi.put(
      url,
      { ...reqBody },
      {
        ...config,
      },
    );
    return { success: true, data };
  } catch (error: any) {
    return { success: false, data: error };
  }
};

export const patch: Patch = async function (url, reqBody, config = {}, hasAuth = true) {
  try {
    if (hasAuth) {
      config = setConfigs(config);
    }
    const { data } = await axiosApi.patch(
      url,
      { ...reqBody },
      {
        ...config,
      },
    );

    return { success: true, data };
  } catch (error: any) {
    return { success: false, data: error };
  }
};

export const del: Del = async function (url, config = {}, hasAuth = true) {
  try {
    if (hasAuth) {
      config = setConfigs(config);
    }
    const { data } = await axiosApi.delete(url, {
      ...config,
    });

    return { success: true, data };
  } catch (error: any) {
    return { success: false, data: error };
  }
};
