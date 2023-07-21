import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import RNScreenKeyboard from "rnscreenkeyboard";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import CustomButton from "../Components/Buttons/CustomButton";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import CurrencyList from "../Components/Lists/CurrencyList";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  createOrder,
  setBottonSheetOpen,
  setMount,
} from "../store/slices/currencySlice";
import { formatNumberWithCommas } from "../Components/utils/formatNumberWithCommas";
import { PostData } from "../services/OrderServices";

const SetMountScreen = () => {
  const mount = useAppSelector((state) => state.currency.currencyMount);
  const symbol = useAppSelector((state) => state.currency.currencySymbol);
  const fiat = useAppSelector((state) => state.currency.currencyAbb);

  const dispatch = useAppDispatch();

  const navigation = useNavigation<NavigationProp<any>>();
  const [montValue, setMontValue] = useState<number>(mount);

  //bottom sheet
  const isBottomSheetOpen = useAppSelector(
    (state) => state.currency.isBottomSheetOpen
  );
  const bottomSheetModalRef = useRef<any>();
  const snapPoints = ["48%"];

  useEffect(() => {
    if (isBottomSheetOpen) bottomSheetModalRef?.current?.present();
    else bottomSheetModalRef?.current?.close();
  }, [isBottomSheetOpen]);

  const handleCloseModal = () => {
    dispatch(setBottonSheetOpen(false));
  };

  const handlePostPay = () => {
    //updates mount state
    dispatch(setMount(montValue));

    //generate body object
    const test: PostData = {
      "expected_output_amount": montValue,
      "merchant_urlko": "https://example.com/payment-failed",
      "merchant_urlok": "https://example.com/payment-successful",
      "merchant_url_standby": "https://example.com/wait-for-confirmation",
      "notes": "Example product payment",
      "reference": "PAY123456789",
      "fiat": fiat,
      "language": "ES",
      "front_dni": "base64_encoded_front_dni_image_data",
      "back_dni": "base64_encoded_back_dni_image_data",
      "first_name": "John",
      "surnames": "Doe",
      "address_name": "123 Main Street",
      "address_additional": "Apt 4B",
      "address_number": "1234",
      "zip_code": "12345",
      "city": "Barcelona",
      "province": "Barcelona",
      "country": "ES",
      "email": "john.doe@example.com",
      "phone_number": "1234567890",
      "nif": "12345678Z",
      "referral_id": "REF123456789",
      "internal_data": "Additional data stored by the merchant"
    };

    //try post action
    dispatch(createOrder(test));
    navigation.navigate("PaymentRequestScreen", {});
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View
          style={[
            styles.container,
            { backgroundColor: isBottomSheetOpen ? "gray" : "white" },
          ]}
        >
          {/* mount container */}
          <View style={styles.mountContainer}>
            <Text style={styles.mountStyle}>
              {formatNumberWithCommas(montValue)} {symbol}
            </Text>
          </View>

          {/* Keyboard container */}
          <View style={styles.keyboardContainer}>
            <RNScreenKeyboard
              textStyle={{
                color: GlobalStyles.defaultStyle.color,
                fontWeight: "500",
                fontSize: 30,
              }}
              BackSpaceComponent={
                <Ionicons name="backspace-outline" size={35} color="black" />
              }
              backspaceTint={GlobalStyles.defaultStyle.color}
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
            <CustomButton title="Solicitar" onPress={() => handlePostPay()} />
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

        {/* modal */}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 50 }}
          onDismiss={handleCloseModal}
        >
          <TouchableOpacity
            onPress={handleCloseModal}
            style={{
              borderRadius: 50,
              backgroundColor: "#60617029",
              alignSelf: "flex-end",
              marginRight: 30,
              marginBottom: 10,
            }}
          >
            <AntDesign
              name="close"
              size={20}
              color={GlobalStyles.defaultStyle.color}
              style={{ margin: 10 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "600",
              color: GlobalStyles.defaultStyle.color,
              fontSize: 22,
              textAlign: "center",
            }}
          >
            Elige una moneda
          </Text>

          {/* currency list */}
          <CurrencyList />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
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
    color: GlobalStyles.defaultStyle.color,
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
