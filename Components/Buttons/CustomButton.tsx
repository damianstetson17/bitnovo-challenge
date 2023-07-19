import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onPress?(): void;
};

const CustomButton = ({ title, onPress, style, titleStyle }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnDefaultStyle, style]}>
      <Text style={[styles.btnTxtStyle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnDefaultStyle: {
    backgroundColor: "#035AC5",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 6,
  },
  btnTxtStyle: {
    color: "white",
    fontWeight: "600",
  },
});
