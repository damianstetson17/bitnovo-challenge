import { StyleSheet, Text, View, ToastAndroid } from "react-native";
import React from "react";
import { GlobalStyles } from "../Styles/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import PrintButton from "../Components/Buttons/PrintButton";
import QRCode from "react-native-qrcode-svg";
import { useAppSelector } from "../store/store";
import { formatNumberWithCommas } from "../Components/utils/formatNumberWithCommas";

const QRScreen = () => {
  const mount = useAppSelector((state) => state.currency.currencyMount);
  const symbol = useAppSelector((state) => state.currency.currencySymbol);

  const handlePrint = () => {
    ToastAndroid.show("Imprimir PDF", ToastAndroid.SHORT);
  };

  return (
    <View
      style={{
        backgroundColor: GlobalStyles.defaultText.color,
        flex: 1,
      }}
    >
      <View
        style={{
          alignItems: "center",
          marginHorizontal: 11,
          marginTop: 10,
        }}
      >
        {/* redict info msg */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#EAF3FF",
            borderRadius: 5,
            paddingVertical: 20,
            paddingHorizontal: 25,
            marginBottom: 20,
          }}
        >
          <Ionicons name="alert-circle" size={24} color="#035AC5" />
          <Text
            style={{
              color: GlobalStyles.defaultText.color,
              fontSize: 15,
              fontWeight: "500",
              marginLeft: 10,
            }}
          >
            Muestra este QR y será redirigido a la pasarela de pago.
          </Text>
        </View>

        {/* QR */}
        <View
          style={{
            paddingHorizontal:50,
            paddingVertical:20,
            backgroundColor: "white",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <QRCode
            value="Just some string value"
            size={300}
            logo={require("../assets/images/bitcoin.png")}
            logoSize={80}
            logoMargin={0}
            color={GlobalStyles.defaultText.color}
          />
          <Text style={styles.mountStyle}>
            {formatNumberWithCommas(mount)} {symbol}
          </Text>
        </View>

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

          <View style={{ marginHorizontal: 80 }}>
            <PrintButton onPress={handlePrint} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default QRScreen;

const styles = StyleSheet.create({
  mountStyle: {
    color: GlobalStyles.defaultText.color,
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 15,
  },
});
