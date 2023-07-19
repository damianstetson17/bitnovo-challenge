import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CurrencyTypeItem from "./CurrencyTypeItem";
import ListSeparator from "./ListSeparator";

// ! harcoded data
const data = [
  { id: 1, flag: "🇪🇺", abb: "EUR", name: "Euro" },
  { id: 2, flag: "🇬🇧", abb: "GBP", name: "Libra Esterlina" },
  { id: 3, flag: "🇺🇸", abb: "US", name: "Dolar Estadounidense" },
];

const setSelectedCurrency = (currencyAbb: string) => {
  console.log(currencyAbb);
};

const CurrencyList = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <CurrencyTypeItem
          flag={item.flag}
          abbreviation={item.abb}
          name={item.name}
          onPress={() => setSelectedCurrency(item.abb)}
        />
      )}
      keyExtractor={(item) => item?.id?.toString()}
      ItemSeparatorComponent={() => <ListSeparator />}
    />
  );
};

export default CurrencyList;

const styles = StyleSheet.create({});
