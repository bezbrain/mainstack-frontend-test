import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../general/button";
import { AppDispatch, RootState } from "../../../../store";
import {
  allValues,
  toggleActiveLastSeven,
  toggleActiveLastThreeMonths,
  toggleActiveThisMonth,
  toggleActiveToday,
} from "../../../../management/features/filteringSlice";
import { numberFormat } from "../../../../utils/convertDateFormat";

const btnFilterStyle = "text-[14px] px-4 py-2 border-[1px]";

const FilterHeader = () => {
  const { dateClickFilter } = useSelector(
    (store: RootState) => store.filteringStore
  );

  const { today, lastSevenDays, thisMonth, lastThreeMonths } = dateClickFilter;

  const dispatch = useDispatch<AppDispatch>();

  // HANDLE CLICKING THE TODAY FILTER BTN
  const handleTodayClick = () => {
    dispatch(toggleActiveToday());

    const date = new Date();
    // Current Date
    const dateValue = numberFormat(date);

    dispatch(allValues(dateValue));
  };

  // HANDLE CLICKING THE "LAST SEVEN DAYS" FILTER BTN
  const handleLastSevenClick = () => {
    dispatch(toggleActiveLastSeven());

    const date = new Date();
    date.setDate(date.getDate() - 7);
    dispatch(allValues(date));
  };

  // HANDLE CLICKING THE "THIS MONTH" FILTER BTN
  const handleThisMonthClick = () => {
    dispatch(toggleActiveThisMonth());

    const date = new Date();
    const currentMonth = date.getMonth() + 1; // Get the month
    dispatch(allValues(currentMonth));
  };

  // HANDLE CLICKING THE "LAST THREE MONTHS" FILTER BTN
  const handleLastThreeMonthsClick = () => {
    dispatch(toggleActiveLastThreeMonths());

    const date = new Date();
    const currentMonth = date.getMonth() + 1; // Get the month
    dispatch(allValues(currentMonth));
    // Still using the logic for filter by "this month"
    // Still using the logic for filter by "this month"
    // Still using the logic for filter by "this month"
  };

  return (
    <header className="flex justify-between my-6">
      <Button
        btnContent="Today"
        btnStyle={`${btnFilterStyle} ${
          today
            ? "hover:bg-[#141417] bg-[#141417] text-[#f5f5f7]"
            : "hover:bg-[#edf0f5] text-[#141417] bg-inherit"
        }`}
        handleClick={handleTodayClick}
      />
      <Button
        btnContent="Last 7 days"
        btnStyle={`${btnFilterStyle} ${
          lastSevenDays
            ? "bg-[#141417] hover:bg-[#141417] text-[#f5f5f7]"
            : "hover:bg-[#edf0f5] text-[#141417] bg-inherit"
        }`}
        handleClick={handleLastSevenClick}
      />
      <Button
        btnContent="This month"
        btnStyle={`${btnFilterStyle} ${
          thisMonth
            ? "bg-[#141417] hover:bg-[#141417] text-[#f5f5f7]"
            : "hover:bg-[#edf0f5] text-[#141417] bg-inherit"
        }`}
        handleClick={handleThisMonthClick}
      />
      <Button
        btnContent="Last 3 months"
        btnStyle={`${btnFilterStyle} ${
          lastThreeMonths
            ? "bg-[#141417] hover:bg-[#141417] text-[#f5f5f7]"
            : "hover:bg-[#edf0f5] text-[#141417] bg-inherit"
        }`}
        handleClick={handleLastThreeMonthsClick}
      />
    </header>
  );
};

export default FilterHeader;
