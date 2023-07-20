import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import ShareButton from "../Components/Sharing/ShareButton";
import * as Clipboard from "expo-clipboard";
import CustomButton from "../Components/Buttons/CustomButton";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useAppSelector } from "../store/store";
import { formatNumberWithCommas } from "../Components/utils/formatNumberWithCommas";

const PaymentRequestScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const mount = useAppSelector((state) => state.currency.currencyMount);
  const symbol = useAppSelector((state) => state.currency.currencySymbol);

  const copyLinkToClipboard = async () => {
    await Clipboard.setStringAsync("https://bitnovo-public.front.com");
    ToastAndroid.show("Link copiado en portapapeles", ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* info container */}
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/icons/timemoney-icon.png")}
          style={{
            width: 70,
            height: 70,
            marginTop: 50,
            marginBottom: 20,
          }}
        />
        <Text style={{ fontSize: 20, color: "#758192" }}>
          Solicitud de pago
        </Text>

        {/* mount preview */}
        <Text style={[GlobalStyles.defaultStyle, styles.mountTxtStyle]}>
          {formatNumberWithCommas(mount)} {symbol}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#758192",
            marginHorizontal: 50,
            marginVertical: 15,
            textAlign: "center",
          }}
        >
          Muéstrale el QR al cliente o comparte el enlace de pago.
        </Text>

        {/* rows container */}
        <View style={styles.rowsContainer}>
          {/*qr row */}
          <View style={styles.QRContainer}>
            <ShareButton
              image={
                <Image
                  source={require("../assets/icons/copy-icon.png")}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                  }}
                />
              }
              title="https://bitnovo-public.front..."
              onPress={copyLinkToClipboard}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("QRScreen", {})}
              style={styles.QRbtnStyle}
            >
              <Image
                source={require("../assets/icons/barcode-icon.png")}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity>
          </View>

          {/* email row */}
          <ShareButton
            image={
              <Image
                source={require("../assets/icons/sms-icon.png")}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />
            }
            title="Enviar solicitud por correo electrónico"
            onPress={() => navigation.navigate("ShareOptionsScreen", {})}
          />

          {/* wpp row */}
          <ShareButton
            image={
              <Image
                source={require("../assets/icons/wpp-icon.png")}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />
            }
            title="Enviar a un número de WhatsApp"
            onPress={() => navigation.navigate("ShareOptionsScreen", {})}
          />
        </View>
      </View>

      {/* buttons container */}
      <View style={{ marginHorizontal: 30 }}>
        <CustomButton title="Ir a la pasarela" />
        <CustomButton
          title="Compartir"
          style={styles.shareCustomStyle}
          titleStyle={{ color: "#035AC5" }}
        />
        <Text
          onPress={() => navigation.navigate("SetMountScreen", {})}
          style={styles.footerTxt}
        >
          Solicitar un nuevo pago
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PaymentRequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  mountTxtStyle: {
    fontSize: 40,
    fontWeight: "600",
    marginVertical: 10,
  },
  QRContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  QRbtnStyle: {
    backgroundColor: "#035AC5",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 15,
  },
  shareCustomStyle: {
    backgroundColor: "white",
    borderColor: "#035AC5",
    borderWidth: 1,
    marginTop: 10,
  },
  footerTxt: {
    color: "#035AC5",
    textAlign: "center",
    fontSize: 15,
    marginTop: 30,
    marginBottom: 30,
  },
  rowsContainer: { marginHorizontal: 30, marginTop: 10 },
});
