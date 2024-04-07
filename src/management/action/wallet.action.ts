import { createAsyncThunk } from "@reduxjs/toolkit";
import getWallet from "../service/wallet.service";

const walletData = createAsyncThunk("getWallet", async (_, thunkAPI) => {
  try {
    const { data } = await getWallet();
    return data;
  } catch (error) {
    // console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export default walletData;
