import { createSlice } from "@reduxjs/toolkit";

interface FilteringProps {
  dateClickFilter: {
    today: boolean;
    lastSevenDays: boolean;
    thisMonth: boolean;
    lastThreeMonths: boolean;
  };
  dateClickValues: {
    today: string;
    lastSevenDays: string;
    thisMonth: string;
    lastThreeMonths: string;
  };
}

const initialState: FilteringProps = {
  dateClickFilter: {
    today: false,
    lastSevenDays: false,
    thisMonth: false,
    lastThreeMonths: false,
  },
  dateClickValues: {
    today: "",
    lastSevenDays: "",
    thisMonth: "",
    lastThreeMonths: "",
  },
};

const filteringSlice = createSlice({
  name: "filtering",
  initialState,
  reducers: {
    toggleActiveToday: (state) => {
      state.dateClickFilter = {
        today: !state.dateClickFilter.today,
        lastSevenDays: false,
        thisMonth: false,
        lastThreeMonths: false,
      };
    },
    toggleActiveLastSeven: (state) => {
      state.dateClickFilter = {
        today: false,
        lastSevenDays: !state.dateClickFilter.lastSevenDays,
        thisMonth: false,
        lastThreeMonths: false,
      };
    },
    toggleActiveThisMonth: (state) => {
      state.dateClickFilter = {
        today: false,
        lastSevenDays: false,
        thisMonth: !state.dateClickFilter.thisMonth,
        lastThreeMonths: false,
      };
    },

    allValues: (state, { payload }) => {
      if (state.dateClickFilter.today) {
        state.dateClickValues.today = payload;
        state.dateClickValues.lastSevenDays = "";
        state.dateClickValues.thisMonth = "";
        return;
      }
      if (state.dateClickFilter.lastSevenDays) {
        state.dateClickValues.lastSevenDays = payload;
        state.dateClickValues.today = "";
        state.dateClickValues.thisMonth = "";
        return;
      }
      if (state.dateClickFilter.thisMonth) {
        state.dateClickValues.thisMonth = payload;
        state.dateClickValues.today = "";
        state.dateClickValues.lastSevenDays = "";
        return;
      }
      state.dateClickValues.today = "";
      state.dateClickValues.lastSevenDays = "";
      state.dateClickValues.thisMonth = "";
      //   console.log(payload);
    },
  },
});

export default filteringSlice.reducer;

export const {
  toggleActiveToday,
  toggleActiveLastSeven,
  toggleActiveThisMonth,
  allValues,
} = filteringSlice.actions;
