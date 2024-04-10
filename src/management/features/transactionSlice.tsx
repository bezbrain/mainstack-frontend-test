import { createSlice } from "@reduxjs/toolkit";
import allTransactions from "../action/transactions.action";
import { serverMessage } from "../../utils/serverMessage";
import { toast } from "react-toastify";
import { completeNumberFormat } from "../../utils/convertDateFormat";
import { transactionTypeData } from "../../utils/data";
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

      // Filter based on start and end date
      if (startDate && endDate) {
        const filterBy = state.originalTransactions.filter((each) => {
          const getArrDate = completeNumberFormat(each.date);
          return getArrDate >= startDate && getArrDate <= endDate;
        });
        console.log(filterBy);
        state.transactions = filterBy;
      }

      // Transaction Type filter
      const filterType = state.originalTransactions.filter((each) => {
        return typeSelected.includes(toCapitalLetter(each.type));
      });
      // console.log(filterType);
      state.transactions = filterType;

      // Transaction Type filter
      const filterStatus = state.originalTransactions.filter((each) => {
        return statusSelected.includes(toCapitalLetter(each.status));
      });
      console.log(filterStatus);
      state.transactions = filterStatus;

      // Filter based on today's date
      if (today) {
        const todayArr = state.originalTransactions.filter(
          (each) => each.date == today
        );
        state.transactions = todayArr;
        return;
      }
      // Filter based on last seven days
      if (lastSevenDays) {
        const lastSevenDaysArr = state.originalTransactions.filter(
          (each) => completeNumberFormat(each.date) >= lastSevenDays
        );
        state.transactions = lastSevenDaysArr;
        return;
      }
      // Filter based on this month
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
