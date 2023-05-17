import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import Vant from "vant";
import "vant/lib/index.css";
const app = createApp(App).use(Vant);
app.mount("#app");
