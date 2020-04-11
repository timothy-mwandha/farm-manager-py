import "react-native-gesture-handler";
import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import ConsumableLand from "./ConsumableLand";
import HarvestLand from "./HarvestLand";
import ToolsLand from "./ToolsLand";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function LandReportInventory({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ConsumableLand")}
            style={{
              flex: 1,
              backgroundColor: "#ecef57",
              borderRadius: 20,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center",
              fontSize: 30
            }}
          >
            <Text>CONSUMABLE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ToolsLand")}
            style={{
              flex: 1,
              backgroundColor: "#abdd53",
              borderRadius: 20,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>TOOLS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("HarvestLand")}
            style={{
              flex: 1,
              backgroundColor: "#7cb407",
              borderRadius: 20,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>HARVEST</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("requisitionland")}
            style={{
              flex: 1,
              backgroundColor: "#349e00",
              borderRadius: 20,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>OTHER</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View
          onPress={() => navigation.navigate("advanceland")}
          style={{ flex: 1, flexDirection: "row" }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("advanceLand")}
            style={{
              flex: 1,
              backgroundColor: "#606734",
              borderRadius: 20,
              margin: 10,
              fontSize: 24,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>OTHER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#163700",
              borderRadius: 20,
              margin: 10,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>OTHER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// import 'react-native-gesture-handler';
// import React from "react";
// import {
//   View, StyleSheet,
//   Text,
//   TouchableOpacity,
//   Button,
// } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from '@react-navigation/stack';
// // import LandReportFinance from "./ConsumableForm";
// // import LandReportInventory from "./LandReportInventory";

// const Stack = createStackNavigator();

// export default function LandReportInventory({navigation}) {
//   return (
//     <View style={styles.container}>

//       <TouchableOpacity style={styles.finance}>
//         <View>
//           <Text>INVENTORY</Text>
//         </View>
//       </TouchableOpacity>
//       <Button
//                     title="ADD"
//                     style={styles.butt}
//                     onPress={() => navigation.navigate("NewToolForm")}
//                 />

//       </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 25
//   },
//   nav: {
//     flex: 0.7,
//     flexDirection: "row",
//     backgroundColor: "#ad2525",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   menu: {
//     flex: 1,
//     height: 90,
//     alignItems: "flex-start",
//     paddingLeft: 15,
//     justifyContent: "center",
//     color: "white"
//   },
//   detail: {
//     flex: 1,
//     justifyContent: "center",
//     height: 90,
//     alignItems: "flex-end",
//     paddingRight: 15
//   },
//   finance: {
//     backgroundColor: "green",
//     flex: 2,
//     justifyContent: "center",
//     margin: 8,
//     alignItems: "center"
//   },
//   inventory: {
//     backgroundColor: "gray",
//     margin: 8,
//     flex: 2,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   update: {
//     backgroundColor: "black",
//     margin: 8,
//     flex: 1.3,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   text: {
//     color: "white"
//   }
// });
