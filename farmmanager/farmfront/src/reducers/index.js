// import { combineReducers } from "redux";
// import UserReducer from "./UserReducer";

// export default combineReducers({ UserReducer });

import { combineReducers } from "redux";
import AdvanceReducer from "./AdvanceReducer";

export default combineReducers({
    advances: AdvanceReducer,
});
