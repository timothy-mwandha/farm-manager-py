// index.js
import { combineReducers } from "redux";
import users from "./userReducer";

export default combineReducers({
  // users: users
  userReducer: users
});

// import { combineReducers } from "redux";
// import UserReducer from "./UserReducer";

// export default combineReducers({ UserReducer });
