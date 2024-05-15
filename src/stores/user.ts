import { getUserInfo, removeUserInfo, setUserInfo } from "../helpers";
import { defineStore } from "pinia";
import { ref } from "vue";

export const basicState = ref({ userInfo: getUserInfo() });

export const useUserStore = defineStore("user-store", {
  state: () => basicState,
  getters: {
    getUserDetails(): any {
      return this.userInfo;
    },
  },
  actions: {
    setUserDetails(userInfo: any) {
      this.userInfo = userInfo;
      setUserInfo(userInfo);
    },
    clearUserAddress() {
      if (this.userInfo) {
        this.userInfo.address = null;
      }
    },
    clearUserDetails() {
      this.userInfo = null;
      removeUserInfo();
    },
  },
});
