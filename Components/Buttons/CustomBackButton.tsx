import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { GlobalStyles } from "../../Styles/GlobalStyles";
import { useNavigation, NavigationProp } from "@react-navigation/native";

const CustomBackButton = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.BackContainer}
    >
      <Ionicons
        name="arrow-back"
        size={24}
        color={GlobalStyles.defaultStyle.color}
      />
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
