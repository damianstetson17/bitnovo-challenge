import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { GlobalStyles } from "../../styles/GlobalStyles";

type Props = {
  flag?: string;
  abbreviation?: string;
  name?: string;
  onPress?(): void;
};

const CurrencyTypeItem = ({ flag, abbreviation, name, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row", alignItems: "flex-end", margin: 20 }}
    >
      <Text style={styles.flagStyle}>{flag}</Text>
      <Text style={styles.abrevStyle}>{abbreviation}</Text>
      <Text style={styles.nameStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CurrencyTypeItem;

const styles = StyleSheet.create({
  flagStyle: { fontSize: 25, marginRight: 10 },
  abrevStyle: {
    fontSize: 22,
    marginRight: 10,
    fontWeight: "500",
    color: GlobalStyles.defaultStyle.color,
  },
  nameStyle: {
    fontSize: 20,
    color: "gray",
  },
});
