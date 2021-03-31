import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import FB from "./components/FB";
import Insta from "./components/Insta";

export default function App() {
  return <AppContainer />;
}

const Tab = createBottomTabNavigator({
  Facebook: { screen: FB },
  Instagram: { screen: Insta },
});

const AppContainer = createAppContainer(Tab);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
