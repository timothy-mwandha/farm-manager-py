//AdvanceLand.js
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AdvanceLand = ({ navigation }) => {
  const [data, setData] = useState({});
  //   // const [name, setName] = useState({});
  //   // const [date, setDate] = useState({});
  //   // const [advancedamnt, setAdvanceamnt] = useState({});

  async function fetchData() {
    const res = await fetch("http://127.0.0.1:8000/api/advance/");
    res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container1} behavior="padding" enabled>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}> Advance Landing Page </Text>
          {/* <View>
            <Text>{JSON.stringify(data)}</Text>
          </View> */}
          <FlatList
            data={data}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) => (
              <Text style={styles.labels}>
                {`${item.name} ${item.advancedamnt} ${item.date}`}
              </Text>
            )}
          />
          <Button
            title="ADD"
            style={{ position: "absolute", bottom: 0, left: 50, right: 50 }}
            onPress={() => navigation.navigate("advance")}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "space-between",
    width: "100%",
    backgroundColor: "#fff"
  },
  heading: {
    margin: 10,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center"
  },

  labels: {
    margin: 10,
    color: "#000",
    textAlign: "center"
  }
});

export default AdvanceLand;

// import React, { useState } from "react";
// import { Text, View, Button, FlatList, StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator();

// export default function AdvanceLand({navigation}) {
//   // state = {
//   //   data: []
//   // };

//   const [data setData] = useState('');
//   // const [firstName, setFirstname] = useState('');
//   // const [lastName, setLastname] = useState('');

//   // componentDidMount() {
//   //   fetchData();
//   // }

//   fetchData = async () => {
//     try {
//       const response = await fetch("http://76386705.ngrok.io/api/advance/");
//       const advances = await response.json(); //advances have array data
//       useState({ data: advances }); // filled data with dynamic array
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   // render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.heading}> Advance Landing Page </Text>
//         <FlatList
//           data={data}
//           keyExtractor={(x, i) => i}
//           renderItem={({ item }) => (
//             <Text
//               style={styles.labels}
//             >{`${item.name} ${item.advancedamnt} ${item.date}`}</Text>
//           )}
//         />
//         <Button
//           title="ADD"
//           style={{ position: "absolute", bottom: 0, left: 50, right: 50 }}
//           onPress={() => navigation.navigate("Advance")}
//         />
//       </View>
//     );
//   // }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "center"
//   },
//   pageName: {
//     margin: 10,
//     fontWeight: "bold",
//     color: "#000",
//     textAlign: "center"
//   },

//   labels: {
//     margin: 10,
//     // fontWeight: "bold",
//     color: "#000",
//     textAlign: "center"
//   }
// });

// import React, { Component } from "react";
// import { Text, View, Button, FlatList, StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// // import {
// //   Table,
// //   TableWrapper,
// //   Row,
// //   Rows,
// //   Col,
// //   Cols,
// //   Cell
// // } from "react-native-table-component";

// const Stack = createStackNavigator();

// export default class AdvanceLand extends Component {
//   // export default function AdvanceLand({navigation}) {
//   state = {
//     data: []
//   };

//   componentDidMount() {
//     fetchData();
//   }

//   fetchData = async () => {
//     try {
//       const response = await fetch("http://76386705.ngrok.io/api/advance/");
//       const advances = await response.json(); //advances have array data
//       this.setState({ data: advances }); // filled data with dynamic array
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.heading}> Advance Landing Page </Text>
//         <FlatList
//           data={this.state.data}
//           keyExtractor={(x, i) => i}
//           renderItem={({ item }) => (
//             <Text
//               style={styles.labels}
//             >{`${item.name} ${item.advancedamnt} ${item.date}`}</Text>
//           )}
//         />
//         <Button
//           title="ADD"
//           style={{ position: "absolute", bottom: 0, left: 50, right: 50 }}
//           onPress={() => navigation.navigate("Advance")}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "center"
//   },
//   pageName: {
//     margin: 10,
//     fontWeight: "bold",
//     color: "#000",
//     textAlign: "center"
//   },

//   labels: {
//     margin: 10,
//     // fontWeight: "bold",
//     color: "#000",
//     textAlign: "center"
//   }
// });
