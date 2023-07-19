import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CurrencyTypeItem from "./CurrencyTypeItem";
import ListSeparator from "./ListSeparator";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setFiatData } from "../../store/slices/currencySlice";

const CurrencyList = () => {
  const dispatch = useAppDispatch();

  //fetching the fiats list from redux state
  const currencyDataList = useAppSelector(
    (state) => state.currency.currencyList
  );

  //setting the select fiat to te redux state
  const setSelectedCurrency = (abb: string, symbol: string) => {
    dispatch(setFiatData({ abb, symbol }));
  };

  return (
    <FlatList
      data={currencyDataList}
      renderItem={({ item }) => (
        <CurrencyTypeItem
          flag={item.flag}
          abbreviation={item.abb}
          name={item.name}
          onPress={() => setSelectedCurrency(item.abb, item.symbol)}
        />
      )}
      keyExtractor={(item) => item?.id?.toString()}
      ItemSeparatorComponent={() => <ListSeparator />}
    />
  );
};

export default CurrencyList;

const styles = StyleSheet.create({});
