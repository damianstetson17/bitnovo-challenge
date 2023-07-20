import {
  StyleSheet,
  Image,
  Linking,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import ShareButton from "./ShareButton";
import PhoneInput from "react-native-phone-input";
import CustomButton from "../Buttons/CustomButton";
import { useAppSelector } from "../../store/store";

const ShareWhatsAppMessage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const webUrl = useAppSelector((state) => state.currency.webUrl);
  const [webUrlToShow, setWebUrlToShow] = useState<string>(
    "https://paytest.bitnovo.com/f16a139c"
  );

  useEffect(() => {
    if (webUrl.length > 0) setWebUrlToShow(webUrl);
  }, [webUrl]);

  const sendToPhoneNumber = () => {
    if (phoneNumber.length > 13)
      Linking.openURL(
        "whatsapp://send?text=" +
          "El link de pago para tu compra es: " +
          webUrlToShow +
          "&phone=" +
          phoneNumber
      );
    else
      ToastAndroid.show("Debe ingresar un número valido.", ToastAndroid.LONG);
  };

  return (
    <>
      {isFocused ? (
        <TouchableOpacity
          onPressOut={() => setIsFocused(false)}
          style={styles.btnContainer}
        >
          <Image
            source={require("../../assets/icons/wpp-icon.png")}
            style={styles.iconStyle}
          />
          <PhoneInput
            initialCountry="ar"
            style={styles.phoneInput}
            onChangePhoneNumber={(number: string) => {
              setPhoneNumber(number);
            }}
          />
          <CustomButton
            title="Enviar"
            onPress={sendToPhoneNumber}
            style={styles.littleButtonStyle}
          />
        </TouchableOpacity>
      ) : (
        <ShareButton
          hasSendButton={false}
          image={
            <Image
              source={require("../../assets/icons/wpp-icon.png")}
              style={[styles.iconStyle, { marginLeft: 0, marginRight: 5 }]}
            />
          }
          title="Envíar a número de Whatsapp"
          onPress={() => setIsFocused(true)}
        />
      )}
    </>
  );
};

export default ShareWhatsAppMessage;

const styles = StyleSheet.create({
  btnContainer: {
    borderColor: "#758192",
    borderWidth: 0.2,
    borderRadius: 5,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  iconStyle: { width: 20, height: 20, marginLeft: 10 },
  phoneInput: {
    paddingLeft: 16,
    width: "70%",
  },
  littleButtonStyle: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginRight: 15,
  },
});
