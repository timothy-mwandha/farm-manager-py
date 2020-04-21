import "react-native-gesture-handler";
import React, { Component } from "react";
import ReactDom from "react-dom";
import { AppRegistry, View, Text, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Provider } from "react-redux";
import store from "./src/components/store";

import HomePage from "./src/components/HomePage";
import SignUp from "./src/components/SignUp";
import Login from "./src/components/Login";
import PayRoll from "./src/components/PayRoll";
import PasswordRecoveryOne from "./src/components/PasswordRecoveryOne";
import PasswordRecoveryTwo from "./src/components/PasswordRecoveryTwo";
import Advance from "./src/components/Advance";
// import ToolBinCard from "./src/components/ToolBinCard";
// import Personnel from "./src/components/Personnel";
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
import Users from "./src/components/Users";
import AdvanceDetails from "./src/components/AdvanceDetails";

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
                            name="incomeForm"
                            component={IncomeForm}
                        />
                        <Stack.Screen
                            name="expenditureForm"
                            component={ExpenditureForm}
                        />
                        <Stack.Screen
                            name="incomeLand"
                            component={IncomeLand}
                        />
                        <Stack.Screen
                            name="expenditureland"
                            component={ExpenditureLand}
                        />
                        <Stack.Screen
                            name="payrollLand"
                            component={PayrollLand}
                        />
                        <Stack.Screen
                            name="requisitionland"
                            component={RequisitionLand}
                        />
                        <Stack.Screen name="payroll" component={PayRoll} />
                        <Stack.Screen
                            name="requisitionForm"
                            component={RequisitionForm}
                        />
                        <Stack.Screen name="advance" component={Advance} />
                        <Stack.Screen
                            name="advanceLand"
                            component={AdvanceLand}
                        />
                        <Stack.Screen
                            name="advanceDetails"
                            component={AdvanceDetails}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}
AppRegistry.registerComponent("App", () => App);






// import "react-native-gesture-handler";
// import React, { Component } from "react";

// import { AppRegistry, StyleSheet, Text, View, ListView } from "react-native";

// import { StackNavigator } from "react-navigation";

// class FirstActivity extends Component {
//     constructor(props) {
//         super(props);

//         const ds = new ListView.DataSource({
//             rowHasChanged: (r1, r2) => r1 !== r2,
//         });

//         this.state = {
//             dataSource: ds.cloneWithRows([
//                 "Item 1",
//                 "Item 2",
//                 "Item 3",
//                 "Item 4",
//                 "Item 5",
//                 "Item 6",
//                 "Item 7",
//                 "Item 8",
//                 "Item 9",
//                 "Item 10",
//                 "Item 11",
//                 "Item 12",
//                 "Item 13",
//                 "Item 14",
//                 "Item 15",
//                 "Item 16",
//                 "Item 17",
//                 "Item 18",
//                 "Item 19",
//                 "Item 20",
//             ]),
//         };
//     }

//     ListViewItemSeparatorLine = () => {
//         return (
//             <View
//                 style={{
//                     height: 0.5,
//                     width: "100%",
//                     backgroundColor: "#000",
//                 }}
//             />
//         );
//     };

//     OpenSecondActivity(rowData) {
//         this.props.navigation.navigate("Second", {
//             ListViewClickItemHolder: rowData,
//         });
//     }

//     static navigationOptions = {
//         title: "FirstActivity",
//     };

//     render() {
//         return (
//             <View style={styles.MainContainer}>
//                 <ListView
//                     dataSource={this.state.dataSource}
//                     renderSeparator={this.ListViewItemSeparatorLine}
//                     renderRow={(rowData) => (
//                         <Text
//                             style={styles.rowViewContainer}
//                             onPress={this.OpenSecondActivity.bind(
//                                 this,
//                                 rowData
//                             )}
//                         >
//                             {rowData}
//                         </Text>
//                     )}
//                 />
//             </View>
//         );
//     }
// }

// class SecondActivity extends Component {
//     static navigationOptions = {
//         title: "SecondActivity",
//     };

//     render() {
//         return (
//             <View style={styles.MainContainer}>
//                 <Text style={styles.TextStyle}>
//                     {" "}
//                     {
//                         this.props.navigation.state.params
//                             .ListViewClickItemHolder
//                     }{" "}
//                 </Text>
//             </View>
//         );
//     }
// }

// export default Project = StackNavigator({
//     First: { screen: FirstActivity },

//     Second: { screen: SecondActivity },
// });

// const styles = StyleSheet.create({
//     MainContainer: {
//         justifyContent: "center",
//         flex: 1,
//         margin: 10,
//     },

//     TextStyle: {
//         fontSize: 23,
//         textAlign: "center",
//         color: "#000",
//     },

//     rowViewContainer: {
//         fontSize: 18,
//         paddingRight: 10,
//         paddingTop: 10,
//         paddingBottom: 10,
//     },
// });

// import "react-native-gesture-handler";
// import React, { Component } from "react";
// // import ReactDom from "react-dom";
// import { AppRegistry, View, Text, Button, TextInput } from "react-native";

// export default class App extends React.Component {
//     constructor(props) {
//     super(props);
//   state = {
//     result: 4,
//     num1: 2,
//     num2: 2
//   };
//     }
//   handlenum1Change = evt => {
//     const num1 = Number(evt.target.value);
//     this.setState(prevState => ({
//       num1,
//       result: num1 + prevState.num2
//     }));
//   };

//   handlenum2Change = evt => {
//     const num2 = Number(evt.target.value);
//     this.setState(prevState => ({
//       num2,
//       result: prevState.num1 + num2
//     }));
//   };

//   render() {
//     return (
//      <View style={{ fontSize: 20, padding: 40,}}>
//           <TextInput style={{ fontSize: 25, borderBottomColor:'#000', borderBottomWidth:1 }}
//             type="number"
//             name="num1"
//             value={this.state.num1}
//             onChange={this.handlenum1Change}
//           />
//           <TextInput style={{ fontSize: 25, borderBottomColor:'#000', borderBottomWidth:1, padding:10 }}
//             type="number"
//             name="num2"
//             value={this.state.num2}
//             onChange={this.handlenum2Change}
//           />
//           <TextInput type="text" value={this.state.result} readOnly
//           style={{ fontSize: 25, borderBottomColor:'#000', borderBottomWidth:1, padding:10 }}/>
//      </View>
//     );
//   }
// }
