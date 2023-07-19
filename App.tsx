import { StatusBar } from "expo-status-bar";

import { StyleSheet, View } from "react-native";
import StackNavigator from "./Navigation/StackNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <StackNavigator />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
