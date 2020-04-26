// Post data without redux
import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import moment from "moment";

var t = require("tcomb-form-native");
const Form = t.form.Form;

const name = t.refinement(t.String, name => {
  const regex = /^[a-zA-Z].*[\s\.]*$/g;
  return regex.test(name);
});

// const myFormatFunction = format => date => formatDate(format, date);
// const myFormat1 = "yyyy-mm-d h:f:s";
// const myFormat2 = "yyyy-mm-d";

var gender = t.enums({
  M: "Male",
  F: "Female"
});

var Status = t.enums({
  Permanent: "Permanent",
  Temporary: "Temporary"
});

const AdvanceForm = t.struct({
  ...Form.AdvanceForm,
  date: t.Date,
  name: name,
  gender: gender,
  position: t.String,
  status: Status,
  advancedamnt: t.Number,
  description: t.maybe(t.String)
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {}
  },
  controlLabel: {
    normal: {
      color: "#006432",
      fontSize: 20
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
  ...Form.options,
  fields: {
    // date: {
    //   label: "Date",
    //   mode: "date",
    //   error: "Please select date",
    //   config: {
    //     defaultValueText: "Select", // Allows you to format the PlaceHolders !!
    //     format: myFormatFunction(myFormat2)
    //   }
    // },
    date: {
      label: "Date",
      mode: "date",
      error: "Please enter a correct date",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("YYYY-DD-MM")
      }
      // config: {
      //   defaultValueText: "Select",
      //   format: strDate => utils.convertDateToString(strDate, "YYYY-MM-DD")
      // }
    },
    name: {
      autoFocus: true,
      label: "Name",
      error: "Please enter a correct Name",
      returnKeyType: "next"
    },
    gender: {
      label: "Gender",
      error: "You must select gender",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
    },
    position: {
      label: "Position",
      error: "Please enter the employee's position",
      returnKeyType: "next"
    },
    status: {
      label: "Status",
      error: "Please enter the status of the employee",
      returnKeyType: "next"
    },
    advancedamnt: {
      label: "Amount",
      error: "Please enter a correct advance Amount",
      returnKeyType: "next"
    },
    description: {
      label: "Description",
      error: "Put a description"
    }
  },
  stylesheet: formStyles
};

export default class Advance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("http://127.0.0.1:8000/api/advance/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.date,
        name: this.name,
        gender: this.gender,
        position: this.position,
        status: this.status,
        advancedamnt: this.advancedamnt,
        description: this.description
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  };

  onChange = value => {
    this.setState({ value });
  };

  clearForm = () => {
    // clear content from all textbox
    this.setState({ value: null });
  };

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log(value);
    if (value != null) {
      (this.date = value.date),
        (this.name = value.name),
        (this.gender = value.gender),
        (this.position = value.position),
        (this.status = value.status),
        (this.advancedamnt = value.advancedamnt),
        (this.description = value.description),
        this.InsertDataToServer();
      // clear all fields after submit
      this.clearForm();
      alert("Advance captured!");
    } else console.log("No data entered");
  };

  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Advance Form</Text>
            <Form
              ref={c => (this._form = c)}
              type={AdvanceForm}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              options={options}
            />
            <TouchableOpacity>
              <View style={styles.button}>
                <Button
                  color="#0A802B"
                  title="SAVE"
                  onPress={this.handleSubmit}
                  // onPress={() => navigation.navigate("Finance")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 15,
    padding: 20
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    color: "#006432",
    textAlign: "center",
    marginBottom: 25
  },
  button: {
    marginTop: 20,
    marginBottom: 50
  }
});

// Post data with redux
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { addAdvance } from "../actions/advanceActions";
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

// const name = t.refinement(t.String, name => {
//   const regex = /^[a-zA-Z].*[\s\.]*$/g;
//   return regex.test(name);
// });

// // const myFormatFunction = format => date => formatDate(format, date);
// // const myFormat1 = "yyyy-mm-d h:f:s";
// // const myFormat2 = "yyyy-mm-d";

// var gender = t.enums({
//   M: "Male",
//   F: "Female"
// });

// var Status = t.enums({
//   Permanent: "Permanent",
//   Temporary: "Temporary"
// });

// const AdvanceForm = t.struct({
//   ...Form.AdvanceForm,
//   date: t.Date,
//   name: name,
//   gender: gender,
//   position: t.maybe(t.String),
//   status: Status,
//   advancedamnt: t.Number,
//   description: t.maybe(t.String)
// });

// const formStyles = {
//   ...Form.stylesheet,
//   formGroup: {
//     normal: {}
//   },
//   controlLabel: {
//     normal: {
//       color: "#650205",
//       fontSize: 20
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
//   ...Form.options,
//   fields: {
//     // date: {
//     //   label: "Date",
//     //   mode: "date",
//     //   error: "Please select date",
//     //   config: {
//     //     defaultValueText: "Select", // Allows you to format the PlaceHolders !!
//     //     format: myFormatFunction(myFormat2)
//     //   }
//     // },
//     date: {
//       label: "Date",
//       mode: "date",
//       error: "Please enter a correct date",
//       returnKeyType: "next",
//       config: {
//         defaultValueText: "Select",
//         format: date => moment(date).format("DD-MM-YYYY")
//       }
//     },
//     name: {
//       autoFocus: true,
//       label: "Name",
//       error: "Please enter a correct Name",
//       returnKeyType: "next"
//     },
//     gender: {
//       label: "Gender",
//       error: "You must select gender",
//       returnKeyType: "next",
//       config: {
//         defaultValueText: "Select"
//       }
//     },
//     position: {
//       label: "Position",
//       error: "Please enter the employee's position",
//       returnKeyType: "next"
//     },
//     status: {
//       label: "Status",
//       error: "Please enter the status of the employee",
//       returnKeyType: "next"
//     },
//     advancedamnt: {
//       label: "Amount",
//       error: "Please enter a correct advance Amount",
//       returnKeyType: "next"
//     },
//     description: {
//       label: "Description",
//       error: "Put a description"
//     }
//   },
//   stylesheet: formStyles
// };

// class Advance extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: "",
//       name: "",
//       gender: "",
//       position: "",
//       status: "",
//       advancedamnt: "",
//       description: ""
//     };

//     this.onChange = this.onChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     // this.onSubmit = this.onSubmit.bind(this);
//   }

//   // onChange(e) {
//   //   this.setState({ [e.target.name]: e.target.value });
//   // }

//   onChange = value => {
//     this.setState({ value });
//   };

//   handleSubmit(e) {
//     e.preventDefault();

//     const advance = {
//       date: this.state.date,
//       name: this.state.name,
//       gender: this.state.gender,
//       position: this.state.position,
//       status: this.state.status,
//       advancedamnt: this.state.advancedamnt,
//       description: this.state.description
//     };

//     this.props.addAdvance(advance);
//   }

//   render() {
//     return (
//       <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
//         <ScrollView>
//           <View>
//             <Text style={styles.title}>Advance Form</Text>
//             <Form
//               ref={c => (this._form = c)}
//               type={AdvanceForm}
//               value={this.state.value}
//               onchange={this.onchange}
//               // onChange={this.onChange.bind(this)}
//               options={options}
//             />
//             <TouchableOpacity>
//               <View style={styles.button}>
//                 <Button
//                   color="#0A802B"
//                   title="SAVE"
//                   onPress={this.handleSubmit}
//                   // onPress={() => navigation.navigate("Finance")}
//                 />
//               </View>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     );
//   }
// }
// Advance.propTypes = {
//   addAdvance: PropTypes.func.isRequired
// };

// export default connect(null, { addAdvance })(Advance);

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     marginTop: 15,
//     padding: 20
//   },
//   title: {
//     fontSize: 35,
//     marginTop: 5,
//     color: "#650205",
//     textAlign: "center",
//     marginBottom: 25
//   },
//   button: {
//     marginBottom: 15
//   }
// });
