import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";

const PaymentSuccessScreen = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>Pago procesado</Text>
      <Text style={styles.subTitleStyle}>
        Tu pago se ha confirmado con éxito
      </Text>
      <Text style={styles.bottomTxtStyle}>Finalizar</Text>
    </View>
  );
};

export default PaymentSuccessScreen;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    color: GlobalStyles.defaultStyle.color,
    fontWeight: "600",
    fontSize: 22
  },
  subTitleStyle: {
    color: "gray",
    fontSize: 15,
    marginTop: 20,
  },
  bottomTxtStyle: {
    color: '#035AC4',
    fontWeight: "600",
    fontSize: 18,
    marginTop: 40
  },
});
