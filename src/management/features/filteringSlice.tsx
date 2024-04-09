import { createSlice } from "@reduxjs/toolkit";

interface FilteringProps {
  dateClickFilter: {
    today: boolean;
    lastSevenDays: boolean;
    thisMonth: boolean;
    lastThreeDays: boolean;
  };
  dateClickValues: {
    today: string;
    lastSevenDays: string;
    thisMonth: string;
    lastThreeDays: string;
  };
}

const initialState: FilteringProps = {
  dateClickFilter: {
    today: false,
    lastSevenDays: false,
    thisMonth: false,
    lastThreeDays: false,
  },
  dateClickValues: {
    today: "",
    lastSevenDays: "",
    thisMonth: "",
    lastThreeDays: "",
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
        lastThreeDays: false,
      };
    },
    toggleActiveLastSeven: (state) => {
      state.dateClickFilter = {
        today: false,
        lastSevenDays: !state.dateClickFilter.lastSevenDays,
        thisMonth: false,
        lastThreeDays: false,
      };
    },

    allValues: (state, { payload }) => {
      if (state.dateClickFilter.today) {
        state.dateClickValues.today = payload;
        state.dateClickValues.lastSevenDays = "";
        return;
      }
      if (state.dateClickFilter.lastSevenDays) {
        state.dateClickValues.lastSevenDays = payload;
        state.dateClickValues.today = "";
        return;
      }
      state.dateClickValues.today = "";
      state.dateClickValues.lastSevenDays = "";
      console.log(payload);
    },
  },
});

export default filteringSlice.reducer;

export const { toggleActiveToday, toggleActiveLastSeven, allValues } =
  filteringSlice.actions;
