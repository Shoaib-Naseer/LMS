import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createPinia } from "pinia";

import { OhVueIcon, addIcons } from "oh-vue-icons";

import router from "./router";

import {
  BiEye,
  BiEyeSlash,
  BiCart3,
  OiLocation,
  CoEnvelopeLetter,
  BiChat,
  IoSettingsOutline,
} from "oh-vue-icons/icons";

addIcons(BiEye, BiEyeSlash, BiCart3, OiLocation, CoEnvelopeLetter, BiChat, IoSettingsOutline);

createApp(App).use(router).use(createPinia()).component("VIcon", OhVueIcon).mount("#app");
