import { createSlice } from "@reduxjs/toolkit";

type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

interface FilterProps {
  isFilter: boolean;
  isTransactionType: boolean;
  isTransactionStatus: boolean;
  date: {
    startValue: Value;
    endValue: Value;
  };
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
  date: {
    startValue: new Date(),
    endValue: new Date(),
  },
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

    // Date Range
    startDateValue: (state, { payload }) => {
      state.date.startValue = payload;
    },
    endDateValue: (state, { payload }) => {
      state.date.endValue = payload;
    },

    // Transaction Type
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
    clearAllFilter: (state) => {
      // state = initialState;
      Object.assign(state, {
        ...initialState,
        typeSelected: state.typeSelected,
        statusSelected: state.statusSelected,
      });
      // console.log(state);
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
  startDateValue,
  endDateValue,
  selectedType,
  selectedStatus,
  toggleTransactionStatus,
  checkedInputForStatus,
  closeTransactionStatus,
  clearAllFilter,
} = filterSlice.actions;
