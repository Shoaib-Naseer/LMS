import config from "@/config";

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const setAccessToken = (data: any) => {
  return localStorage.setItem("accessToken", data);
};

export const removeAccessToken = () => {
  return localStorage.removeItem("accessToken");
};

export const setUserInfo = (data: any) => {
  return localStorage.setItem("userInfo", JSON.stringify(data));
};

export const removeUserInfo = () => {
  const userInfo = parseUserInfo();
  return setUserInfo({ timezone: userInfo?.timezone || config.defaultTimezone });
};

export const getUserInfo = (): any => {
  return localStorage.getItem("userInfo");
};

export const parseUserInfo = (): any => {
  const userData = JSON.parse(localStorage.getItem("userInfo") as any);
  return userData;
};
