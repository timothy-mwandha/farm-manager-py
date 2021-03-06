import "react-native-gesture-handler";
import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
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
            onPress={() => navigation.navigate("Consumable Summaries")}
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
          <Image style={{
                alignSelf: "center",
                width: 80,
                height: 80,
                marginRight: 5
              }} source={require("../images/consumable_icon.png")} />
            <Text>CONSUMABLE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Tools Summaries")}
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
          <Image style={{
                alignSelf: "center",
                width: 80,
                height: 80,
                marginRight: 5
              }} source={require("../images/agri_tools.jpg")} />
            <Text>TOOLS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Harvest Summaries")}
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
          <Image style={{
                alignSelf: "center",
                width: 80,
                height: 80,
                marginRight: 5
              }} source={require("../images/coffee-harvest.jpg")} />
            <Text>HARVEST</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Requisition Summaries")}
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
          // onPress={() => navigation.navigate("Advance Summaries")}
          style={{ flex: 1, flexDirection: "row" }}
        >
          <TouchableOpacity
            // onPress={() => navigation.navigate("Advance Summaries")}
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

