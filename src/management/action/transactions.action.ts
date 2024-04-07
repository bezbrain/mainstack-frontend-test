import { createAsyncThunk } from "@reduxjs/toolkit";
import getTransactions from "../service/transactions.service";

const allTransactions = createAsyncThunk(
  "allTransactions",
  async (_, thunkAPI) => {
    try {
      const { data } = await getTransactions();
      //   console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default allTransactions;
