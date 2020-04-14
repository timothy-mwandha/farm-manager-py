// import React, { Component, PropTypes, } from "react";
// import {
//   ScrollView,
//   View,
//   StyleSheet,
//   Text,
//   Button,
//   Linking,
//   KeyboardAvoidingView,
//   TouchableOpacity
// } from "react-native";
// import moment from "moment";

// var t = require("tcomb-form-native");
// const Form = t.form.Form;
// const Email = t.refinement(t.String, Email => {
//   const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
//   return reg.test(Email);
// });
// // const Phone = t.refinement(t.Number, Phone => {
// //     const reg = /^[1-9]\d{2}-\d{3}-\d{4}/;
// //     return reg.test(Phone);
// //});
// const Name = t.refinement(t.String, Name => {
//   const regex = /^[a-zA-Z].*[\s\.]*$/g;
//   return regex.test(Name);
// });

// const PaymentMode = t.enums({
//   Cash: "Cash",
//   Credit: "Credit"
// });

// const User = t.struct({
//   Date: t.Date,
//   Customer: t.String,
//   Phone: t.Number,
//   Product: t.String,
//   Unit: t.String,
//   UnitPrice: t.Number,
//   Quantity: t.Number,
//   SubTotal: t.Number,
//   Tax: t.maybe(t.Number),
//   Description: t.maybe(t.String),
//   Total: t.Number,
//   InvoiceNumber: t.Number,
//   AmountPaid: t.Number,
//   PaymentMode: PaymentMode,
//   ReceiptNumber: t.Number,
//   BalanceDueDate: t.Date
// });

// const formStyles = {
//   ...Form.stylesheet,
//   formGroup: {
//     normal: {
//       marginBottom: 5
//     }
//   },
//   controlLabel: {
//     normal: {
//       color: "#650205",
//       fontSize: 20,
//       marginBottom: 5
//     },

//     error: {
//       color: "red",
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: "600"
//     }
//   }
// };

// const options = {
//   fields: {
//     Date: {
//       label: "Date",
//       mode: "date",
//       error: "Please enter a correct date",
//       config: {
//         defaultValueText: "Select",
//         format: date => moment(date).format("DD-MM-YYYY")
//       }
//     },
//     Name: {
//       error: "Please enter a correct Name"
//     },
//     Email: {
//       error: "Please enter a correct email address"
//     },
//     Phone: {
//       error: "Please enter a correct phone number"
//     },
//     Password: {
//       error: "Please create a password",
//       Password: true,
//       secureTextEntry: true
//     },
//     UnitPrice: {
//       label: "Unit Price"
//     },
//     SubTotal: {
//       label: "Sub Total"
//     },
//     InvoiceNumber: {
//       label: "Invoice Number"
//     },
//     AmountPaid: {
//       label: "Amount Paid"
//     },
//     PaymentMode: {
//       label: "Payment Mode"
//     },
//     ReceiptNumber: {
//       label: "Reciept Number"
//     },
//     BalanceDueDate: {
//       label: "Date",
//       mode: "date",
//       error: "Please enter a correct date",
//       config: {
//         defaultValueText: "Select",
//         format: date => moment(date).format("DD-MM-YYYY")
//       }
//     }
//   },
//   stylesheet: formStyles
// };

// export default class ExpenditureForm extends Component {
//   componentDidMount() {
//     // give focus to the name textbox
//     this.refs.form.getComponent("Client").refs.input.focus();
//   }
//   handleSubmit = () => {
//     const value = this.refs.form.getValue();
//     console.log("value: ", value);
//     console.log(value.Quantity);
//   };

//   handlenum1Change = evt => {
//     const num1 = this._form.getValue().Quantity;
//     num1 = Number(evt.target.value);
//     this.setState(prevState => ({
//       num1,
//       result: num1 + prevState.num2
//     }));
//   };

//   handlenum2Change = evt => {
//     const num2 = this._form.getValue().UnitPrice;
//     num2 = Number(evt.target.value);
//     this.setState(prevState => ({
//       num2,
//       result: prevState.num1 + num2
//     }));
//   };

//   render() {
//     return (
//       <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
//         <ScrollView>
        
//           <View>
//             <Text style={styles.title}>Income</Text>
//             <Form ref="form" type={User} options={options} />
//             <View style={styles.butt}>
//               <Button
//                 color="#0A802B"
//                 title="SAVE"
//                 onPress={this.handleSubmit}
//               />
//             </View>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     marginTop: 24,
//     padding: 20
//   },
//   title: {
//     fontSize: 35,
//     marginTop: 5,
//     color: "#650205",
//     textAlign: "center",
//     marginBottom: 25
//   },
//   question: {
//     color: "#650205",
//     textAlign: "center",
//     marginTop: 18,
//     fontSize: 18
//   },
//   link: {
//     fontWeight: "bold",
//     color: "#650205",
//     textAlign: "center",
//     marginTop: 8,
//     fontSize: 20,
//     fontWeight: "bold"
//   },
//   butt: {
//     marginTop: 20,
//     marginBottom: 50
//   }
// });




import * as yup from 'yup'
import { Formik } from 'formik'

import React, { Component } from 'react';
import { View, TextInput, Text, Button, Alert, StyleSheet } from 'react-native';


export default class App extends Component {
          

  render() {
    return (
      <Formik
        initialValues={{ customer: '', email: '', password: '' }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}

        // validationSchema={yup.object().shape({
        //   customer: yup
        //     .string()
        //     .email()
        //     .required(),
        //   password: yup
        //     .string()
        //     .min(6)
        //     .required(),
        // })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.container}>
            <TextInput
              value={values.customer}
              onChangeText={handleChange('customer')}
              onBlur={() => setFieldTouched('customer')}
              placeholder="Customer"
            />
            {touched.customer && errors.customer &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.customer}</Text>
            }
            <TextInput
              value={values.phone}
              onChangeText={handleChange('phone')}
              placeholder="Phone"
              onBlur={() => setFieldTouched('phone')}
              // secureTextEntry={true}
            />
            {touched.phone && errors.phone &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.phone}</Text>
            }
            <TextInput
              value={values.product}
              onChangeText={handleChange('product')}
              onBlur={() => setFieldTouched('product')}
              placeholder="Product"
            />
            {touched.product && errors.product &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.product}</Text>
            }
            <TextInput
              value={values.unit}
              onChangeText={handleChange('unit')}
              placeholder="Unit"
              onBlur={() => setFieldTouched('unit')}
              secureTextEntry={true}
            />
            {touched.unit && errors.unit &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.unit}</Text>
            }
            <TextInput
              value={values.unitprice}
              onChangeText={handleChange('unitprice')}
              onBlur={() => setFieldTouched('unitprice')}
              placeholder="Unit Price"
            />
            {touched.unitprice && errors.unitprice &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.unitprice}</Text>
            }
            <TextInput
              value={values.quantity}
              onChangeText={handleChange('quantity')}
              placeholder="Quantity"
              onBlur={() => setFieldTouched('quantity')}
              // secureTextEntry={true}
            />
            {touched.quantity && errors.quantity &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.quantity}</Text>
            }
            <TextInput
              value={values.subtotal}
              onChangeText={handleChange('subtotal')}
              onBlur={() => setFieldTouched('subtotal')}
              placeholder="Sub-Total"
            />
            {touched.subtotal && errors.subtotal &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.subtotal}</Text>
            }
            <TextInput
              value={values.tax}
              onChangeText={handleChange('tax')}
              placeholder="Tax"
              onBlur={() => setFieldTouched('tax')}
              secureTextEntry={true}
            />
            {touched.tax && errors.tax &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.tax}</Text>
            }
            <TextInput
              value={values.description}
              onChangeText={handleChange('description')}
              onBlur={() => setFieldTouched('description')}
              placeholder="Description"
            />
            {touched.description && errors.description &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.description}</Text>
            }
            <TextInput
              value={values.invno}
              onChangeText={handleChange('invno')}
              placeholder="Invoice Number"
              onBlur={() => setFieldTouched('invno')}
              // secureTextEntry={true}
            />
            {touched.invno && errors.invno &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.invno}</Text>
            }
            <TextInput
              value={values.amtpaid}
              onChangeText={handleChange('amtpaid')}
              onBlur={() => setFieldTouched('amtpaid')}
              placeholder="Amount Paid"
            />
            {touched.amtpaid && errors.amtpaid &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.amtpaid}</Text>
            }
            <TextInput
              value={values.paymode}
              onChangeText={handleChange('paymode')}
              placeholder="Payment Mode"
              onBlur={() => setFieldTouched('paymode')}
              // secureTextEntry={true}
            />
            {touched.paymode && errors.paymode &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.paymode}</Text>
            }
            <TextInput
              value={values.rctno}
              onChangeText={handleChange('rctno')}
              placeholder="Receipt Number"
              onBlur={() => setFieldTouched('rctno')}
              // secureTextEntry={true}
            />
            {touched.rctno && errors.rctno &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.rctno}</Text>
            }
            <Button
              title='Save'
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 40
    },

})