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
// import NewConsumable from "./src/components/NewConsumable";
// import NewConsumableLand from "./src/components/NewConsumableLand";
// import NewConsumableDetails from "./src/components/NewConsumableDetails";
// import Tool from "./src/components/Tool";
// import ToolLand from "./src/components/ToolLand";
// import ToolDetails from "./src/components/ToolDetails";
// import ToolBinCard from "./src/components/ToolBinCard";
// import ToolBinCardLand from "./src/components/ToolBinCardLand";
// import ToolBinCardDetails from "./src/components/ToolBinCardDetails";
import LandReportWorkers from "./src/components/LandReportWorkers";

import LandReportHarvest from "./src/components/LandReportHarvest";
// import Harvest from "./src/components/Harvest";
// import HarvestLand from "./src/components/HarvestLand";
// import HarvestDetails from "./src/components/HarvestDetails";


import BottomNav from "./src/components/BottomNav";

// import UsersView from "./src/components/UsersView";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Landing Page" component={HomePage} />
            <Stack.Screen name="Finance" component={LandReportFinace} />
            <Stack.Screen name="Sales Form" component={IncomeForm} />
            <Stack.Screen name="Sales Summaries" component={IncomeLand} />
            <Stack.Screen name="Sales Details" component={IncomeDetails} />
            <Stack.Screen name="Expenditure Form" component={ExpenditureForm} />
            <Stack.Screen
              name="Expenditure Summaries"
              component={ExpenditureLand}
            />
            <Stack.Screen
              name="Expenditure Details"
              component={ExpenditureDetails}
            />
            <Stack.Screen name="Payroll Form" component={PayRoll} />
            <Stack.Screen name="Payroll Summaries" component={PayrollLand} />
            <Stack.Screen name="Payroll Details" component={PayrollDetails} />
            <Stack.Screen name="Advance Form" component={Advance} />
            <Stack.Screen name="Advance Summaries" component={AdvanceLand} />
            <Stack.Screen name="Advance Details" component={AdvanceDetails} />
            <Stack.Screen name="Requisition Form" component={RequisitionForm} />
            <Stack.Screen name="Order Summaries" component={RequisitionLand} />
            <Stack.Screen
              name="Requisition Details"
              component={RequisitionDetails}
            />
            <Stack.Screen name="Stores" component={LandReportInventory} />
            {/* <Stack.Screen name="Consumable Form" component={Consumable} /> */}
            {/* <Stack.Screen name="Consumable Summaries" component={ConsumableLand} /> */}
            {/* <Stack.Screen
              name="Consumable Details"
              component={ConsumableDetails}
            /> */}
            {/* <Stack.Screen name="Harvest Form" component={Harvest} /> */}
            {/* <Stack.Screen name="Harvest Summaries" component={HarvestLand} /> */}
            {/* <Stack.Screen name="Harvest Details" component={HarvestDetails} /> */}
            {/* <Stack.Screen name="Tool Form" component={Tool} /> */}
            {/* <Stack.Screen name="Tools Summaries" component={ToolsLand} /> */}
            {/* <Stack.Screen name="Tools Details" component={ToolsDetails} /> */}
            {/* <Stack.Screen name="ToolBinCard" component={ToolBinCard} /> */}
            <Stack.Screen name="Workers" component={LandReportWorkers} />
            {/* <Stack.Screen name="Harvests" component={LandReportHarvests} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
AppRegistry.registerComponent("App", () => App);
