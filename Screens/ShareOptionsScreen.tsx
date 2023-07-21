import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ToastAndroid,
} from "react-native";
import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import ShareButton from "../components/Sharing/ShareButton";
import * as Clipboard from "expo-clipboard";
import ShareWhatsAppMessage from "../components/Sharing/ShareWhatsAppMessage";
import ShareEmail from "../components/Sharing/ShareEmail";
import { useAppSelector } from "../store/store";

const ShareOptionsScreen = () => {
  const webUrl = useAppSelector((state) => state.currency.webUrl);

  const copyLinkToClipboard = async () => {
    if (webUrl.length > 0) {
      await Clipboard.setStringAsync(webUrl);
      ToastAndroid.show("Link copiado en portapapeles", ToastAndroid.SHORT);
    } else {
      await Clipboard.setStringAsync("https://bitnovo-public.front.com");
      ToastAndroid.show(
        "Ejemplo de Link copiado en portapapeles",
        ToastAndroid.SHORT
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/icons/send-icon.png")}
          style={styles.sendIconStyle}
        />
        <Text style={[GlobalStyles.defaultStyle, styles.titleStyle]}>
          Solicitud de pago enviada
        </Text>
        <Text style={styles.infoTxtStyle}>
          Se ha enviado la solicitud de pago por correo a tus clientes
        </Text>
      </View>

      {/* share actions */}
      <View>
        {/* copy link */}
        <ShareButton
          hasSendButton={true}
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
          title={
            webUrl.length > 0 ? webUrl : "Generando link, por favor esperar..."
          }
          onPress={copyLinkToClipboard}
        />

        {/* send by email */}
        <ShareEmail />

        {/* wpp */}
        <ShareWhatsAppMessage />
      </View>
    </SafeAreaView>
  );
};

export default ShareOptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 20,
  },
  sendIconStyle: {
    width: 70,
    height: 70,
    marginTop: 50,
    marginBottom: 20,
  },
  titleStyle: {
    fontSize: 22,
    fontWeight: "600",
    marginVertical: 10,
  },
  infoTxtStyle: {
    fontSize: 15,
    color: "#758192",
    marginHorizontal: 30,
    marginVertical: 15,
    textAlign: "center",
  },
});
