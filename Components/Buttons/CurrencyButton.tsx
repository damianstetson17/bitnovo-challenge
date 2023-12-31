import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setBottonSheetOpen } from "../../store/slices/currencySlice";

const CurrencyButton = () => {
  const dispatch = useAppDispatch();
  const abb = useAppSelector((state) => state.currency.currencyAbb);

  const setSelectedFiat = () => {
    dispatch(setBottonSheetOpen(true));
  };

  return (
    <TouchableOpacity onPress={setSelectedFiat} style={styles.containerStyle}>
      <Text style={[GlobalStyles.defaultStyle, styles.textStyle]}>{abb}</Text>
      <MaterialIcons
        name="keyboard-arrow-down"
        size={25}
        color={GlobalStyles.defaultStyle.color}
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
