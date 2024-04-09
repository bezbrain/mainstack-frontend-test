import { createSlice } from "@reduxjs/toolkit";

interface FilteringProps {
  dateClickFilter: {
    today: boolean;
    lastSevenDays: boolean;
    thisMonth: boolean;
    lastThreeDays: boolean;
  };
}

const initialState: FilteringProps = {
  dateClickFilter: {
    today: false,
    lastSevenDays: false,
    thisMonth: false,
    lastThreeDays: false,
  },
};

const filteringSlice = createSlice({
  name: "filtering",
  initialState,
  reducers: {
    activeToday: (state) => {
      state.dateClickFilter.today = true;
    },
  },
});

export default filteringSlice.reducer;

export const { activeToday } = filteringSlice.actions;
