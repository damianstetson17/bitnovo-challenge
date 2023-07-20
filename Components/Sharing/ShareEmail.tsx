import {
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import ShareButton from "./ShareButton";
import CustomButton from "../Buttons/CustomButton";
import { GlobalStyles } from "../../styles/GlobalStyles";

const ShareEmail = () => {
  const [email, setEmail] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const sendEmail = () => {
    if (isEmailValid(email))
      ToastAndroid.show("Correo enviado.", ToastAndroid.SHORT);
    else ToastAndroid.show("Correo inválido.", ToastAndroid.LONG);
  };

  return (
    <>
      {isFocused ? (
        <TouchableOpacity
          onPressOut={() => setIsFocused(false)}
          style={styles.txtInputContainer}
        >
          <Image
            source={require("../../assets/icons/sms-icon.png")}
            style={[styles.iconStyle, {marginHorizontal: 10}]}
          />
          <TextInput
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            style={styles.txtInputStyle}
          />
          <CustomButton
            title="Enviar"
            onPress={sendEmail}
            style={styles.littleStyleButton}
          />
        </TouchableOpacity>
      ) : (
        <ShareButton
          image={
            <Image
              source={require("../../assets/icons/sms-icon.png")}
              style={styles.iconStyle}
            />
          }
          title="Enviar solicitud por correo electrónico"
          onPress={() => setIsFocused(true)}
        />
      )}
    </>
  );
};

export default ShareEmail;

const styles = StyleSheet.create({
  txtInputContainer: {
    borderColor: "#758192",
    borderWidth: 0.2,
    borderRadius: 5,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  txtInputStyle: {
    width: "70%",
    textAlign: "left",
    color: GlobalStyles.defaultStyle.color,
  },
  littleStyleButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginRight: 15,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  
});
