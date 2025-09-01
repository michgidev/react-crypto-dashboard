import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setLoading } from "./uiSlice";
import { getCryptoDataByID, getCryptoHistoricalChartData, getCryptosList, getTrendingCryptos } from "../services";

const initialState = {
  topCryptos: [],
  cryptos: [],
  allCryptos: [],
  currentCrypto: {},
  cryptoHistoricalChartData: {},
  trendingCryptosData: {}
};

// Fetch first load data
export const fetchTopCryptosWithDefault = createAsyncThunk(
  'data/fetchTopCryptosWithDefault',
  async (_, { dispatch }) => {

    dispatch(setLoading(true));

    const cryptos = await getCryptosList();

    const topCrypto = await getCryptoDataByID(cryptos[0].id);

    const topCryptoHistoricalChartData = await getCryptoHistoricalChartData(cryptos[0].id);

    const trendingCryptosData = await getTrendingCryptos();

    dispatch(setAllCryptos(cryptos));
    
    dispatch(setTopCryptos(cryptos.slice(0, 10)));

    dispatch(setCurrentCrypto(topCrypto));

    dispatch(setCryptoHistoricalChartData(topCryptoHistoricalChartData));

    dispatch(setTrendingCryptosData(trendingCryptosData));

    dispatch(setLoading(false));
  }
);

// Fetch datawhen selected crypto change
export const fetchSelectedCrypto = createAsyncThunk(
  'data/fetchSelectedCrypto',
  async (cryptoId, { dispatch }) => {

    dispatch(setLoading(true));

    const selectedCryptoData = await getCryptoDataByID(cryptoId);

    const selectedCryptoHistoricalChartData = await getCryptoHistoricalChartData(cryptoId);

    dispatch(setCurrentCrypto(selectedCryptoData));

    dispatch(setCryptoHistoricalChartData(selectedCryptoHistoricalChartData));

    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setAllCryptos: (state, action) => {
      state.cryptos = action.payload;
      state.allCryptos = action.payload;
    },

    setTopCryptos: (state, action) => {
      state.topCryptos = action.payload;
    },

    setCurrentCrypto: (state, action) => {
      state.currentCrypto = action.payload;
    },

    setCryptoHistoricalChartData: (state, action) => {
      state.cryptoHistoricalChartData = action.payload;
    },

    setTrendingCryptosData: (state, action) => {
      state.trendingCryptosData = action.payload;
    },

    setSearchedCryptos: (state, action) => {
      const searchTerm = action.payload.searchQuery.toLowerCase();

      if (searchTerm.trim() === '') {
        state.cryptos = state.allCryptos;
        return;
      }

      const filteredCryptos = state.allCryptos.filter((crypto) => {
        return crypto.name.toLowerCase().includes(searchTerm);
      });

      state.cryptos = filteredCryptos;
    }
  }
});

export const { 
  setTopCryptos, 
  setAllCryptos, 
  setCurrentCrypto, 
  setCryptoHistoricalChartData,
  setTrendingCryptosData,
  setSearchedCryptos,
} = dataSlice.actions;

export default dataSlice.reducer;