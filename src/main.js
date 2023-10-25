import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { router } from "./router.js";
//
createApp(App).mount("#app");
createApp(App).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
