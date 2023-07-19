import { StyleSheet, Text, View, ToastAndroid } from "react-native";
import React from "react";
import { GlobalStyles } from "../Styles/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import PrintButton from "../Components/Buttons/PrintButton";

const QRScreen = () => {
  const handlePrint = () => {
    ToastAndroid.show("Imprimir PDF", ToastAndroid.SHORT);
  }

  return (
    <View
      style={{
        backgroundColor: GlobalStyles.defaultText.color,
        flex: 1,
        alignItems: "center",
      }}
    >
      <View
        style={{
          alignItems: "center",
          marginHorizontal: 10,
          marginVertical: 25,
        }}
      >
        {/* redict info msg */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#EAF3FF",
            borderRadius: 5,
            padding: 10,
            marginBottom: 20,
          }}
        >
          <Ionicons name="alert-circle" size={24} color="#035AC5" />
          <Text
            style={{
              color: GlobalStyles.defaultText.color,
              fontSize: 15,
              fontWeight: "500",
              marginLeft: 10
            }}
          >
            Muestra este QR y será redirigido a la pasarela de pago.
          </Text>
        </View>

        {/* QR */}
        <View
          style={{
            height: 400,
            width: 390,
            backgroundColor: "white",
            borderRadius: 5,
          }}
        ></View>

        {/* text and print button */}
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "400",
              marginVertical: 30,
            }}
          >
            Esta pantalla se actualizará automáticamente.
          </Text>
          
          <View style={{marginHorizontal: 80}}>
            <PrintButton onPress={handlePrint}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default QRScreen;

const styles = StyleSheet.create({});
