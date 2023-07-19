import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CurrencyItem {
  id: number;
  flag: string;
  abb: string;
  name: string;
  symbol: string;
}

interface CurrencyState {
  currencyMount: number;
  currencyAbb: string;
  currencySymbol: string;
  currencyList: CurrencyItem[];
  isBottomSheetOpen: boolean;
}

const initialState: CurrencyState = {
  currencyMount: 56,
  currencyAbb: "EUR",
  currencySymbol: "€",
  isBottomSheetOpen: false,
  currencyList: [
    { id: 1, flag: "🇪🇺", abb: "EUR", name: "Euro", symbol: "€" },
    { id: 2, flag: "🇬🇧", abb: "GBP", name: "Libra Esterlina", symbol: "£" },
    { id: 3, flag: "🇺🇸", abb: "US", name: "Dolar Estadounidense", symbol: "$" },
  ],
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    //update mount to POST
    setMount: (state, action: PayloadAction<number>) => {
      state.currencyMount = action.payload;
    },

    setFiatData: (
      state,
      action: PayloadAction<{ abb: string; symbol: string }>
    ) => {
      state.currencyAbb = action.payload.abb;
      state.currencySymbol = action.payload.symbol;
    },

    //update bottom sheet flag
    setBottonSheetOpen: (state, action: PayloadAction<boolean>) => {
      state.isBottomSheetOpen = action.payload;
    },
  },
});

export const { setMount, setBottonSheetOpen, setFiatData } =
  currencySlice.actions;
export default currencySlice.reducer;
