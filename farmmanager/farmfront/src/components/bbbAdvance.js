
// import React, { Component } from "react";
// import {
//   Container,
//   Header,
//   Content,
//   Item,
//   Input,
//   Icon,
//   Button,
//   Text,
//   Body
// } from "native-base";
// import { StyleSheet, View } from "react-native";

// export default class Addition extends Component {
//   state = { input1: null, input2: null, result: null };

//   render() {
//     return (
//       <Container>
//         <Header>
//           <Body>
//             <Text> Addition v0.1</Text>
//           </Body>
//         </Header>
//         <Content>
//           <View style={styles.container}>
//             <Item>
//               <Input
//                 placeholder="Enter 1st Number"
//                 onChangeText={text => this.setState({ input1: parseInt(text) })}
//               />
//             </Item>
//             <Item>
//               <Input
//                 placeholder="Enter 2nd Number"
//                 onChangeText={text => this.setState({ input2: parseInt(text) })}
//               />
//             </Item>
//             <View style={styles.buttonContainer}>
//               <Button
//                 iconLeft
//                 success
//                 onPress={() => {
//                   this.setState({
//                     result:
//                       this.state.input1 && this.state.input2
//                         ? this.state.input1 + this.state.input2
//                         : null
//                   });
//                 }}
//               >
//                 <Icon name="add" />
//                 <Text>Add</Text>
//               </Button>
//             </View>
//             <View style={styles.textContainer}>
//               <Text>
//                 {this.state.result ? "Result= " + this.state.result : null}
//               </Text>
//             </View>
//           </View>
//         </Content>
//       </Container>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 30
//   },
//   buttonContainer: {
//     padding: 30
//   },
//   textContainer: {
//     flexDirection: "row",
//     padding: 30
//   }
// });
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
import React, { Component } from "react";

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from "react-native";

export default class Advance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f1: null,
      f2: null,
      result: null
    };
  }

  render() {
    var f1 = this.state;
    var f2 = this.state;
    const result = f1 && f2 ? f1 + f2 : null;
    return (
      <View>
        {/* var result = f1 && f2 ? f1 + f2 : null; */}
        <Text>lslslsls</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={text => this.setState({ f1: parseInt(text) })}
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={text => this.setState({ f2: parseInt(text) })}
        />
        {result ? <Text>{}</Text> : null}
      </View>
    );
  }
}

AppRegistry.registerComponent("Advance", () => Advance);

// mmmmmmmmmmmmmmmmmmmmmmmmmmm

// // Formik x React Native example
// import React from 'react';
// import { Button, TextInput, View } from 'react-native';
// import { Formik } from 'formik';

// export const Advance = props => (
//   <Formik
//     initialValues={{ email: '' }}
//     onSubmit={values => console.log(values)}
//   >
//     {({ handleChange, handleBlur, handleSubmit, values }) => (
//       <View>
//         <TextInput
//           onChangeText={handleChange('email')}
//           onBlur={handleBlur('email')}
//           value={values.email}
//         />
//         <Button onPress={handleSubmit} title="Submit" />
//       </View>
//     )}
//   </Formik>
// );

// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

// import React, { Component } from "react";
// import { Form, TextInput, View, SafeAreaView, StyleSheet } from "react-native";

// export default class Advance extends Component {
//   state = {
//     result: 4,
//     num1: 2,
//     num2: 2
//   };

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
//       <SafeAreaView style={styles.container} behavior="padding" enabled>
//         <View>
//           <Form>
//             <label>
//               <TextInput
//                 type="number"
//                 name="num1"
//                 value={this.state.num1}
//                 onChange={this.handlenum1Change}
//               />
//               <TextInput
//                 type="number"
//                 name="num2"
//                 value={this.state.num2}
//                 onChange={this.handlenum2Change}
//               />
//               <TextInput type="text" value={this.state.result} readOnly />
//             </label>
//           </Form>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     marginTop: 15,
//     padding: 20
//   }
// });
