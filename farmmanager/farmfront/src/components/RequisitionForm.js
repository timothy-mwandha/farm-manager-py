import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import moment from "moment";
import t from "tcomb-form-native";

const Form = t.form.Form;

const Requisition = t.struct({
  Date: t.Date,
  CostType: t.String,
  Units: t.Number,
  Activity: t.String,
  Quantity: t.Number,
  UnitPrice: t.Number,
  SubTotal: t.Number,
  Description: t.String,
  RequestedBy: t.String,
  ApprovedBy: t.maybe(t.String),
  Total: t.Number
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

const RequisitionOptions = {
  fields: {
    Date: {
      mode: "date",
      error: "Please enter harvest date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    CostType: {
      label: "Cost Type",
      returnKeyType: "next",
      error: "Please enter correct quantity value"
    },
    Units: {
      returnKeyType: "next",
      error: "Please enter correct unit value"
    },
    Activity: {
      returnKeyType: "next",
      error: "Name of activity or item is required"
    },
    store: {
      returnKeyType: "next",
      error: "Please provide store name"
    },
    Quantity: {
      returnKeyType: "next",
      error: "Please provide description"
    },
    UnitPrice: {
      label: "Unit Price",
      returnKeyType: "next",
      error: "Please enter unit price"
    },
    SubTotal: {
      label: "Sub-total",
      error: "Expect correct values"
    },
    Description: {
      returnKeyType: "next",
      error: "Please describe requisition"
    },
    RequestedBy: {
      label: "Requested By",
      returnKeyType: "next",
      error: "Requested by who?"
    },
    ApprovedBy: {
      label: "Approved By",
      returnKeyType: "done"
    },
    Total: {
      error: "No total captured"
    }
  },
  stylesheet: formStyles
};

export default class RequisitionForm extends Component {
  constructor() {
    super();
    this.state = { Quantity: "", UnitPrice: "", SubTotal: "" };
  }
  onChange = value => {
    this.setState({ value });
  };

  clearForm = () => {
    // clear content from all textbox
    this.setState({ value: null });
  };

  handleSubmit = event => {
    const value = this.formRef.getValue();
    if (value) {
      console.log(value);
      // clear all fields after submit
      this.clearForm();
      alert("Requisition captured!");
    }
  };

  onChangeText = text => {
    Quantity = this.refs.form.getComponent("Quantity").refs.input.focus();
    UnitPrice = this.refs.form.getComponent("UnitPrice").refs.input.focus();
    SubTotal = this.refs.form.getComponent("SubTotal").refs.input.focus();
    const yy = this.setState({ Quantity: parseFloat(text) });
    const xx = this.setState({ UnitPrice: parseFloat(text) });
    const subResult = yy * xx;
    SubTotal = this.setState({ SubTotal: parseFloat(subResult) });
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        enabled
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ScrollView>
          <View>
            <Text style={styles.title}>Requisition Form</Text>
            <Form
              ref={request => (this.formRef = request)}
              type={Requisition}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              options={RequisitionOptions}
              onChangeText={this.onChangeText}
            />
            <TouchableOpacity>
              <View style={styles.button}>
                <Button
                  color="#0A802B"
                  title="SUBMIT REQUEST"
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
    marginTop: 24,
    padding: 17,
    paddingBottom: 50
  },
  title: {
    fontSize: 35,
    marginTop: 5,
    color: "#650205",
    textAlign: "center",
    marginBottom: 25
  },
  button: {
    marginTop: 20,
    marginBottom: 50
  }
});
