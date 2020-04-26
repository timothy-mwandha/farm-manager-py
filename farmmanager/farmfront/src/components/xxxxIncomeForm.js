import * as yup from "yup";
import { Formik } from "formik";

import React, { Component } from "react";
import { View, TextInput, Text, Button, Alert, StyleSheet } from "react-native";

export default class App extends Component {
  render() {
    return (
      <Formik
        initialValues={{ customer: "", email: "", password: "" }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}

        // validationSchema={yup.object().shape({
        //   customer: yup
        //     .string()
        //     .email()
        //     .required(),
        //   password: yup
        //     .string()
        //     .min(6)
        //     .required(),
        // })}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit
        }) => (
          <View style={styles.container}>
            <TextInput
              value={values.customer}
              onChangeText={handleChange("customer")}
              onBlur={() => setFieldTouched("customer")}
              placeholder="Customer"
            />
            {touched.customer && errors.customer && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.customer}
              </Text>
            )}
            <TextInput
              value={values.phone}
              onChangeText={handleChange("phone")}
              placeholder="Phone"
              onBlur={() => setFieldTouched("phone")}
              // secureTextEntry={true}
            />
            {touched.phone && errors.phone && (
              <Text style={{ fontSize: 10, color: "red" }}>{errors.phone}</Text>
            )}
            <TextInput
              value={values.product}
              onChangeText={handleChange("product")}
              onBlur={() => setFieldTouched("product")}
              placeholder="Product"
            />
            {touched.product && errors.product && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.product}
              </Text>
            )}
            <TextInput
              value={values.unit}
              onChangeText={handleChange("unit")}
              placeholder="Unit"
              onBlur={() => setFieldTouched("unit")}
              secureTextEntry={true}
            />
            {touched.unit && errors.unit && (
              <Text style={{ fontSize: 10, color: "red" }}>{errors.unit}</Text>
            )}
            <TextInput
              value={values.unitprice}
              onChangeText={handleChange("unitprice")}
              onBlur={() => setFieldTouched("unitprice")}
              placeholder="Unit Price"
            />
            {touched.unitprice && errors.unitprice && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.unitprice}
              </Text>
            )}
            <TextInput
              value={values.quantity}
              onChangeText={handleChange("quantity")}
              placeholder="Quantity"
              onBlur={() => setFieldTouched("quantity")}
              // secureTextEntry={true}
            />
            {touched.quantity && errors.quantity && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.quantity}
              </Text>
            )}
            <TextInput
              value={values.subtotal}
              onChangeText={handleChange("subtotal")}
              onBlur={() => setFieldTouched("subtotal")}
              placeholder="Sub-Total"
            />
            {touched.subtotal && errors.subtotal && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.subtotal}
              </Text>
            )}
            <TextInput
              value={values.tax}
              onChangeText={handleChange("tax")}
              placeholder="Tax"
              onBlur={() => setFieldTouched("tax")}
              secureTextEntry={true}
            />
            {touched.tax && errors.tax && (
              <Text style={{ fontSize: 10, color: "red" }}>{errors.tax}</Text>
            )}
            <TextInput
              value={values.description}
              onChangeText={handleChange("description")}
              onBlur={() => setFieldTouched("description")}
              placeholder="Description"
            />
            {touched.description && errors.description && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.description}
              </Text>
            )}
            <TextInput
              value={values.invno}
              onChangeText={handleChange("invno")}
              placeholder="Invoice Number"
              onBlur={() => setFieldTouched("invno")}
              // secureTextEntry={true}
            />
            {touched.invno && errors.invno && (
              <Text style={{ fontSize: 10, color: "red" }}>{errors.invno}</Text>
            )}
            <TextInput
              value={values.amtpaid}
              onChangeText={handleChange("amtpaid")}
              onBlur={() => setFieldTouched("amtpaid")}
              placeholder="Amount Paid"
            />
            {touched.amtpaid && errors.amtpaid && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.amtpaid}
              </Text>
            )}
            <TextInput
              value={values.paymode}
              onChangeText={handleChange("paymode")}
              placeholder="Payment Mode"
              onBlur={() => setFieldTouched("paymode")}
              // secureTextEntry={true}
            />
            {touched.paymode && errors.paymode && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.paymode}
              </Text>
            )}
            <TextInput
              value={values.rctno}
              onChangeText={handleChange("rctno")}
              placeholder="Receipt Number"
              onBlur={() => setFieldTouched("rctno")}
              // secureTextEntry={true}
            />
            {touched.rctno && errors.rctno && (
              <Text style={{ fontSize: 10, color: "red" }}>{errors.rctno}</Text>
            )}
            <Button title="Save" disabled={!isValid} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 40
  }
});
