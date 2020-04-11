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
import PayRoll from "./src/components/PayRoll";
import PasswordRecoveryOne from "./src/components/PasswordRecoveryOne";
import PasswordRecoveryTwo from "./src/components/PasswordRecoveryTwo";
import Advance from "./src/components/Advance";
import ToolBinCard from "./src/components/ToolBinCard";
import Personnel from "./src/components/Personnel";
import ExpenditureForm from "./src/components/ExpenditureForm";
import IncomeForm from "./src/components/IncomeForm";
import BottomNav from "./src/components/BottomNav";
import Harvest from "./src/components/Harvest";
import Consumable from "./src/components/Consumable";
import RequisitionForm from "./src/components/RequisitionForm";
import LandReportFinace from "./src/components/LandReportFinance";
import LandReportInventory from "./src/components/LandReportInventory";
import IncomeLand from "./src/components/IncomeLand";
import ExpenditureLand from "./src/components/ExpenditureLand";
import PayrollLand from "./src/components/PayrollLand";
import RequisitionLand from "./src/components/RequisitionLand";
import AdvanceLand from "./src/components/AdvanceLand";
import ToolsLand from "./src/components/ToolsLand";
import HarvestLand from "./src/components/HarvestLand";
import ConsumableLand from "./src/components/ConsumableLand";
import Users from "./src/components/Users";
// import UsersView from "./src/components/UsersView";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

// import configureStore from "./src/store/configureStore";

// const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <Users /> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Landing Page" component={HomePage} />
            <Stack.Screen name="Stores" component={LandReportInventory} />
            <Stack.Screen name="ConsumableLand" component={ConsumableLand} />
            <Stack.Screen name="ToolsLand" component={ToolsLand} />
            <Stack.Screen name="HarvestLand" component={HarvestLand} />
            <Stack.Screen name="ToolBinCard" component={ToolBinCard} />
            <Stack.Screen name="Harvest" component={Harvest} />
            <Stack.Screen name="Consumable" component={Consumable} />
            <Stack.Screen name="Finance" component={LandReportFinace} />
            <Stack.Screen name="incomeForm" component={IncomeForm} />
            <Stack.Screen name="expenditureForm" component={ExpenditureForm} />
            <Stack.Screen name="incomeLand" component={IncomeLand} />
            <Stack.Screen name="expenditureland" component={ExpenditureLand} />
            <Stack.Screen name="payrollLand" component={PayrollLand} />
            <Stack.Screen name="requisitionland" component={RequisitionLand} />
            <Stack.Screen name="payroll" component={PayRoll} />
            <Stack.Screen name="requisitionForm" component={RequisitionForm} />
            <Stack.Screen name="advance" component={Advance} />
            <Stack.Screen name="advanceLand" component={AdvanceLand} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
AppRegistry.registerComponent("App", () => App);
