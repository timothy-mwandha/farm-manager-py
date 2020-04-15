// index.js
import { combineReducers } from "redux";
// import userReducer from "./userReducer";
import advanceReducer from "./advanceReducer";
// import AdvanceReducer from "./AdvanceReducer";

export default combineReducers({
  // users: userReducer,
  advances: advanceReducer
  // advances:AdvanceReducer
});
