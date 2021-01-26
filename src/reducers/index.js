import { combineReducers } from "redux";
import ThemeOptions from "./ThemeOptions";
import agence from "./agence";
import auth from "./auth";

export default combineReducers({
  ThemeOptions,
  auth,
  agence,
});
