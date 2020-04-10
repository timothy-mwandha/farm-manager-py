import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addUser } from "../actions/userActions";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  KeyboardAvoidingView
} from "react-native";

var t = require("tcomb-form-native");
const Form = t.form.Form;
const name = t.refinement(t.String, name => {
  const regex = /^[a-zA-Z].*[\s\.]*$/g;
  return regex.test(name);
});
const email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
  return reg.test(email);
});
const phone = t.refinement(t.Number, phone => {
  const reg = /^[0]?[0-9]\d{9}$/;
  return reg.test(Phone);
});

const User = t.struct({
  name: name,
  email: email,
  phone: phone,
  password: t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 5
    }
  },
  controlLabel: {
    normal: {
      color: "#650205",
      fontSize: 20,
      marginBottom: 5
    },

    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    }
  }
};

const options = {
  fields: {
    name: {
      autoFocus: true,
      label: "Name",
      returnKeyType: "next",
      error: "Please enter a correct Name"
    },
    email: {
      label: "Email",
      returnKeyType: "next",
      error: "Please enter a correct email address"
    },
    phone: {
      label: "Phone",
      returnKeyType: "next",
      error: "Please enter a correct phone number"
    },
    password: {
      label: "Password",
      error: "Please create a password",
      Password: true,
      secureTextEntry: true
    }
  },
  stylesheet: formStyles
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  // onChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  onChange = value => {
    this.setState({ value });
  };

  handleSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password
    };

    this.props.addUser(user);
  }

  // InsertDataToServer = async () => {
  //   fetch("http://0b533b24.ngrok.io/api/user", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       name: this.Name,
  //       email: this.Email,
  //       phone: this.Phone,
  //       password: this.Password
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       // alert("Thank You for Signing Up!");
  //       Alert.alert(responseJson);
  //       this.props.navigation.navigate("Login");
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  // handleSubmit = () => {
  //   const value = this._form.getValue();
  //   console.log(value);
  //   if (value != null) {
  //     (this.name = value.name),
  //       (this.email = value.email),
  //       (this.phone = value.phone),
  //       (this.password = value.password),
  //       this.InsertDataToServer();
  //   }
  // };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Sign Up</Text>
            <Form
              ref={c => (this._form = c)}
              type={User}
              options={options}
              onChange={this.onChange}
            />
            <View style={styles.button}>
              <Button
                color="#0A802B"
                title="Sign Up"
                onPress={this.handleSubmit}
              />
            </View>
            <Text style={styles.question}>Have an account?</Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("http://google.com")}
            >
              Log In
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
SignUp.propTypes = {
  addUser: PropTypes.func.isRequired
};

export default connect(null, { addUser })(SignUp);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20
  },
  title: {
    fontSize: 35,
    marginTop: 30,
    color: "#650205",
    textAlign: "center",
    marginBottom: 25
  },
  question: {
    color: "gray",
    textAlign: "center",
    marginTop: 18,
    fontSize: 18
  },
  link: {
    // fontWeight: "bold",
    color: "#650205",
    textAlign: "center",
    marginTop: 8,
    fontSize: 20
  },
  button: {
    marginTop: 20
  }
});

// export default SignUp;
// import React, { Component } from "react";
// import {
//   ScrollView,
//   View,
//   StyleSheet,
//   Text,
//   Button,
//   Linking,
//   KeyboardAvoidingView
// } from "react-native";

// var t = require("tcomb-form-native");
// const Form = t.form.Form;
// const Email = t.refinement(t.String, Email => {
//   const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
//   return reg.test(Email);
// });
// const Phone = t.refinement(t.Number, Phone => {
//   const reg = /^[0]?[0-9]\d{9}$/;
//   return reg.test(Phone);
// });
// const Name = t.refinement(t.String, Name => {
//   const regex = /^[a-zA-Z].*[\s\.]*$/g;
//   return regex.test(Name);
// });

// const User = t.struct({
//   Name: Name,
//   Email: Email,
//   Phone: Phone,
//   Password: t.String
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
//     Name: {
//       autoFocus: true,
//       label: "Name",
//       returnKeyType: "next",
//       error: "Please enter a correct Name"
//     },
//     Email: {
//       label: "Email",
//       returnKeyType: "next",
//       error: "Please enter a correct email address"
//     },
//     Phone: {
//       label: "Phone",
//       returnKeyType: "next",
//       error: "Please enter a correct phone number"
//     },
//     Password: {
//       label: "Password",
//       error: "Please create a password",
//       Password: true,
//       secureTextEntry: true
//     }
//   },
//   stylesheet: formStyles
// };

// export default class SignUp extends Component {
//   constructor(props) {
//     super(props);
//     this.Name, this.Email, this.Phone, this.Password;
//   }

//   InsertDataToServer = async () => {
//     fetch("http://0b533b24.ngrok.io/api/user", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         name: this.Name,
//         email: this.Email,
//         phone: this.Phone,
//         password: this.Password
//       })
//     })
//       .then(response => response.json())
//       .then(responseJson => {
//         // alert("Thank You for Signing Up!");
//         Alert.alert(responseJson);
//         this.props.navigation.navigate("Login");
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   handleSubmit = () => {
//     const value = this._form.getValue();
//     console.log(value);
//     if (value != null) {
//       (this.Name = value.Name),
//         (this.Email = value.Email),
//         (this.Phone = value.Phone),
//         (this.Password = value.Password),
//         this.InsertDataToServer();
//     }
//   };

//   render() {
//     return (
//       <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
//         <ScrollView>
//           <View>
//             <Text style={styles.title}>Sign Up</Text>
//             <Form ref={c => (this._form = c)} type={User} options={options} />
//             <View style={styles.button}>
//               <Button
//                 color="#0A802B"
//                 title="Sign Up"
//                 onPress={this.handleSubmit}
//               />
//             </View>
//             <Text style={styles.question}>Have an account?</Text>
//             <Text
//               style={styles.link}
//               onPress={() => Linking.openURL("http://google.com")}
//             >
//               Log In
//             </Text>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     padding: 20
//   },
//   title: {
//     fontSize: 35,
//     marginTop: 30,
//     color: "#650205",
//     textAlign: "center",
//     marginBottom: 25
//   },
//   question: {
//     color: "gray",
//     textAlign: "center",
//     marginTop: 18,
//     fontSize: 18
//   },
//   link: {
//     // fontWeight: "bold",
//     color: "#650205",
//     textAlign: "center",
//     marginTop: 8,
//     fontSize: 20
//   },
//   button: {
//     marginTop: 20
//   }
// });

// export default SignUp;
