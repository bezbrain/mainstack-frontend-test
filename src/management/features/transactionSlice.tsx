import { createSlice } from "@reduxjs/toolkit";
import allTransactions from "../action/transactions.action";
import { serverMessage } from "../../utils/serverMessage";
import { toast } from "react-toastify";
import { completeNumberFormat } from "../../utils/convertDateFormat";
import { toCapitalLetter } from "../../utils/toCapitalLetter";

export interface TransactionProps {
  istransLoading: boolean;
  originalTransactions: {
    amount: 0;
    metadata: {
      name: "";
      type: "";
      email: "";
      quantity: 0;
      country: "";
      product_name: "";
    };
    payment_reference: "";
    status: "";
    type: "";
    date: "";
  }[];
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
  originalTransactions: [
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
      const {
        today,
        lastSevenDays,
        thisMonth,
        startDate,
        endDate,
        typeSelected,
        statusSelected,
      } = payload;

      let filteredTransaction = state.originalTransactions.slice();

      // Filter based on start and end date
      filteredTransaction = filteredTransaction.filter((each) => {
        const getArrDate = completeNumberFormat(each.date);
        return getArrDate >= startDate && getArrDate <= endDate;
      });

      // Transaction Type filter
      filteredTransaction = filteredTransaction.filter((each) => {
        return typeSelected.includes(toCapitalLetter(each.type));
      });

      // Transaction Status filter
      filteredTransaction = filteredTransaction.filter((each) => {
        return statusSelected.includes(toCapitalLetter(each.status));
      });

      // Filter based on today's date
      if (today) {
        filteredTransaction = filteredTransaction.filter(
          (each) => each.date == today
        );
      }
      // Filter based on last seven days
      if (lastSevenDays) {
        filteredTransaction = filteredTransaction.filter(
          (each) => completeNumberFormat(each.date) >= lastSevenDays
        );
      }
      // Filter based on this month
      if (thisMonth) {
        filteredTransaction = filteredTransaction.filter((each) => {
          const getMonth = new Date(each.date).getMonth() + 1;
          return getMonth == thisMonth;
        });
      }

      state.transactions = filteredTransaction;
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
        state.originalTransactions = payload;
      })
      .addCase(allTransactions.rejected, (state, { payload }) => {
        state.istransLoading = true;
        serverMessage(payload, toast);
      });
  },
});

export default transactionSlice.reducer;

export const { initiateFilters } = transactionSlice.actions;
