import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Button,
  Linking,
  Text,
  SafeAreaView
} from "react-native";

var t = require("tcomb-form-native");
const Form = t.form.Form;

const Consumable = t.struct({
  Date: t.Date,
  Name: t.String,
  QuantityTaken: t.Number,
  QuantityUsed: t.Number,
  QuantityBalance: t.Number,
  Description: t.maybe(t.String),
  Notification: t.String,
  TakenBy: t.String
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
    date: {
      label: "Date",
      mode: "date",
      error: "Please enter a correct date",
      returnKeyType: "next",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("YYYY-DD-MM")
      }
    },
    Name: {
      error: "Please enter a correct Name"
    },
    QuantityTaken: {
      label: "Quantity Taken",
      error: "Please enter correct quantity taken"
    },
    QuantityUsed: {
      label: "Quantity Used",
      error: "Please enter correct quantity value"
    },
    QuantityBalance: {
      label: "Quantity Balance",
      error: "Please enter correct quantity value"
    },
    TakenBy: {
      label: "Taken By",
      error: "Please enter in letters"
    }
  },
  stylesheet: formStyles
};

export default class Consumable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  InsertDataToServer = async () => {
    fetch("http://127.0.0.1:8000/api/consumable/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.Date,
        name: this.Name,
        qtytaken: this.QuantityTaken,
        qtyused: this.QuantityUsed,
        qtybal: this.QuantityBalance,
        description: this.Description,
        notification: this.Notification,
        takenby: this.TakenBy
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
    this.setState({ value: null });
  };

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log(value);
    if (value != null) {
      (this.Date: value.Date),
        (this.Name: value.Name),
        (this.QuantityTaken: value.QuantityTaken),
        (this.QuantityUsed: value.QuantityUsed),
        (this.QuantityBalance: value.QuantityBalance),
        (this.Description: value.Description),
        (this.Notification: value.Notification),
        (this.TakenBy: value.TakenBy),
        this.InsertDataToServer();
      this.clearForm();
      alert("Advance captured!");
    } else console.log("No data entered");
  };

  render() {
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Consumable</Text>
            <Form
              ref={c => (this._form = c)}
              type={Consumable}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              options={options}
            />
            <TouchableOpacity>
              <View style={styles.button}>
                <Button
                  color="#0A802B"
                  title="SAVE"
                  onPress={this.handleSubmit.bind(this)}
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
