import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import moment from "moment";

var t = require("tcomb-form-native");
const Form = t.form.Form;

const Name = t.refinement(t.String, Name => {
  const regex = /^[a-zA-Z].*[\s\.]*$/g;
  return regex.test(Name);
});

var Gender = t.enums({
  M: "Male",
  F: "Female"
});

var Status = t.enums({
  Permanent: "Permanent",
  Temporary: "Temporary"
});

const AdvanceForm = t.struct({
  ...Form.AdvanceForm,
  Date: t.Date,
  Name: Name,
  Gender: Gender,
  Position: t.maybe(t.String),
  Status: Status,
  AdvancedAmount: t.Number,
  Decription: t.maybe(t.String)
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {}
  },
  controlLabel: {
    normal: {
      color: "#650205",
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
    Date: {
      label: "Date",
      mode: "date",
      error: "Please enter a correct date",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    Name: {
      autoFocus: true,
      label: "Name",
      error: "Please enter a correct Name",
      returnKeyType: "next"
    },
    Gender: {
      label: "Gender",
      error: "You must select gender",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
    },
    Position: {
      label: "Position",
      error: "Please enter the employee's position",
      returnKeyType: "next"
    },
    Status: {
      label: "Status",
      error: "Please enter the status of the employee",
      returnKeyType: "next"
    },
    AdvancedAmount: {
      label: "Amount",
      error: "Please enter a correct advance Amount",
      returnKeyType: "next"
    },
    Description: {
      label: "Description",
      error: "Put a description"
    }
  },
  stylesheet: formStyles
};

export default class Advance extends Component {
  constructor() {
    super();

    this.state = {};
  }

  onChange = value => {
    this.setState({ value });
  };

  clearForm = () => {
    // clear content from all textbox
    this.setState({ value: null });
  };

  handleSubmit = event => {
    const value = this._form.getValue();
    if (value) {
      console.log(value);
      // clear all fields after submit
      this.clearForm();
      alert("Advance captured!");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
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
                />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    fontSize: 35,
    marginTop: 5,
    color: "#650205",
    textAlign: "center",
    marginBottom: 25
  },
  button: {
    marginBottom: 15
  }
});
