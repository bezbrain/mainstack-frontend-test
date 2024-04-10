import { createSlice } from "@reduxjs/toolkit";

interface FilterProps {
  isFilter: boolean;
  isTransactionType: boolean;
  isTransactionStatus: boolean;
  filter: {
    store: boolean;
    tipped: boolean;
    withdrawals: boolean;
    chargebacks: boolean;
    cashbacks: boolean;
    refer: boolean;
  };
  filterByStatus: {
    successful: boolean;
    pending: boolean;
    failed: boolean;
  };
  typeSelected: string;
  statusSelected: string;
}

const initialState: FilterProps = {
  isFilter: false,
  isTransactionType: false,
  isTransactionStatus: false,
  filter: {
    store: true,
    tipped: true,
    withdrawals: true,
    chargebacks: true,
    cashbacks: true,
    refer: true,
  },
  filterByStatus: {
    successful: true,
    pending: true,
    failed: true,
  },
  typeSelected: "",
  statusSelected: "",
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
    selectedType: (state, { payload }) => {
      state.typeSelected = payload?.join(", ");
    },
    selectedStatus: (state, { payload }) => {
      state.statusSelected = payload?.join(", ");
    },

    // Transaction Status
    toggleTransactionStatus: (state) => {
      state.isTransactionStatus = !state.isTransactionStatus;
    },
    checkedInputForStatus: (state, { payload }) => {
      state.filterByStatus = {
        ...state.filterByStatus,
        ...payload,
      };
    },
    closeTransactionStatus: (state) => {
      state.isTransactionStatus = false;
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
  selectedType,
  selectedStatus,
  toggleTransactionStatus,
  checkedInputForStatus,
  closeTransactionStatus,
} = filterSlice.actions;
