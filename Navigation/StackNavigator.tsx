import React from "react";
import { Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SetMountScreen from "../screens/SetMountScreen";
import CurrencyButton from "../Components/Buttons/CurrencyButton";
import CustomBackButton from "../Components/Buttons/CustomBackButton";
import ShareOptionsScreen from "../screens/ShareOptionsScreen";
import PaymentSuccessScreen from "../screens/PaymentSuccessScreen";
import PaymentRequestScreen from "../screens/PaymentRequestScreen";
import QRScreen from "../screens/QRScreen";
import { GlobalStyles } from "../styles/GlobalStyles";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaymentSuccessScreen">
        {/* first page with calculator and header buttons*/}
        <Stack.Screen
          name="SetMountScreen"
          component={SetMountScreen}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "600",
              color: GlobalStyles.defaultStyle.color,
            },
            title: "Solicitar Pago",
            headerRight: () => <CurrencyButton />,
            headerLeft: () => <CustomBackButton />,
          }}
        />

        {/* Screens without header */}
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="PaymentRequestScreen"
            component={PaymentRequestScreen}
          />
          <Stack.Screen
            name="ShareOptionsScreen"
            component={ShareOptionsScreen}
          />
        </Stack.Group>

        {/* QR Screen with imagen in header */}
        <Stack.Screen
          name="QRScreen"
          component={QRScreen}
          options={{
            headerTitle: () => (
              <Image
                style={{ width: 100, height: 35 }}
                source={require("../assets/images/bitnovo-pay.png")}
              />
            ),
            headerTitleAlign: "center",
            headerBackVisible: false,
            headerLeft: () => <CustomBackButton />,
          }}
        />

        {/* success screen with imagen in header  */}
        <Stack.Screen
          name="PaymentSuccessScreen"
          component={PaymentSuccessScreen}
          options={{
            headerTitle: () => (
              <Image
                style={{ width: 100, height: 35 }}
                source={require("../assets/images/bitnovo-pay.png")}
              />
            ),
            headerTitleAlign: "center",
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
