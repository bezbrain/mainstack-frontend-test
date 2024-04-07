import { createAsyncThunk } from "@reduxjs/toolkit";
import getUserProfile from "../service/userProfile.service";

const userProfile = createAsyncThunk("userProfile", async (_, thunkAPI) => {
  try {
    const { data } = await getUserProfile();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export default userProfile;
