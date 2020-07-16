import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    backgroundColor: "yellow",
    padding: 10,
    marginBottom: 10,
  },
  boxTwo: {
    backgroundColor: "green",
    padding: 10,
  },
  boxThree: {
    backgroundColor: "violet",
    padding: 10,
  },
  boxFour: {
    backgroundColor: "gold",
    padding: 10,
  },
});
