import { createSlice } from "@reduxjs/toolkit";

interface NavBarProps {
  navIsOpen: boolean;
}

const initialState: NavBarProps = {
  navIsOpen: false,
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
});

export default navSlice.reducer;

export const { openNav, closeNav } = navSlice.actions;
