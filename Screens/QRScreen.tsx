import { StyleSheet, Text, View, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import PrintButton from "../Components/Buttons/PrintButton";
import QRCode from "react-native-qrcode-svg";
import { useAppDispatch, useAppSelector } from "../store/store";
import { formatNumberWithCommas } from "../Components/utils/formatNumberWithCommas";
import { setWebUrl } from "../store/slices/currencySlice";
import { useNavigation, NavigationProp } from "@react-navigation/native";

const QRScreen = () => {
  const mount = useAppSelector((state) => state.currency.currencyMount);
  const symbol = useAppSelector((state) => state.currency.currencySymbol);
  const data = useAppSelector((state) => state.currency.data);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<any>>();

  //for QR generate link
  const webUrl = useAppSelector((state) => state.currency.webUrl);

  //web_url to show if is null shows hardcoded one
  const [webUrlToShow, setWebUrlToShow] = useState<string>(
    "https://paytest.bitnovo.com/f16a139c"
  );

  //updates QR link
  useEffect(() => {
    if (webUrl.length > 0) setWebUrlToShow(webUrl);
  }, [webUrl]);

  const handlePrint = () => {
    ToastAndroid.show("Imprimir PDF", ToastAndroid.SHORT);
  };

  //open socket for verify changes
  useEffect(() => {
    //if post create_orders return data values for socket connection
    if (data) {
      const url = "wss://payments.smsdata.com/ws/merchant/" + data?.identifier;
      const socket = new WebSocket(url);

      //webSocket listeners
      socket.onopen = () => {
        console.log("Conexión establecida.");
        socket.send("Hola Bitnovo! :)");
      };

      socket.onmessage = (event) => {
        const jsonData = JSON.parse(event.data);

        //if is data is not null try set the web_url value
        if (data?.web_url) {
          dispatch(setWebUrl(data?.web_url));
        }

        //verify status payment for redirect to success
        if (jsonData?.status === "CA") {
          navigation.navigate("PaymentSuccessScreen", {});
        }
      };

      socket.onerror = (error) => {
        console.error("Error en la conexión:", error);
      };

      socket.onclose = (event) => {
        console.log("Conexión cerrada:", event.reason);
      };
    }
  }, []);

  return (
    <View style={styles.containerStyle}>
      <View style={styles.infoContainer}>
        {/* redict info msg */}
        <View style={styles.infoCardStyle}>
          <Ionicons name="alert-circle" size={24} color="#035AC5" />
          <Text style={styles.subTitleStyle}>
            Muestra este QR y será redirigido a la pasarela de pago.
          </Text>
        </View>

        {/* QR */}
        <View style={styles.QRContainer}>
          <QRCode
            value={webUrlToShow}
            size={300}
            logo={require("../assets/images/bitcoin.png")}
            logoSize={80}
            logoMargin={0}
            color={GlobalStyles.defaultStyle.color}
          />
          <Text style={styles.mountStyle}>
            {formatNumberWithCommas(mount)} {symbol}
          </Text>
        </View>

        {/* text and print button */}
        <View>
          <Text style={styles.bottomTxTStyle}>
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
  containerStyle: { backgroundColor: GlobalStyles.defaultStyle.color, flex: 1 },
  infoContainer: { alignItems: "center", marginHorizontal: 11, marginTop: 10 },
  infoCardStyle: {
    flexDirection: "row",
    backgroundColor: "#EAF3FF",
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  subTitleStyle: {
    color: GlobalStyles.defaultStyle.color,
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 10,
  },
  QRContainer: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  mountStyle: {
    color: GlobalStyles.defaultStyle.color,
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 15,
  },
  bottomTxTStyle: {
    color: "white",
    fontSize: 15,
    fontWeight: "400",
    marginVertical: 30,
  },
});
