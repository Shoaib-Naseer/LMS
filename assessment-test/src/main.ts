import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";

import router from "./router";

import { BiEye, BiEyeSlash } from "oh-vue-icons/icons";

addIcons(BiEye, BiEyeSlash);

createApp(App).use(router).component("VIcon", OhVueIcon).mount("#app");
