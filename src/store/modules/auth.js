// import { DataService } from "../../api/dataService";
// import * as authServices from "../../api/authServices";
import AuthService from "../../api/authServices";
export default {
  namespaced: true,
  state: () => ({
    hehe: 12,
  }),

  mutations: {},

  actions: {
    async logIn(context, data) {
      try {
        const result = await AuthService.logIn(data);
        result;
      } catch (error) {
        console.log("error");
      }
    },
  },
};
