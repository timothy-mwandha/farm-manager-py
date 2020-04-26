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

// var _ = require("lodash");

// const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

// stylesheet.textbox.normal.borderWidth = 0;
// stylesheet.textbox.error.borderWidth = 0;
// stylesheet.textbox.normal.marginBottom = 0;
// stylesheet.textbox.error.marginBottom = 0;

// stylesheet.textboxView.normal.borderWidth = 0;
// stylesheet.textboxView.error.borderWidth = 0;
// stylesheet.textboxView.normal.borderRadius = 0;
// stylesheet.textboxView.error.borderRadius = 0;
// stylesheet.textboxView.normal.borderBottomWidth = 1;
// stylesheet.textboxView.error.borderBottomWidth = 1;
// stylesheet.textboxView.normal.marginBottom = 5;
// stylesheet.textboxView.error.marginBottom = 5;
// stylesheet.controlLabel.normal.color = "#650205";

// const MobileMoneyNumber = t.refinement(t.Number, MobileMoneyNumber => {
//   const reg = /^[0]?[0-9]\d{8}$/;
//   return reg.test(MobileMoneyNumber);
// });
const Name = t.refinement(t.String, Name => {
  const regex = /^[a-zA-Z].*[\s\.]*$/g;
  return regex.test(Name);
});

var PaymentMode = t.enums({
  Cash: "Cash",
  Bank: "Bank",
  MobileMoney: "Mobile Money"
});

var Gender = t.enums({
  M: "Male",
  F: "Female"
});

var Status = t.enums({
  Permanent: "Permanent",
  Temporary: "Temporary"
});

var Tax = t.enums({
  VAT: "Value Added Tax",
  WHT: "Withholding Tax"
});

const Payroll = t.struct({
  ...Form.PayRoll,
  Date: t.Date,
  Name: Name,
  Gender: Gender,
  Position: t.String,
  Status: Status,
  PaymentMode: PaymentMode,
  SalaryAmount: t.Number,
  PAYE: t.maybe(t.Number),
  NSSF1: t.maybe(t.Number),
  NSSF2: t.maybe(t.Number),
  Tax: t.maybe(Tax),
  LST: t.maybe(t.Number),
  Advance: t.maybe(t.Number),
  NetPay: t.Number,
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

const options = {
  ...Form.options,
  fields: {
    Date: {
      label: "Date",
      mode: "date",
      error: "Please enter a correct date",
      // stylesheet: stylesheet,
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
      // stylesheet: stylesheet,
      returnKeyType: "next"
    },
    Gender: {
      label: "Gender",
      error: "You must select gender",
      // isCollapsed: true,
      // stylesheet: stylesheet,
      returnKeyType: "next",
      config: {
        defaultValueText: "Select"
      }
    },
    Position: {
      label: "Position",
      error: "Please enter the employee's position",
      // stylesheet: stylesheet,
      returnKeyType: "next"
    },
    Status: {
      label: "Status",
      error: "Please enter the status of the employee",
      // stylesheet: stylesheet,
      returnKeyType: "next"
    },
    PaymentMode: {
      label: "Payment Mode",
      error: "Please select a mode of payment",
      // stylesheet: stylesheet,
      returnKeyType: "next"
    },
    SalaryAmount: {
      label: "Salary Amount",
      error: "Please enter a correct Salary Amount",
      // stylesheet: stylesheet,
      returnKeyType: "next"
    },
    PAYE: {
      label: "PAYE",
      error: "PAYE is missing",
      // stylesheet: stylesheet,
      returnKeyType: "next"
    },
    NSSF1: {
      label: "NSSF(5%)",
      error: "NSSF is missing",
      // stylesheet: stylesheet,
      returnKeyType: "next"
    },
    NSSF2: {
      label: "NSSF(10%)",
      error: "NSSF is missing",
      // stylesheet: stylesheet,
      returnKeyType: "next"
    },
    Tax: {
      label: "Tax",
      error: "Tax is missing",
      // stylesheet: stylesheet,
      returnKeyType: "next"
    },
    LST: {
      label: "Local Service Tax",
      error: "LST is missing",
      // stylesheet: stylesheet,
      returnKeyType: "next"
    },
    Advance: {
      label: "Salary Advance",
      error: "Advance missing",
      // stylesheet: stylesheet,
      returnKeyType: "next"
    },
    NetPay: {
      label: "Net Pay",
      error: "Net pay is missing",
      // stylesheet: stylesheet,
      returnKeyType: "next"
    },
    Total: {
      label: "Total",
      error: "Total is missing"
      // stylesheet: stylesheet
    }
  },
  stylesheet: formStyles
};

export default class PayRoll extends Component {
  constructor() {
    super();
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("http://127.0.0.1:8000/api/payroll/",{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.Date,
        name: this.Name,
        gender: this.Gender,
        position: this.Position,
        status: this.Status,
        paymod: this.PaymentMode,
        salaryamnt: this.SalaryAmount,
        paye: this.PAYE,
        nssf1: this.NSSF1,
        nssf2: this.NSSF2,
        tax: this.Tax,
        lst: this.LST,
        advance: this.Advance,
        netpay: this.NetPay,
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
        (this.Name = value.Name),
        (this.Gender = value.Gender),
        (this.Position = value.Position),
        (this.Status = value.Status),
        (this.PaymentMode = value.PaymentMode),
        (this.SalaryAmount = value.SalaryAmount),
        (this.PAYE = value.PAYE),
        (this.NSSF1 = value.NSSF1),
        (this.NSSF2 = value.NSSF2),
        (this.Tax = value.Tax),
        (this.LST = value.LST),
        (this.Advance = value.Advance),
        (this.NetPay = value.NetPay),
        (this.Total = value.Total),
        this.InsertDataToServer();
      this.clearForm();
      alert("Payroll captured!");
    } else console.log("No data entered");
  };

  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Payroll Form</Text>
            <Form
              ref={c => (this._form = c)}
              type={Payroll}
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
