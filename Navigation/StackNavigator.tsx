import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SetMountScreen from "../Screens/SetMountScreen";
import CurrencyButton from "../Components/CurrencyButton";
import CustomBackButton from "../Components/CustomBackButton";
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
            headerLeft: () => (
              <CustomBackButton onPress={() => alert("Back button!")} />
            ),
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
            headerTitleAlign: "center",
            headerLeft: () => (
              <CustomBackButton onPress={() => alert("This is a button!")} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
