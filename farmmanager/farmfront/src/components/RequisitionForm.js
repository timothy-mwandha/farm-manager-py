import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import moment from "moment";
import t from "tcomb-form-native";

const Form = t.form.Form;

const CostType = t.enums({
  Capital: "Capital",
  Operational: "Operational"
});

const Requisition = t.struct({
  Date: t.Date,
  CostType: CostType,
  Units: t.String,
  Activity: t.String,
  Quantity: t.Number,
  UnitPrice: t.Number,
  SubTotal: t.Number,
  Description: t.maybe(t.String),
  RequestedBy: t.String,
  ApprovedBy: t.maybe(t.String),
  Total: t.Number
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
    this.state = {};
  }
InsertDataToServer = async () => {
    fetch("http://127.0.0.1:8000/api/requisition/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.Date,
        costtype: this.CostType,
        units: this.Units,
        activity: this.Activity,
        qty: this.Quantity,
        unitprice: this.UnitPrice,
        subtotal: this.SubTotal,
        description: this.Description,
        requestby: this.RequestedBy,
        approvby: this.ApprovedBy,
        total: this.Total
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
     (this.Date = value.Date),
      (this.CostType = value.CostType),
      (this.Units = value.Units),
      (this.Activity = value.Activity),
      (this.Quantity = value.Quantity),
      (this.UnitPrice = value.UnitPrice),
      (this.SubTotal = value.SubTotal),
      (this.Description = value.Description),
      (this.RequestedBy = value.RequestedBy),
      (this.ApprovedBy = value.ApprovedBy),
      (this.Total = value.Total),
        this.InsertDataToServer();
      this.clearForm();
      alert("Requisition captured!");
    } else console.log("No data entered");
  };

  // onChangeText = text => {
  //   Quantity = this.refs.form.getComponent("Quantity").refs.input.focus();
  //   UnitPrice = this.refs.form.getComponent("UnitPrice").refs.input.focus();
  //   SubTotal = this.refs.form.getComponent("SubTotal").refs.input.focus();
  //   const yy = this.setState({ Quantity: parseFloat(text) });
  //   const xx = this.setState({ UnitPrice: parseFloat(text) });
  //   const subResult = yy * xx;
  //   SubTotal = this.setState({ SubTotal: parseFloat(subResult) });
  // };

  render() {
    return (
      <SafeAreaView
        style={styles.container}
        behavior="padding"
        enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Requisition Form</Text>
            <Form
              ref={request => (this.formRef = request)}
              type={Requisition}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              options={RequisitionOptions}
              // onChangeText={this.onChangeText}
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
