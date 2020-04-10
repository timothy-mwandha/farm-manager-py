import React, { Component, PropTypes } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  Linking,
  KeyboardAvoidingView
} from "react-native";
import moment from "moment";

var t = require("tcomb-form-native");
const Form = t.form.Form;

const Phone = t.refinement(t.Number, Phone => {
  const reg = /^[0]?[0-9]\d{8}$/;
  return reg.test(Phone);
});
const Supplier = t.refinement(t.String, Supplier => {
  const regex = /^[a-zA-Z].*[\s\.]*$/g;
  return regex.test(Supplier);
});

const TypeOfExpense = t.enums({
  Capital: "Capital",
  Operational: "Operational"
});

const PaymentMode = t.enums({
  Cash: "Cash",
  Credit: "Credit"
});

const Expenditure = t.struct({
  Date: t.Date,
  Supplier: Supplier,
  Phone: Phone,
  Product: t.String,
  TypeOfExpense: TypeOfExpense,
  Unit: t.String,
  UnitPrice: t.Number,
  Quantity: t.Number,
  SubTotal: t.Number,
  Tax: t.maybe(t.Number),
  Description: t.maybe(t.String),
  Total: t.Number,
  InvoiceNumber: t.Number,
  AmountPaid: t.Number,
  PaymentMode: PaymentMode,
  ReceiptNumber: t.Number,
  BalanceDue: t.maybe(t.Number),
  BalanceDueDate: t.maybe(t.Date)
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
    Date: {
      label: "Date",
      mode: "date",
      error: "Please enter a correct date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    Name: {
      error: "Please enter a correct Name"
    },
    Email: {
      error: "Please enter a correct email address"
    },
    Phone: {
      error: "Please enter a correct phone number"
    },
    Password: {
      error: "Please create a password",
      Password: true,
      secureTextEntry: true
    },
    TypeOfExpense: {
      label: "Type of Expense"
    },
    UnitPrice: {
      label: "Unit Price"
    },
    SubTotal: {
      label: "Sub Total"
    },
    InvoiceNumber: {
      label: "Invoice Number"
    },
    AmountPaid: {
      label: "Amount Paid"
    },
    PaymentMode: {
      label: "Payment Mode"
    },
    ReceiptNumber: {
      label: "Receipt Number"
    },
    BalanceDue: {
      label: "Balance Due"
    },
    BalanceDueDate: {
      label: "Due Date",
      mode: "date",
      error: "Please enter a correct date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    }
  },
  stylesheet: formStyles
};

export default class ExpenditureForm extends Component {
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
      alert("Expenditure captured!");
      console.log(value.Quantity);
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Expenditure</Text>
            <Form
              ref={c => (this._form = c)}
              type={Expenditure}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              options={options}
            />
            <View style={styles.button}>
              <Button
                color="#0A802B"
                title="SAVE"
                onPress={this.handleSubmit}
              />
            </View>
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
    padding: 20
  },
  title: {
    fontSize: 35,
    marginTop: 5,
    color: "#650205",
    textAlign: "center",
    marginBottom: 25
  },
  question: {
    color: "#650205",
    textAlign: "center",
    marginTop: 18,
    fontSize: 18
  },
  link: {
    fontWeight: "bold",
    color: "#650205",
    textAlign: "center",
    marginTop: 8,
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    marginTop: 20,
    marginBottom: 50
  }
});
