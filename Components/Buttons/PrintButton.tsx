import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  title?: string;
  onPress?(): void;
};

const PrintButton = ({ title = "Imprimir", onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <MaterialCommunityIcons name="printer" size={20} color="#035ac4" />
    </TouchableOpacity>
  );
};

export default PrintButton;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
  },
  titleStyle: {
    color: "#035ac4",
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 15,
  },
});
