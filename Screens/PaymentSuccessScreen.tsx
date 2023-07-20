import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../store/store";
import { setMount } from "../store/slices/currencySlice";

const PaymentSuccessScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useAppDispatch();

  const handleNavigateToHome = () => {
    //reseting the mount to cero
    dispatch(setMount(0));
    navigation.navigate("SetMountScreen", {});
  };

  return (
    <View style={styles.containerStyle}>
      <Image
        style={{ width: 300, height: 200 }}
        source={require("../assets/gifs/check-animation.gif")}
      />
      <Text style={styles.titleStyle}>Pago procesado</Text>
      <Text style={styles.subTitleStyle}>
        Tu pago se ha confirmado con éxito
      </Text>
      <Text onPress={handleNavigateToHome} style={styles.bottomTxtStyle}>
        Finalizar
      </Text>
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
    fontSize: 22,
  },
  subTitleStyle: {
    color: "gray",
    fontSize: 15,
    marginTop: 20,
  },
  bottomTxtStyle: {
    color: "#035AC4",
    fontWeight: "600",
    fontSize: 18,
    marginTop: 40,
  },
});
