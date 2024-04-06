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
      //
    },
  },
});

export default navSlice.reducer;
