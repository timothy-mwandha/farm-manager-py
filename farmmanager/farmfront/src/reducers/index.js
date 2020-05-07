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
  persons: personnelReducer
});

{
  /* <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            // onPress={() => navigation.navigate("")}
            style={{
              flex: 1,
              backgroundColor: "#606734",
              borderRadius: 5,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>UPDATES</Text>
          </TouchableOpacity>
                <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
           */
}