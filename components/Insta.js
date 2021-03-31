import React from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";

export default function FB() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Button
        title="Go to Instagram Page"
        style={styles.button}
        onPress={() => {
          Linking.openURL("https://www.instagram.com");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 100,
    width: 300,
  },
});
