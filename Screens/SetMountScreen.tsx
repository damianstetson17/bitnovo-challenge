import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../Styles/GlobalStyles";
import RNScreenKeyboard from "rnscreenkeyboard";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import CustomButton from "../Components/Buttons/CustomButton";

const SetMountScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [montValue, setMontValue] = useState<number>(0);

  return (
    <View style={styles.container}>
      {/* mount container */}
      <View style={styles.mountContainer}>
        <Text style={styles.mountStyle}>{montValue} €</Text>
      </View>

      {/* Keyboard container */}
      <View style={styles.keyboardContainer}>
        <RNScreenKeyboard
          textStyle={{
            color: GlobalStyles.defaultText.color,
            fontWeight: "500",
            fontSize: 30,
          }}
          BackSpaceComponent={
            <Ionicons name="backspace-outline" size={35} color="black" />
          }
          backspaceTint={GlobalStyles.defaultText.color}
          cellStyle={{
            marginVertical: 5,
            marginHorizontal: 45,
          }}
          lastRowStyle={{ marginBottom: 30 }}
          value={Number(montValue)}
          onKeyPress={(inputValue: string) => {
            setMontValue(Number(inputValue));
          }}
        />
      </View>

      {/* Buttons container */}
      <View style={styles.btnsContainer}>
        <CustomButton
          title="Solicitar"
          onPress={() => navigation.navigate("PaymentRequestScreen", {})}
        />
        <CustomButton
          title="Restablecer"
          onPress={() => setMontValue(0)}
          style={styles.redStyleBtn}
          titleStyle={{
            color: "#B91C1C",
          }}
        />
      </View>
    </View>
  );
};

export default SetMountScreen;

const styles = StyleSheet.create({
  container: { flex: 3, backgroundColo: "white" },
  mountContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  keyboardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mountStyle: {
    color: GlobalStyles.defaultText.color,
    fontWeight: "700",
    fontSize: 40,
  },
  btnsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  redStyleBtn: {
    backgroundColor: "white",
    borderColor: "#B91C1C",
    borderWidth: 1,
    marginTop: 10,
  },
});
