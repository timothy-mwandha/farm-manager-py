import { combineReducers } from "redux";
import userReducer from "./userReducer";
import advanceReducer from "./advanceReducer";
import incomeReducer from "./incomeReducer";
import expenditureReducer from "./expenditureReducer";
import payrollReducer from "./payrollReducer";
import requisitionReducer from "./requisitionReducer";
import toolReducer from "./toolReducer";
import newConsumableReducer from "./newConsumableReducer";
import consumableReducer from "./consumableReducer";
import harvestReducer from "./harvestReducer";
import toolbincardReducer from "./toolbincardReducer";
import personnelReducer from "./personnelReducer";
import customerReducer from "./customerReducer";
import supplierReducer from "./supplierReducer";

export default combineReducers({
  users: userReducer,
  advances: advanceReducer,
  incomes: incomeReducer,
  expenditures: expenditureReducer,
  payrolls: payrollReducer,
  requisitions: requisitionReducer,
  tools: toolReducer,
  toolbincards:toolbincardReducer,
  consumables: consumableReducer,
  newconsumables: newConsumableReducer,
  harvests: harvestReducer,
  persons: personnelReducer,
  customers: customerReducer,
  suppliers: supplierReducer
});

