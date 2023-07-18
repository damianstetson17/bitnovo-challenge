import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { GlobalStyles } from "../Styles/GlobalStyles";

const SetMountScreen = () => {
  return (
    <View style={styles.container}>

      {/* mount container */}
      <View style={styles.mountContainer}>
        <Text style={styles.mountStyle}>56,00 €</Text>
      </View>

      {/* Keyboard container */}
      <View style={styles.keyboardContainer}>
        <Text>Teclado</Text>
      </View>

      {/* Buttons container */}
      <View style={{margin: 25}}>
        <TouchableOpacity
          style={{
            backgroundColor: "#035AC5",
            alignItems: "center",
            paddingVertical: 15,
            marginHorizontal: 10,
            borderRadius: 6,
            marginBottom: 10
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Solicitar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#white",
            alignItems: "center",
            paddingVertical: 15,
            marginHorizontal: 10,
            borderColor: "#B91C1C",
            borderWidth: 1,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "#B91C1C", fontWeight: "600" }}>
            Restablecer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetMountScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  mountContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  keyboardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mountStyle: {
    color: GlobalStyles.defaultText.color,
    fontWeight: "700",
    fontSize: 40,
  },
});
