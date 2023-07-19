import React from "react";
import { Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SetMountScreen from "../Screens/SetMountScreen";
import CurrencyButton from "../Components/Buttons/CurrencyButton";
import CustomBackButton from "../Components/Buttons/CustomBackButton";
import ShareOptionsScreen from "../Screens/ShareOptionsScreen";
import PaymentSuccessScreen from "../Screens/PaymentSuccessScreen";
import PaymentRequestScreen from "../Screens/PaymentRequestScreen";
import QRScreen from "../Screens/QRScreen";
import { GlobalStyles } from "../Styles/GlobalStyles";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SetMountScreen">
        <Stack.Screen
          name="SetMountScreen"
          component={SetMountScreen}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "600",
              color: GlobalStyles.defaultText.color,
            },
            title: "Solicitar Pago",
            headerRight: () => (
              <CurrencyButton onPress={() => alert("This is a button!")} />
            ),
            headerLeft: () => <CustomBackButton />,
          }}
        />

        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="PaymentRequestScreen"
            component={PaymentRequestScreen}
          />
          <Stack.Screen
            name="ShareOptionsScreen"
            component={ShareOptionsScreen}
          />
          <Stack.Screen
            name="PaymentSuccessScreen"
            component={PaymentSuccessScreen}
          />
        </Stack.Group>

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
