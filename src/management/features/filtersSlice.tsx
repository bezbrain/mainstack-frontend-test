import { createSlice } from "@reduxjs/toolkit";

interface FilterProps {
  isFilter: boolean;
  isTransactionType: boolean;
}

const initialState: FilterProps = {
  isFilter: false,
  isTransactionType: false,
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
    toggleTransactionType: (state) => {
      state.isTransactionType = !state.isTransactionType;
    },
    closeTransactionType: (state) => {
      state.isTransactionType = false;
    },
  },
});

export default filterSlice.reducer;

export const {
  openFilter,
  closeFilter,
  toggleTransactionType,
  closeTransactionType,
} = filterSlice.actions;
