import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHotelBook = createAsyncThunk("hotelsBook/getHotelBook", async () => {
  const { data } = await axios.get("http://localhost:3009/api/places/hotelBook");
 
  return data.hotelBook;
});

const initialState = {
  book: [],
  isLoading: false,
  error: false,
};

const hotelBookSlice = createSlice({
  name: "hotelsBook",
  initialState,
  reducers: {},
  extraReducers: {
    [getHotelBook.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getHotelBook.fulfilled]: (state, action) => {
      state.book = action.payload;
      state.isLoading = false;
    },
    [getHotelBook.rejected]: (state, action) => {
      state.error = true;
      state.isLoading = false;
    },
  },
});

export default hotelBookSlice.reducer;
