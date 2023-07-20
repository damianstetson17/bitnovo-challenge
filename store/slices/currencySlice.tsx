import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ordersCreate,
  ResponseData,
  PostData,
} from "../../services/OrderServices";

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
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  data: ResponseData | null;
  webUrl: string,
  error: string | null;
}

const initialState: CurrencyState = {
  currencyMount: 56,
  currencyAbb: "EUR",
  currencySymbol: "€",
  isBottomSheetOpen: false,
  loading: "idle",
  data: null,
  webUrl: '',
  error: null,
  currencyList: [
    { id: 1, flag: "🇪🇺", abb: "EUR", name: "Euro", symbol: "€" },
    { id: 2, flag: "🇬🇧", abb: "GBP", name: "Libra Esterlina", symbol: "£" },
    { id: 3, flag: "🇺🇸", abb: "US", name: "Dolar Estadounidense", symbol: "$" },
  ],
};

/**
 * Try Post for order creation (Async Thunk)
 */
export const createOrder = createAsyncThunk<ResponseData, PostData>(
  "orders/create",
  async (postData, thunkAPI) => {
    try {
      const response = await ordersCreate(postData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    //update mount value
    setMount: (state, action: PayloadAction<number>) => {
      state.currencyMount = action.payload;
    },
    //update fiat data
    setFiatData: (
      state,
      action: PayloadAction<{ abb: string; symbol: string }>
    ) => {
      state.currencyAbb = action.payload.abb;
      state.currencySymbol = action.payload.symbol;
    },
    //update web url value
    setWebUrl: (state, action: PayloadAction<string>) => {
      state.webUrl = action.payload;
    },
    //update bottom sheet flag
    setBottonSheetOpen: (state, action: PayloadAction<boolean>) => {
      state.isBottomSheetOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(
        createOrder.fulfilled,
        (state, action: PayloadAction<ResponseData | null>) => {
          state.loading = "fulfilled";
          state.data = action.payload;
          state.error = null;
        }
      )
      .addCase(createOrder.rejected, (state, action: PayloadAction<any>) => {
        state.loading = "rejected";
        state.error = action.payload || "Error al crear la orden.";
        console.log(action.payload);
      });
  },
});

export const { setMount, setBottonSheetOpen, setFiatData, setWebUrl } =
  currencySlice.actions;
export default currencySlice.reducer;
