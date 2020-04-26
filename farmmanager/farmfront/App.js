import "react-native-gesture-handler";
import React, { Component } from "react";
import ReactDom from "react-dom";
import { AppRegistry, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Provider } from "react-redux";
import store from "./src/store";

import HomePage from "./src/components/HomePage";
import SignUp from "./src/components/SignUp";
import Login from "./src/components/Login";
import PasswordRecoveryOne from "./src/components/PasswordRecoveryOne";
import PasswordRecoveryTwo from "./src/components/PasswordRecoveryTwo";
import Personnel from "./src/components/Personnel";
// import PersonnelLand from "./src/components/PersonnelLand";
// import PersonnelDetails from "./src/components/PersonnelDetails";

import LandReportFinace from "./src/components/LandReportFinance";
import IncomeForm from "./src/components/IncomeForm";
import IncomeLand from "./src/components/IncomeLand";
import IncomeDetails from "./src/components/IncomeDetails";
import ExpenditureForm from "./src/components/ExpenditureForm";
import ExpenditureLand from "./src/components/ExpenditureLand";
import ExpenditureDetails from "./src/components/ExpenditureDetails";
import PayRoll from "./src/components/PayRoll";
import PayrollLand from "./src/components/PayrollLand";
import PayrollDetails from "./src/components/PayrollDetails";
import Advance from "./src/components/Advance";
import AdvanceLand from "./src/components/AdvanceLand";
import AdvanceDetails from "./src/components/AdvanceDetails";
import RequisitionForm from "./src/components/RequisitionForm";
import RequisitionLand from "./src/components/RequisitionLand";
import RequisitionDetails from "./src/components/RequisitionDetails";
import LandReportInventory from "./src/components/LandReportInventory";
// import Consumable from "./src/components/Consumable";
// import ConsumableLand from "./src/components/ConsumableLand";
// import ConsumableDetails from "./src/components/ConsumableDetails";
// import Harvest from "./src/components/Harvest";
// import HarvestLand from "./src/components/HarvestLand";
// import HarvestDetails from "./src/components/HarvestDetails";
// import Tools from "./src/components/Tools";
// import ToolsLand from "./src/components/ToolsLand";
// import ToolsDetails from "./src/components/ToolsDetails";
// import ToolBinCard from "./src/components/ToolBinCard";

import BottomNav from "./src/components/BottomNav";
import Users from "./src/components/Users";

// import UsersView from "./src/components/UsersView";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <Users /> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Landing Page" component={HomePage} />
            <Stack.Screen name="Finance" component={LandReportFinace} />
            <Stack.Screen name="IncomeForm" component={IncomeForm} />
            <Stack.Screen name="IncomeLand" component={IncomeLand} />
            <Stack.Screen name="IncomeDetails" component={IncomeDetails} />
            <Stack.Screen name="ExpenditureForm" component={ExpenditureForm} />
            <Stack.Screen name="ExpenditureLand" component={ExpenditureLand} />
            <Stack.Screen
              name="ExpenditureDetails"
              component={ExpenditureDetails}
            />
            <Stack.Screen name="Payroll" component={PayRoll} />
            <Stack.Screen name="PayrollLand" component={PayrollLand} />
            <Stack.Screen name="PayrollDetails" component={PayrollDetails} />
            <Stack.Screen name="Advance" component={Advance} />
            <Stack.Screen name="AdvanceLand" component={AdvanceLand} />
            <Stack.Screen name="AdvanceDetails" component={AdvanceDetails} />
            <Stack.Screen name="RequisitionForm" component={RequisitionForm} />
            <Stack.Screen name="RequisitionLand" component={RequisitionLand} />
            <Stack.Screen
              name="RequisitionDetails"
              component={RequisitionDetails}
            />
            <Stack.Screen name="Stores" component={LandReportInventory} />
            {/* <Stack.Screen name="Consumable" component={Consumable} /> */}
            {/* <Stack.Screen name="ConsumableLand" component={ConsumableLand} /> */}
            {/* <Stack.Screen
              name="ConsumableDetails"
              component={ConsumableDetails}
            /> */}
            {/* <Stack.Screen name="Harvest" component={Harvest} /> */}
            {/* <Stack.Screen name="HarvestLand" component={HarvestLand} /> */}
            {/* <Stack.Screen name="HarvestDetails" component={HarvestDetails} /> */}
            {/* <Stack.Screen name="Tools" component={Tools} /> */}
            {/* <Stack.Screen name="ToolsLand" component={ToolsLand} /> */}
            {/* <Stack.Screen name="ToolsDetails" component={ToolsDetails} /> */}
            {/* <Stack.Screen name="ToolBinCard" component={ToolBinCard} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
AppRegistry.registerComponent("App", () => App);
