import { createSlice } from "@reduxjs/toolkit";
import allTransactions from "../action/transactions.action";
import { serverMessage } from "../../utils/serverMessage";
import { toast } from "react-toastify";
import { completeNumberFormat } from "../../utils/convertDateFormat";

export interface TransactionProps {
  istransLoading: boolean;
  transactions: {
    amount: number;
    metadata?: {
      name?: string;
      type?: string;
      email?: string;
      quantity?: number;
      country?: string;
      product_name?: string;
    };
    payment_reference: string;
    status: string;
    type: string;
    date: string;
  }[];
}

const initialState: TransactionProps = {
  istransLoading: false,
  transactions: [
    {
      amount: 0,
      metadata: {
        name: "",
        type: "",
        email: "",
        quantity: 0,
        country: "",
        product_name: "",
      },
      payment_reference: "",
      status: "",
      type: "",
      date: "",
    },
  ],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    initiateFilters: (state, { payload }) => {
      // console.log(payload);
      const { today, lastSevenDays } = payload;
      const filterByToday = state.transactions.filter((each) => {
        return (
          each.date === today ||
          completeNumberFormat(each.date) >= lastSevenDays
        );
      });
      // console.log(filterByToday);
      state.transactions = filterByToday;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(allTransactions.pending, (state) => {
        state.istransLoading = true;
      })
      .addCase(allTransactions.fulfilled, (state, { payload }) => {
        state.istransLoading = false;
        state.transactions = payload;
      })
      .addCase(allTransactions.rejected, (state, { payload }) => {
        state.istransLoading = true;
        serverMessage(payload, toast);
      });
  },
});

export default transactionSlice.reducer;

export const { initiateFilters } = transactionSlice.actions;
