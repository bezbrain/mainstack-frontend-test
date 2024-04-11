import { createSlice } from "@reduxjs/toolkit";
import userProfile from "../action/userProfile.action";
import { serverMessage } from "../../utils/serverMessage";
import { toast } from "react-toastify";

interface NavBarProps {
  navIsOpen: boolean;
  isLoading: boolean;
  toggleDropdown: boolean;
  user: {
    first_name: string;
    last_name: string;
    email: string;
  };
}

const initialState: NavBarProps = {
  navIsOpen: false,
  isLoading: false,
  toggleDropdown: false,
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
    toggleProfileDropdown: (state) => {
      state.toggleDropdown = !state.toggleDropdown;
    },
    closeProfileDropdown: (state) => {
      state.toggleDropdown = false;
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
      .addCase(userProfile.rejected, (state, { payload }: any) => {
        serverMessage(payload, toast);
        state.isLoading = true;
      });
  },
});

export default navSlice.reducer;

export const {
  openNav,
  closeNav,
  toggleProfileDropdown,
  closeProfileDropdown,
} = navSlice.actions;
