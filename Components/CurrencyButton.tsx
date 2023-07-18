import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../Styles/GlobalStyles";

type Props = {
  onPress(): void;
};

const CurrencyButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.containerStyle}>
      <Text style={[GlobalStyles.defaultText, styles.textStyle]}>EUR</Text>
      <MaterialIcons
        name="keyboard-arrow-down"
        size={25}
        color={GlobalStyles.defaultText.color}
        style={{ marginLeft: 5 }}
      />
    </TouchableOpacity>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#60617029",
    margin: 5,
    paddingHorizontal: 10,
  },
  textStyle: {
    fontWeight: "700",
  },
});
