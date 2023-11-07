import "./assets/main.css";
import "gitart-vue-dialog/dist/style.css";
import { GDialog } from "gitart-vue-dialog";
import { plugin as dialogPlugin } from "gitart-vue-dialog";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
app.use(dialogPlugin);
app.component("GDialog", GDialog);
