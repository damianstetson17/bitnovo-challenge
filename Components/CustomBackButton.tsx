import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { GlobalStyles } from "../Styles/GlobalStyles";

type Props = {
  onPress(): void;
};

const CustomBackButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.BackContainer}>
      <Ionicons name="arrow-back" size={24} color={GlobalStyles.defaultText.color} />
    </TouchableOpacity>
  );
};

export default CustomBackButton;

const styles = StyleSheet.create({
  BackContainer: {
    borderRadius: 50,
    backgroundColor: "#60617029",
    margin: 10,
    padding: 5,
  },
});
