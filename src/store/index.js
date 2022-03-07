import { createStore } from "vuex";
import * as auth from "../store/modules/Auth";
// import auth from "./modules/Auth";

export default createStore({
  // state: {},
  // mutations: {},
  // actions: {},
  strict: true,
  modules: {
    auth,
  },
});
