import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setLoading } from "./uiSlice";
import { getCryptoDataByID, getTopCryptos } from "../services";

const initialState = {
  topCryptos: [],
  allTopCryptos: [],
  currentCrypto: {},
};

export const fetchTopCryptosWithDefault = createAsyncThunk(
  'data/fetchTopCryptosWithDefault',
  async (_, { dispatch }) => {

    dispatch(setLoading(true));

    const topCryptos = await getTopCryptos();

    const topCrypto = await getCryptoDataByID(topCryptos[0].id);
    
    dispatch(setTopCryptos(topCryptos));
    dispatch(setCurrentCrypto(topCrypto));

    dispatch(setLoading(false));
  }
);

export const fetchSelectedCrypto = createAsyncThunk(
  'data/fetchSelectedCrypto',
  async (cryptoId, { dispatch }) => {

    dispatch(setLoading(true));

    const selectedCryptoData = await getCryptoDataByID(cryptoId);

    dispatch(setCurrentCrypto(selectedCryptoData));

    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setTopCryptos: (state, action) => {
      state.topCryptos = action.payload;
      state.allTopCryptos = action.payload;
    },

    setCurrentCrypto: (state, action) => {
      state.currentCrypto = action.payload;
    },
  }
});

export const { setTopCryptos, setCurrentCrypto } = dataSlice.actions;

export default dataSlice.reducer;

console.log('dataSlice: ', dataSlice);