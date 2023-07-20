import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ToastAndroid,
} from "react-native";
import React from "react";
import { GlobalStyles } from "../Styles/GlobalStyles";
import ShareButton from "../Components/Sharing/ShareButton";
import * as Clipboard from "expo-clipboard";
import ShareWhatsAppMessage from "../Components/Sharing/ShareWhatsAppMessage";
import ShareEmail from "../Components/Sharing/ShareEmail";

const ShareOptionsScreen = () => {
  const copyLinkToClipboard = async () => {
    await Clipboard.setStringAsync("https://bitnovo-public.front.com");
    ToastAndroid.show("Link copiado en portapapeles", ToastAndroid.SHORT);
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
          title="https://bitnovo-public.front..."
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
