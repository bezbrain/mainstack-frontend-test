import { createSlice } from "@reduxjs/toolkit";
import allTransactions from "../action/transactions.action";

const initialState = {
  istransLoading: false,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    //
  },

  extraReducers: (builder) => {
    builder
      .addCase(allTransactions.pending, (state) => {
        state.istransLoading = true;
      })
      .addCase(allTransactions.fulfilled, (state) => {
        state.istransLoading = false;
      })
      .addCase(allTransactions.rejected, (state) => {
        state.istransLoading = true;
      });
  },
});

export default transactionSlice.reducer;
