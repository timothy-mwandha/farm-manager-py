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
// import Personnel from "./src/components/Personnel";
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
// import UsersView from "./src/components/UsersView";
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Landing Page"
                            component={HomePage}
                        />
                        <Stack.Screen
                            name="Finance"
                            component={LandReportFinace}
                        />
                        <Stack.Screen
                            name="Sales Form"
                            component={IncomeForm}
                        />
                        <Stack.Screen
                            name="Sales Summaries"
                            component={IncomeLand}
                        />
                        <Stack.Screen
                            name="Sales Details"
                            component={IncomeDetails}
                        />
                        <Stack.Screen
                            name="Expenditure Form"
                            component={ExpenditureForm}
                        />
                        <Stack.Screen
                            name="Expenditure Summaries"
                            component={ExpenditureLand}
                        />
                        <Stack.Screen
                            name="Expenditure Details"
                            component={ExpenditureDetails}
                        />
                        <Stack.Screen name="Payroll Form" component={PayRoll} />
                        <Stack.Screen
                            name="Payroll Summaries"
                            component={PayrollLand}
                        />
                        <Stack.Screen
                            name="Payroll Details"
                            component={PayrollDetails}
                        />
                        <Stack.Screen name="Advance Form" component={Advance} />
                        <Stack.Screen
                            name="Advance Summaries"
                            component={AdvanceLand}
                        />
                        <Stack.Screen
                            name="Advance Details"
                            component={AdvanceDetails}
                        />
                        <Stack.Screen
                            name="Requisition Form"
                            component={RequisitionForm}
                        />
                        <Stack.Screen
                            name="Requisition Summaries"
                            component={RequisitionLand}
                        />
                        <Stack.Screen
                            name="Requisition Details"
                            component={RequisitionDetails}
                        />
                        <Stack.Screen
                            name="Stores"
                            component={LandReportInventory}
                        />
                        {/* <Stack.Screen name="Consumable Form" component={Consumable} /> */}
                        {/* <Stack.Screen name="Consumable Summaries" component={ConsumableLand} /> */}
                        {/* <Stack.Screen
              name="Consumable Details"
              component={ConsumableDetails}
            /> */}
                        {/* <Stack.Screen name="Harvest Form" component={Harvest} /> */}
                        {/* <Stack.Screen name="Harvest Summaries" component={HarvestLand} /> */}
                        {/* <Stack.Screen name="Harvest Details" component={HarvestDetails} /> */}
                        {/* <Stack.Screen name="Tools Form" component={Tools} /> */}
                        {/* <Stack.Screen name="Tools Summaries" component={ToolsLand} /> */}
                        {/* <Stack.Screen name="Tools Details" component={ToolsDetails} /> */}
                        {/* <Stack.Screen name="ToolBinCard" component={ToolBinCard} /> */}
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}
AppRegistry.registerComponent("App", () => App);


import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  StyleSheet
} from "react-native";
export class App extends React.Component {
  state = {
    products: [
      {title: 'Apple', count: 0, price: 100},
      {title: 'IBM', count: 0, price: 200},
      {title: 'HP', count: 0, price: 300},
    ]
  }
  
  onChange = (index, val) => {
    this.setState({
      products: this.state.products.map((product, i) => (
        i === index ? {...product, count: val} : product
      ))
    })
  }

  render () {
    return (
      <View>
        <Text products={this.state.products} onChange={this.onChange} />
        <Text products={this.state.products} />
      </View>
    )
  }
};

const ProductList = ({ products, onChange }) => (
  <ul>
    {products.map((product, i) => (
      <li key={i}>
        {product.title}
        <input 
          type="text" 
          value={product.count}
          onChange={e => onChange(i, parseInt(e.target.value) || 0)}
        />
      </li>
    ))}
  </ul>
);

const Total = ({ products }) => (
  <h3>
    Price: 
    {products.reduce((sum, i) => (
      sum += i.count * i.price
    ), 0)}
  </h3>
)


export default App


// import React from 'react';
// import { View, Text, FlatList, Button, SafeAreaView, processColor } from 'react-native';

// const products = [
//   { _id: 1, name: 'Item 1', price: 50, quantity: 0 },
//   { _id: 2, name: 'Item 2', price: 29, quantity: 0 },
//   { _id: 3, name: 'Item 3', price: 200, quantity: 0 },
// ];

// class ListItem extends React.Component {
//   render() {
//     const { item } = this.props;
// 5
//     return (
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//         <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
//           <Text>{item.name} - </Text>
//           <Text>{item.price}</Text>
//         </View>
//         <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
//           <Button title="Subtract" onPress={this.props.onSubtract} />
//           <Text>{item.quantity}</Text>
//           <Button title="Add" onPress={this.props.onAdd} />
//         </View>
//       </View>
//     )
//   }
// }

// class App extends React.Component {
//   state = {
//     products,
//   };

//   onSubtract = (item, index) => {
//     const products = [...this.state.products];
//     products[index].quantity -= 1;
//     this.setState({ products });
//   }

//   onAdd = (item, index) => {
//     const products = [...this.state.products];
//     products[index].quantity += 1;
//     this.setState({ products });
//   }

//   render() {
//     const { products } = this.state;
//     let totalQuantity = 0;
//     let totalPrice = 0;
//     products.forEach((item) => {
//       totalQuantity += item.quantity;
//       totalPrice += item.quantity * item.price;
//     })

//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <FlatList
//           data={this.state.products}
//           renderItem={({ item, index }) => (
//             <ListItem
//               item={item}
//               onSubtract={() => this.onSubtract(item, index)}
//               onAdd={() => this.onAdd(item, index)}
//             />
//           )}
//           keyExtractor={item => item._id}
//         />
//         <Text>Total Quantity: {totalQuantity}</Text>
//         <Text>Total Price: {totalPrice}</Text>
//       </SafeAreaView>
//     );
//   }
// }

// export default App;