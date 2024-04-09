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
      state.dateClickFilter.today = !state.dateClickFilter.today;
    },
    todayValue: (state, { payload }) => {
      if (state.dateClickFilter.today) {
        state.dateClickValues.today = payload;
      } else {
        state.dateClickValues.today = "";
      }
      //   console.log(state.dateClickValues.today);
    },
  },
});

export default filteringSlice.reducer;

export const { toggleActiveToday, todayValue } = filteringSlice.actions;
