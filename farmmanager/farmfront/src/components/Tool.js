import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView
} from "react-native";

var t = require("tcomb-form-native");
const Form = t.form.Form;

var ToolCondition = t.enums({
  New: "New tool",
  Reconditioned: "Old tool, repaired"
});

const Tool = t.struct({
  Date: t.Date,
  ToolName: ToolName,
  Quantity: t.Number,
  DateOfPurchase: t.Date,
  ToolCondition: ToolCondition,
  Description: t.String,
  SerialNumber: t.maybe(t.String),
  StoreName: t.maybe(t.String)
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
  fields: {
    Date: {
      label: "Date",
      mode: "date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    ToolName: {
      label: "Tool Name",
      error: "Please use only letters."
    },
    Quantity: {
      label: "Quantity",
      error: "Please enter quantity."
    },
    DateOfPurchase: {
      label: "Date of Purchase",
      mode: "date",
      config: {
        defaultValueText: "Select",
        format: date => moment(date).format("DD-MM-YYYY")
      }
    },
    ToolCondition: {
      label: "Tool Condition",
      error: "Please enter tool condition."
    },
    Description: {
      label: "Description",
      error: "Please explain what the tool is exactly."
    },
    SerialNumber: {
      label: "Serial Number",
      error: "Please use letters & numbers."
    }
    StoreName: {
      label: "Store Name",
      error: "Please mention where the tool is being kept."
    },    
  },
  stylesheet: formStyles
};

export default class ToolBinCard extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
//   handleSubmit = () => {
//     const value = this._form.getValue();
//     console.log("value: ", value);
//   };
//   componentDidMount() {
//     console.log("hi");
//   }

  render() {
    // let { image } = this.state;
    return (
      <SafeAreaView style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Text style={styles.title}>Tool Bin Card</Text>
            <Form ref={c => (this._form = c)} type={Tool} options={options} />
            <View style={styles.button}>
              <Button
                color="#0A802B"
                title="Save"
                onPress={this.handleSubmit}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
//   question: {
//     color: "#650205",
//     textAlign: "center",
//     marginTop: 18,
//     fontSize: 18
//   },

  button: {
    marginTop: 20,
    marginBottom: 20
  }
});
