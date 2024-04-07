import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWallet } from "../service/wallet.service";

const wallet = createAsyncThunk("getWallet", async (_, thunkAPI) => {
  try {
    const { data } = await getWallet();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue;
  }
});

export default wallet;
