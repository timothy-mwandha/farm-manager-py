import React, { Component, setState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class AdvanceLand extends Component {
  state = {
    data: [],
    loading: true
  };

  //Define your navigation options in a form of a method so you have access to navigation props.
  static navigationOptions = {
    title: "Advances"
  };

  //Define your componentDidMount lifecycle hook that will retrieve data.
  componentDidMount() {
    this.fetchData();
  }

  //Have the async keyword to indicate that it is asynchronous.
  fetchData = async () => {
    //Have a try and catch block for catching errors.
    try {
      //Assign the promise unresolved first then get the data using the json method.
      const response = await fetch("http://127.0.0.1:8000/api/advance/");
      const advances = await response.json();
      this.setState({ data: advances });
    } catch (error) {
      console.log("Error fetching advance data-----------", error);
    }
  };

  render() {
    //Destruct data and Loading from state.
    const { data, loading } = this.state;
    //Destruct navigation from props
    const { navigation } = this.props;

    //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
    //Data contains the data being  mapped over.
    //RenderItem a callback return UI for each item.
    //keyExtractor used for giving a unique identifier for each item.

    // if (!loading) {
    return (
      <KeyboardAvoidingView
        style={styles.container1}
        behavior="padding"
        enabled
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.heading}> Advance Landing Page </Text>
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
    //     // } else {
    //     //   return <ActivityIndicator />;
    //     // }
  }
}

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

///Function component
// import React, { useState, useEffect } from "react";
// import {
//   Text,
//   View,
//   Button,
//   FlatList,
//   StyleSheet,
//   ScrollView,
//   KeyboardAvoidingView
// } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// const Stack = createStackNavigator();
// const AdvanceLand = ({ navigation }) => {

//   const [data, setData] = useState({});
//   //   // const [name, setName] = useState({});
//   //   // const [date, setDate] = useState({});
//   //   // const [advancedamnt, setAdvanceamnt] = useState({});
// ​
//   async function fetchData() {
//     const res = await fetch("http://127.0.0.1:8000/api/advance/");
//     res
//       .json()
//       .then(res => setData(res))
//       .catch(err => setErrors(err));
//   }
// ​
//   useEffect(() => {
//     fetchData();
//   }, []);
// ​
//   return (
//     <KeyboardAvoidingView style={styles.container1} behavior="padding" enabled>
//       <ScrollView>
//         <View style={styles.container}>
//           <Text style={styles.heading}> Advance Landing Page </Text>
//           <FlatList
//             data={data}
//             keyExtractor={(x, i) => i}
//             renderItem={({ item }) => (
//               <Text style={styles.labels}>
//                 {`${item.name} ${item.advancedamnt} ${item.date}`}
//               </Text>
//             )}
//           />
//           <Button
//             title="ADD"
//             style={{ position: "absolute", bottom: 0, left: 50, right: 50 }}
//             onPress={() => navigation.navigate("advance")}
//           />
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };
// ​
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "space-between",
//     alignContent: "space-between",
//     width: "100%",
//     backgroundColor: "#fff"
//   },
//   heading: {
//     margin: 10,
//     fontWeight: "bold",
//     color: "#000",
//     textAlign: "center"
//   },
// ​
//   labels: {
//     margin: 10,
//     color: "#000",
//     textAlign: "center"
//   }
// });
// ​
// export default AdvanceLand;
