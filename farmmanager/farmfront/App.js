// import "react-native-gesture-handler";
// import React, { Component } from "react";
// import ReactDom from "react-dom";
// import { AppRegistry, View, Text, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { Provider } from "react-redux";
// import store from "./src/store";
// import HomePage from "./src/components/HomePage";
// import SignUp from "./src/components/SignUp";
// import Login from "./src/components/Login";
// import PasswordRecoveryOne from "./src/components/PasswordRecoveryOne";
// import PasswordRecoveryTwo from "./src/components/PasswordRecoveryTwo";
// // import Personnel from "./src/components/Personnel";
// // import PersonnelLand from "./src/components/PersonnelLand";
// // import PersonnelDetails from "./src/components/PersonnelDetails";
// import LandReportFinace from "./src/components/LandReportFinance";
// import IncomeForm from "./src/components/IncomeForm";
// import IncomeLand from "./src/components/IncomeLand";
// import IncomeDetails from "./src/components/IncomeDetails";
// import ExpenditureForm from "./src/components/ExpenditureForm";
// import ExpenditureLand from "./src/components/ExpenditureLand";
// import ExpenditureDetails from "./src/components/ExpenditureDetails";
// import PayRoll from "./src/components/PayRoll";
// import PayrollLand from "./src/components/PayrollLand";
// import PayrollDetails from "./src/components/PayrollDetails";
// import Advance from "./src/components/Advance";
// import AdvanceLand from "./src/components/AdvanceLand";
// import AdvanceDetails from "./src/components/AdvanceDetails";
// import RequisitionForm from "./src/components/RequisitionForm";
// import RequisitionLand from "./src/components/RequisitionLand";
// import RequisitionDetails from "./src/components/RequisitionDetails";
// import LandReportInventory from "./src/components/LandReportInventory";
// // import Consumable from "./src/components/Consumable";
// // import ConsumableLand from "./src/components/ConsumableLand";
// // import ConsumableDetails from "./src/components/ConsumableDetails";
// // import Harvest from "./src/components/Harvest";
// // import HarvestLand from "./src/components/HarvestLand";
// // import HarvestDetails from "./src/components/HarvestDetails";
// // import Tools from "./src/components/Tools";
// // import ToolsLand from "./src/components/ToolsLand";
// // import ToolsDetails from "./src/components/ToolsDetails";
// // import ToolBinCard from "./src/components/ToolBinCard";
// import BottomNav from "./src/components/BottomNav";
// // import UsersView from "./src/components/UsersView";
// const Tab = createMaterialBottomTabNavigator();
// const Stack = createStackNavigator();
// export default class App extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <NavigationContainer>
//                     <Stack.Navigator>
//                         <Stack.Screen
//                             name="Landing Page"
//                             component={HomePage}
//                         />
//                         <Stack.Screen
//                             name="Finance"
//                             component={LandReportFinace}
//                         />
//                         <Stack.Screen
//                             name="Sales Form"
//                             component={IncomeForm}
//                         />
//                         <Stack.Screen
//                             name="Sales Summaries"
//                             component={IncomeLand}
//                         />
//                         <Stack.Screen
//                             name="Sales Details"
//                             component={IncomeDetails}
//                         />
//                         <Stack.Screen
//                             name="Expenditure Form"
//                             component={ExpenditureForm}
//                         />
//                         <Stack.Screen
//                             name="Expenditure Summaries"
//                             component={ExpenditureLand}
//                         />
//                         <Stack.Screen
//                             name="Expenditure Details"
//                             component={ExpenditureDetails}
//                         />
//                         <Stack.Screen name="Payroll Form" component={PayRoll} />
//                         <Stack.Screen
//                             name="Payroll Summaries"
//                             component={PayrollLand}
//                         />
//                         <Stack.Screen
//                             name="Payroll Details"
//                             component={PayrollDetails}
//                         />
//                         <Stack.Screen name="Advance Form" component={Advance} />
//                         <Stack.Screen
//                             name="Advance Summaries"
//                             component={AdvanceLand}
//                         />
//                         <Stack.Screen
//                             name="Advance Details"
//                             component={AdvanceDetails}
//                         />
//                         <Stack.Screen
//                             name="Requisition Form"
//                             component={RequisitionForm}
//                         />
//                         <Stack.Screen
//                             name="Requisition Summaries"
//                             component={RequisitionLand}
//                         />
//                         <Stack.Screen
//                             name="Requisition Details"
//                             component={RequisitionDetails}
//                         />
//                         <Stack.Screen
//                             name="Stores"
//                             component={LandReportInventory}
//                         />
//                         {/* <Stack.Screen name="Consumable Form" component={Consumable} /> */}
//                         {/* <Stack.Screen name="Consumable Summaries" component={ConsumableLand} /> */}
//                         {/* <Stack.Screen
//               name="Consumable Details"
//               component={ConsumableDetails}
//             /> */}
//                         {/* <Stack.Screen name="Harvest Form" component={Harvest} /> */}
//                         {/* <Stack.Screen name="Harvest Summaries" component={HarvestLand} /> */}
//                         {/* <Stack.Screen name="Harvest Details" component={HarvestDetails} /> */}
//                         {/* <Stack.Screen name="Tools Form" component={Tools} /> */}
//                         {/* <Stack.Screen name="Tools Summaries" component={ToolsLand} /> */}
//                         {/* <Stack.Screen name="Tools Details" component={ToolsDetails} /> */}
//                         {/* <Stack.Screen name="ToolBinCard" component={ToolBinCard} /> */}
//                     </Stack.Navigator>
//                 </NavigationContainer>
//             </Provider>
//         );
//     }
// }
// AppRegistry.registerComponent("App", () => App);

// import React, { Component } from 'react';
// import {
//   Text,
//   View,
//   Button,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   ScrollView,
//   Image,
//   StyleSheet
// } from "react-native";
// export class App extends React.Component {
//   state = {
//     products: [
//       {title: 'Apple', count: 0, price: 100},
//       {title: 'IBM', count: 0, price: 200},
//       {title: 'HP', count: 0, price: 300},
//     ]
//   }

//   onChange = (index, val) => {
//     this.setState({
//       products: this.state.products.map((product, i) => (
//         i === index ? {...product, count: val} : product
//       ))
//     })
//   }

//   render () {
//     return (
//       <View>
//         <Text products={this.state.products} onChange={this.onChange} />
//         <Text products={this.state.products} />
//       </View>
//     )
//   }
// };

// const ProductList = ({ products, onChange }) => (
//   <ul>
//     {products.map((product, i) => (
//       <li key={i}>
//         {product.title}
//         <input
//           type="text"
//           value={product.count}
//           onChange={e => onChange(i, parseInt(e.target.value) || 0)}
//         />
//       </li>
//     ))}
//   </ul>
// );

// const Total = ({ products }) => (
//   <h3>
//     Price:
//     {products.reduce((sum, i) => (
//       sum += i.count * i.price
//     ), 0)}
//   </h3>
// )

// export default App

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

// import React from 'react';
// import { View, Text, FlatList, Button, SafeAreaView, processColor, TextInput } from 'react-native';

// export default  class Test extends React.Component {
//   state = {
//     result: '',
//     num1: '',
//     num2: ''
//   };

//   handlenum1Change = evt => {
//     const num1 = (evt.target.value);
//     this.setState(prevState => ({
//       num1,
//       result: num1 + prevState.num2
//     }));
//   };

//   handlenum2Change = evt => {
//     const num2 = (evt.target.value);
//     this.setState(prevState => ({
//       num2,
//       result: prevState.num1 + num2
//     }));
//   };

//   render() {
//     return (
//       <View>
//           <TextInput
//             type="string"
//             name="num1"
//             value={this.state.num1}
//             onChange={this.handlenum1Change}
//           />
//           <TextInput
//             name="num2"
//             value={this.state.num2}
//             onChange={this.handlenum2Change}
//           />
//           <TextInput type="text" value={this.state.result} readOnly />
//       </View>
//     );
//   }
// }

// import * as yup from 'yup'
// import { Formik } from 'formik'

// import React, { Component, Fragment } from 'react';
// import { TextInput, Text, Button, Alert } from 'react-native';

// export default class App extends Component {

//  handlenum1Change = evt => {
//     const num1 = (evt.target.value);
//     this.setState(prevState => ({
//       num1,
//       result: num1 + prevState.num2
//     }));
//   };

//   handlenum2Change = evt => {
//     const num2 = (evt.target.value);
//     this.setState(prevState => ({
//       num2,
//       result: prevState.num1 + num2
//     }));
//   };

//   render() {
//     const {num1} = this.props
//     const {num2} = this.props
//     return (
//       <Formik
//         initialValues={{ email: '', password: '', result: '',
//     num1: '',
//     num2: '' }}
//         onSubmit={values => Alert.alert(JSON.stringify(values))}
//         validationSchema={yup.object().shape(
//           {
//           email: yup
//             .string()
//             .email()
//             .required(),
//           password: yup
//             .string()
//             .min(6)
//             .required(),
//         })}
//       >
//         {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
//           <Fragment>
//             <TextInput
//               value={values.email}
//               onChangeText={handleChange('email')}
//               onBlur={() => setFieldTouched('email')}
//               placeholder="E-mail"
//             />
//             {touched.email && errors.email &&
//               <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
//             }
//             <TextInput
//               value={values.password}
//               onChangeText={handleChange('password')}
//               placeholder="Password"
//               onBlur={() => setFieldTouched('password')}
//               secureTextEntry={true}
//             />
//             {touched.password && errors.password &&
//               <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
//             }
//             <Button
//               title='Sign In'
//               disabled={!isValid}
//               onPress={handleSubmit}
//             />
//             {/* <TextInput
//             type="string"
//             name="num1"
//             value={this.state.num1}
//             onChange={this.handlenum1Change}
//           />
//           <TextInput
//             name="num2"
//             value={this.state.num2}
//             onChange={this.handlenum2Change}
//           />
//           <TextInput type="text" value={this.state.result} readOnly /> */}
//           </Fragment>
//         )}
//       </Formik>
//     );
//   }
// }

import React, { Component } from "react";
import {
    TextInput,
    Text,
    Button,
    Alert,
    View,
    StyleSheet,
    ScrollView,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
// import DatePicker from "react-datepicker"

export default class App extends Component {
    render() {
        const unitprice = this.props
        const quantity = this.quantity
        const inputStyle = {
            borderWidth: 1,
            borderColor: "#4e4e4e",
            padding: 12,
            marginBottom: 5,
        };

        handleunitpriceChange = (evt) => {
            const unitprice = Number(values.unitprice);
            this.setState((prevState) => ({
                unitprice,
                result: unitprice + prevState.quantity,
            }));
        };

        handlequantityChange = (evt) => {
            const quantity = Number(values.quantity);
            this.setState((prevState) => ({
                quantity,
                result: prevState.unitprice + quantity,
            }));
        };

        return (
            <ScrollView>
                <Formik
                    initialValues={{
                        customer: "",
                        email: "",
                        password: "",
                        startDate: new Date(),
                        unitprice: "0",
                        quantity: "0",
                        subtotal: "0",
                    }}
                    onSubmit={(values) => Alert.alert(JSON.stringify(values))}
                    validationSchema={yup.object().shape({
                        name: yup
                            .string()
                            .required("Please, provide your name!"),
                        email: yup.string().email().required(),
                        password: yup
                            .string()
                            .min(4)
                            .max(10, "Password should not excced 10 chars.")
                            .required(),
                    })}
                >
                    {({
                        values,
                        handleChange,
                        errors,
                        setFieldTouched,
                        touched,
                        isValid,
                        handleSubmit,
                    }) => (
                        <View style={styles.formContainer}>
                            {/* <DatePicker
                      selected={values.startDate}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                      name="startDate"
                      onChange={date => setFieldValue('startDate', date)}
                    /> */}
                            <TextInput
                                value={values.customer}
                                style={inputStyle}
                                onChangeText={handleChange("customer")}
                                placeholder="Customer"
                                onBlur={() => setFieldTouched("customer")}
                            />
                            {touched.customer && errors.customer && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.customer}
                                </Text>
                            )}
                            <TextInput
                                value={values.phone}
                                style={inputStyle}
                                onChangeText={handleChange("phone")}
                                onBlur={() => setFieldTouched("phone")}
                                placeholder="Phone"
                            />
                            {touched.phone && errors.phone && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.phone}
                                </Text>
                            )}

                            <TextInput
                                value={values.product}
                                style={inputStyle}
                                onChangeText={handleChange("product")}
                                onBlur={() => setFieldTouched("product")}
                                placeholder="Product"
                            />
                            {touched.product && errors.product && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.product}
                                </Text>
                            )}
                            <TextInput
                                value={values.unit}
                                style={inputStyle}
                                onChangeText={handleChange("unit")}
                                placeholder="Unit"
                                onBlur={() => setFieldTouched("unit")}
                                secureTextEntry={true}
                            />
                            {touched.unit && errors.unit && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.unit}
                                </Text>
                            )}
                            <TextInput
                                value={this.state.unitprice}
                                style={inputStyle}
                                onChangeText={handleunitpriceChange("unitprice")}
                                onBlur={() => setFieldTouched("unitprice")}
                                placeholder="Unit Price"
                            />
                            {touched.unitprice && errors.unitprice && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.unitprice}
                                </Text>
                            )}
                            <TextInput
                                value={this.state.quantity}
                                style={inputStyle}
                                onChangeText={handlequantityChange("quantity")}
                                onBlur={() => setFieldTouched("quantity")}
                                placeholder="Quantity"
                            />
                            {touched.quantity && errors.quantity && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.quantity}
                                </Text>
                            )}
                            <TextInput
                                value={this.state.result}
                                style={inputStyle}
                                onChangeText={handleChange("subtotal")}
                                placeholder="Sub-total"
                                onBlur={() => setFieldTouched("subtotal")}
                            />
                            {touched.subtotal && errors.subtotal && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.subtotal}
                                </Text>
                            )}
                            <TextInput
                                value={values.tax}
                                style={inputStyle}
                                onChangeText={handleChange("tax")}
                                onBlur={() => setFieldTouched("tax")}
                                placeholder="Tax"
                            />
                            {touched.tax && errors.tax && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.tax}
                                </Text>
                            )}
                            <TextInput
                                value={values.description}
                                style={inputStyle}
                                onChangeText={handleChange("description")}
                                placeholder="Description"
                                onBlur={() => setFieldTouched("description")}
                            />
                            {touched.description && errors.description && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.description}
                                </Text>
                            )}
                            <TextInput
                                value={values.total}
                                style={inputStyle}
                                onChangeText={handleChange("total")}
                                onBlur={() => setFieldTouched("total")}
                                placeholder="Total"
                            />
                            {touched.total && errors.total && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.total}
                                </Text>
                            )}
                            <TextInput
                                value={values.invnumber}
                                style={inputStyle}
                                onChangeText={handleChange("invnumber")}
                                onBlur={() => setFieldTouched("invnumber")}
                                placeholder="Invoice number"
                            />
                            {touched.invnumber && errors.invnumber && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.invnumber}
                                </Text>
                            )}
                            <TextInput
                                value={values.amountpaid}
                                style={inputStyle}
                                onChangeText={handleChange("amountpaid")}
                                placeholder="Amount Paid"
                                onBlur={() => setFieldTouched("amountpaid")}
                            />
                            {touched.amountpaid && errors.amountpaid && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.amountpaid}
                                </Text>
                            )}
                            <TextInput
                                value={values.paymode}
                                style={inputStyle}
                                onChangeText={handleChange("paymode")}
                                onBlur={() => setFieldTouched("paymode")}
                                placeholder="Payment Mode"
                            />
                            {touched.paymode && errors.paymode && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.paymode}
                                </Text>
                            )}
                            <TextInput
                                value={values.receiptnum}
                                style={inputStyle}
                                onChangeText={handleChange("receiptnum")}
                                placeholder="Receipt Number"
                                onBlur={() => setFieldTouched("receiptnum")}
                            />
                            {touched.receiptnum && errors.receiptnum && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.receiptnum}
                                </Text>
                            )}
                            <TextInput
                                value={values.baldue}
                                style={inputStyle}
                                onChangeText={handleChange(" baldue")}
                                onBlur={() => setFieldTouched(" baldue")}
                                placeholder="Balance Due"
                            />
                            {touched.baldue && errors.baldue && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.baldue}
                                </Text>
                            )}
                            <TextInput
                                value={values.balduedate}
                                style={inputStyle}
                                onChangeText={handleChange("balduedate")}
                                onBlur={() => setFieldTouched("balduedate")}
                                placeholder="Balance Due Date"
                            />
                            {touched.balduedate && errors.balduedate && (
                                <Text
                                    style={{ fontSize: 12, color: "#FF0D10" }}
                                >
                                    {errors.balduedate}
                                </Text>
                            )}

                            <Button
                                color="#3740FE"
                                title="Submit"
                                //   disabled={!isValid}
                                onPress={handleSubmit}
                            />
                        </View>
                    )}
                </Formik>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        padding: 30,
    },
});

console.disableYellowBox = true;
