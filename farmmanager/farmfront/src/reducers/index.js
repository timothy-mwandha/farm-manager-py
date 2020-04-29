import { combineReducers } from "redux";
import userReducer from "./userReducer";
import advanceReducer from "./advanceReducer";
import incomeReducer from "./incomeReducer";
import expenditureReducer from "./expenditureReducer";
import payrollReducer from "./payrollReducer";
import requisitionReducer from "./requisitionReducer";

export default combineReducers({
  users: userReducer,
  advances: advanceReducer,
  incomes: incomeReducer,
  expenditures: expenditureReducer,
  payrolls: payrollReducer,
  requisitions: requisitionReducer
});
