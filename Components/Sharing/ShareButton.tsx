import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../../Styles/GlobalStyles";

type Props = {
  image: any;
  title: string;
  hasSendButton?: boolean;
  onPress?(): void;
  onPressButton?(): void;
  onPressOut?(): void;
};

const ShareButton = ({ image, title, onPress, onPressOut }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onPressOut={onPressOut}
      style={styles.btnContainer}
    >
      {image}
      <Text style={styles.txtStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ShareButton;

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: "#758192",
    paddingVertical: 15,
    paddingRight: 50,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 10,
  },
  txtStyle: {
    fontSize: 15,
    color: GlobalStyles.defaultStyle.color,
  },
});
