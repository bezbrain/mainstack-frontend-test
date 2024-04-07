import { createSlice } from "@reduxjs/toolkit";
import userProfile from "../action/userProfile.action";

interface NavBarProps {
  navIsOpen: boolean;
  isLoading: boolean;
  user: {
    first_name: string;
    last_name: string;
    email: string;
  };
}

const initialState: NavBarProps = {
  navIsOpen: false,
  isLoading: false,
  user: {
    first_name: "",
    last_name: "",
    email: "",
  },
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    openNav: (state) => {
      state.navIsOpen = true;
    },
    closeNav: (state) => {
      state.navIsOpen = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(userProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userProfile.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(userProfile.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default navSlice.reducer;

export const { openNav, closeNav } = navSlice.actions;
