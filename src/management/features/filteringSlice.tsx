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
    toggleActiveLastThreeMonths: (state) => {
      state.dateClickFilter = {
        today: false,
        lastSevenDays: false,
        thisMonth: false,
        lastThreeMonths: !state.dateClickFilter.lastThreeMonths,
      };
    },

    allValues: (state, { payload }) => {
      if (state.dateClickFilter.today) {
        state.dateClickValues.today = payload;
        state.dateClickValues.lastSevenDays = "";
        state.dateClickValues.thisMonth = "";
        state.dateClickValues.lastThreeMonths = "";
        return;
      }
      if (state.dateClickFilter.lastSevenDays) {
        state.dateClickValues.lastSevenDays = payload;
        state.dateClickValues.today = "";
        state.dateClickValues.thisMonth = "";
        state.dateClickValues.lastThreeMonths = "";
        return;
      }
      if (state.dateClickFilter.thisMonth) {
        state.dateClickValues.thisMonth = payload;
        state.dateClickValues.today = "";
        state.dateClickValues.lastSevenDays = "";
        state.dateClickValues.lastThreeMonths = "";
        return;
      }
      if (state.dateClickFilter.lastThreeMonths) {
        state.dateClickValues.lastThreeMonths = payload;
        state.dateClickValues.today = "";
        state.dateClickValues.lastSevenDays = "";
        state.dateClickValues.thisMonth = "";
        return;
      }
      state.dateClickValues.today = "";
      state.dateClickValues.lastSevenDays = "";
      state.dateClickValues.thisMonth = "";
      state.dateClickValues.lastThreeMonths = "";
      //   console.log(payload);
    },
  },
});

export default filteringSlice.reducer;

export const {
  toggleActiveToday,
  toggleActiveLastSeven,
  toggleActiveThisMonth,
  toggleActiveLastThreeMonths,
  allValues,
} = filteringSlice.actions;
