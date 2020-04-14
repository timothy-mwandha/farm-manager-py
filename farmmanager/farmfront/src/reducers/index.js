import { combineReducers } from "redux";
import AdvanceReducer from "./AdvanceReducer";

export default combineReducers({
    advances: AdvanceReducer,
});
