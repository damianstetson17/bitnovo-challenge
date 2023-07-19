import { StyleSheet, Text, View } from "react-native";
import React from "react";

/**
 * Used as divider in FlatLists components
 */
const ListSeparator = () => {
  return <View style={styles.separatorStyle}></View>;
};

export default ListSeparator;

const styles = StyleSheet.create({
  separatorStyle: {
    height: 0.6,
    backgroundColor: "#E5E9F2",
    marginHorizontal: 15,
  },
});
