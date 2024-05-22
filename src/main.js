import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/index.js";
import store from "./store";
// import { createMetaManager } from 'vue-meta';
import { createHead } from "@vueuse/head";

const head = createHead()
createApp(App)
    .use(store)
    .use(router)
    .use(head)
    // .use(createMetaManager())
    .mount("#app");

