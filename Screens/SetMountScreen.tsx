import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../Styles/GlobalStyles";
import RNScreenKeyboard from "rnscreenkeyboard";
import { Ionicons } from "@expo/vector-icons";

const SetMountScreen = () => {
  const [value, setValue] = useState<string>("");

  return (
    <View style={styles.container}>
      {/* mount container */}
      <View style={styles.mountContainer}>
        <Text style={styles.mountStyle}>{value} €</Text>
      </View>

      {/* Keyboard container */}
      <View style={styles.keyboardContainer}>
        <RNScreenKeyboard
          textStyle={{
            color: GlobalStyles.defaultText.color,
            fontWeight: "500",
            fontSize: 30,
          }}
          BackSpaceComponent={
            <Ionicons name="backspace-outline" size={35} color="black" />
          }
          backspaceTint={GlobalStyles.defaultText.color}
          cellStyle={{
            marginVertical: 5,
            marginHorizontal: 45,
          }}
          lastRowStyle={{ marginBottom: 30 }}
          value={value}
          onKeyPress={(val: string) => setValue(val)}
        />
      </View>

      {/* Buttons container */}
      <View style={{ margin: 25 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#035AC5",
            alignItems: "center",
            paddingVertical: 15,
            marginHorizontal: 10,
            borderRadius: 6,
            marginBottom: 10,
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
  container: { flex: 3, backgroundColo: "white" },
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
