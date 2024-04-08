import { createSlice } from "@reduxjs/toolkit";

interface FilterProps {
  isFilter: boolean;
  isTransactionType: boolean;
  filter: {
    store: boolean;
    tipped: boolean;
    withdrawals: boolean;
    chargebacks: boolean;
    cashbacks: boolean;
    refer: boolean;
  };
}

const initialState: FilterProps = {
  isFilter: false,
  isTransactionType: false,
  filter: {
    store: true,
    tipped: true,
    withdrawals: true,
    chargebacks: true,
    cashbacks: true,
    refer: true,
  },
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
    checkedInput: (state, { payload }) => {
      state.filter = {
        ...state.filter,
        ...payload,
      };
    },
  },
});

export default filterSlice.reducer;

export const {
  openFilter,
  closeFilter,
  toggleTransactionType,
  closeTransactionType,
  checkedInput,
} = filterSlice.actions;
