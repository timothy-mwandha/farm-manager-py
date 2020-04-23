import React, { Component, PropTypes } from "react";
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

const Phone = t.refinement(t.Number, Phone => {
  const reg = /^[0]?[0-9]\d{8}$/;
  return reg.test(Phone);
});
const Customer = t.refinement(t.String, Customer => {
  const regex = /^[a-zA-Z].*[\s\.]*$/g;
  return regex.test(Customer);
});

const PaymentMode = t.enums({
  Cash: "Cash",
  Credit: "Credit"
});

const Income = t.struct({
  Date: t.Date,
  Customer: Customer,
  Phone: Phone,
  Product: t.String,
  Unit: t.String,
  UnitPrice: t.Number,
  Quantity: t.Number,
  SubTotal: t.Number,
  Tax: t.maybe(t.Number),
  Description: t.maybe(t.String),
  Total: t.Number,
  InvoiceNumber: t.maybe(t.Number),
  AmountPaid: t.Number,
  PaymentMode: PaymentMode,
  ReceiptNumber: t.maybe(t.Number),
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
      autoFocus: true,
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
      label: "Reciept Number"
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

export default class IncomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("http://127.0.0.1:8000/api/income/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.Date,
        customer: this.Customer,
        phone: this.Phone,
        product: this.Product,
        unit: this.Unit,
        unitprice: this.UnitPrice,
        quantity: this.Quantity,
        subtotal: this.SubTotal,
        tax: this.Tax,
        descript: this.Description,
        total: this.Total,
        invnumber: this.InvoiceNumber,
        amountpaid: this.AmountPaid,
        paymode: this.PaymentMode,
        receiptnum: this.ReceiptNumber,
        baldue: this.BalanceDue,
        balduedate: this.BalanceDueDate
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
        (this.Customer = value.Customer),
        (this.Phone = value.Phone),
        (this.Product = value.Product),
        (this.Unit = value.Unit),
        (this.UnitPrice = value.UnitPrice),
        (this.Quantity = value.Quantity),
        (this.SubTotal = value.SubTotal),
        (this.Tax = value.Tax),
        (this.Description = value.Description),
        (this.Total = value.Total),
        (this.InvoiceNumber = value.InvoiceNumber),
        (this.AmountPaid = value.AmountPaid),
        (this.PaymentMode = value.PaymentMode),
        (this.ReceiptNumber = value.ReceiptNumber),
        (this.BalanceDue = value.BalanceDue),
        (this.BalanceDueDate = value.BalanceDueDate),
        // (this.Date = value.date),
        //   (this.Customer = value.customer),
        //   (this.Phone = value.phone),
        //   (this.Product = value.product),
        //   (this.Unit = value.unit),
        //   (this.UnitPrice = value.unitprice),
        //   (this.Quantity = value.quantity),
        //   (this.SubTotal = value.subtotal),
        //   (this.Tax = value.tax),
        //   (this.Description = value.descript),
        //   (this.Total = value.total),
        //   (this.InvoiceNumber = value.invnumber),
        //   (this.AmountPaid = value.amountpaid),
        //   (this.PaymentMode = value.paymode),
        //   (this.ReceiptNumber = value.receiptnum),
        //   (this.BalanceDue = value.baldue),
        //   (this.BalanceDueDate = value.balduedate);
        this.InsertDataToServer();
      // clear all fields after submit
      this.clearForm();
      alert("Income captured!");
    } else console.log("No data entered");
  };

  // handlenum1Change = evt => {
  //   const num1 = this._form.getValue().Quantity;
  //   num1 = Number(evt.target.value);
  //   this.setState(prevState => ({
  //     num1,
  //     result: num1 + prevState.num2
  //   }));
  // };

  // handlenum2Change = evt => {
  //   const num2 = this._form.getValue().UnitPrice;
  //   num2 = Number(evt.target.value);
  //   this.setState(prevState => ({
  //     num2,
  //     result: prevState.num1 + num2
  //   }));
  // };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Income</Text>
            <Form
              ref={c => (this._form = c)}
              type={Income}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              options={options}
            />
            <View style={styles.butt}>
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
  butt: {
    marginTop: 20,
    marginBottom: 50
  }
});
