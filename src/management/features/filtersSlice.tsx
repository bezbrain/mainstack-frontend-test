import { createSlice } from "@reduxjs/toolkit";

interface FilterProps {
  isFilter: boolean;
}

const initialState: FilterProps = {
  isFilter: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    openFilter: (state) => {
      state.isFilter = true;
    },
    closeFilter: (state) => {
      state.isFilter = false;
    },
  },
});

export default filterSlice.reducer;

export const { openFilter, closeFilter } = filterSlice.actions;
