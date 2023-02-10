import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import axios from "axios";
const token = localStorage.getItem("user-token");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}

// import { DataService } from "../src/api/dataService";

import { createStore } from "vuex";
import vuex from "./store";

const store = createStore(vuex);
// const $DataService = new DataService()
// store.$DataService = $DataService
const app = createApp(App);

// app.use({
//   install(app) {

//       let prototype = app.config.globalProperties;
//       function protoDefProp(propName, getter, setter) {
//           let propMap = {};
//           getter && (propMap.get = getter);
//           setter && (propMap.get = setter);
//           Object.defineProperty(prototype, propName, propMap);
//       }
//       protoDefProp("$DataService", () => $DataService);

//   },
// });
app.use(store).use(router).mount("#app");
