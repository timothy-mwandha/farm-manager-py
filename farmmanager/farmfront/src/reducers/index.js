// index.js
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import advanceReducer from "./advanceReducer";

export default combineReducers({
  users: userReducer,
  advances: advanceReducer
  // advance: advanceReducer
});
