import { createSlice } from "@reduxjs/toolkit";
import allTransactions from "../action/transactions.action";
import { serverMessage } from "../../utils/serverMessage";
import { toast } from "react-toastify";
import { completeNumberFormat } from "../../utils/convertDateFormat";

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
      const { today, lastSevenDays, thisMonth, startDate, endDate } = payload;
      console.log(payload);
      console.log(state.transactions);
      console.log(state.originalTransactions);

      const filterBy = state.transactions.filter((each) => {
        const getArrDate = completeNumberFormat(each.date);
        // if (startDate && endDate) {
        //   console.log(getArrDate);
        //   console.log(startDate);
        //   console.log(endDate);

        //   return getArrDate >= startDate && getArrDate <= endDate;
        // }
      });
      console.log(filterBy);
      state.transactions = filterBy;

      if (today) {
        const todayArr = state.originalTransactions.filter(
          (each) => each.date == today
        );
        state.transactions = todayArr;
        return;
      }
      if (lastSevenDays) {
        const lastSevenDaysArr = state.originalTransactions.filter(
          (each) => completeNumberFormat(each.date) >= lastSevenDays
        );
        state.transactions = lastSevenDaysArr;
        return;
      }
      if (thisMonth) {
        const thisMonthArr = state.originalTransactions.filter((each) => {
          const getMonth = new Date(each.date).getMonth() + 1;
          return getMonth == thisMonth;
        });
        state.transactions = thisMonthArr;
        return;
      }
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
