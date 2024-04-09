import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../general/button";
import { AppDispatch, RootState } from "../../../../store";
import {
  allValues,
  toggleActiveLastSeven,
  toggleActiveToday,
} from "../../../../management/features/filteringSlice";
import { numberFormat } from "../../../../utils/convertDateFormat";

const btnFilterStyle =
  "text-[14px] px-4 py-2 hover:bg-[#edf0f5] bg-inherit border-[1px]";

const FilterHeader = () => {
  const { dateClickFilter } = useSelector(
    (store: RootState) => store.filteringStore
  );

  const { today, lastSevenDays, thisMonth, lastThreeDays } = dateClickFilter;

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

    // console.log(date);

    date.setDate(date.getDate() - 7);

    // console.log(date);

    dispatch(allValues(date));
  };

  return (
    <header className="flex justify-between my-6">
      <Button
        btnContent="Today"
        btnStyle={`${btnFilterStyle} ${
          today ? "bg-[#141417] hover:bg-[#141417] text-[#f5f5f7]" : ""
        }`}
        handleClick={handleTodayClick}
      />
      <Button
        btnContent="Last 7 days"
        btnStyle={`${btnFilterStyle} ${
          lastSevenDays ? "bg-[#141417] hover:bg-[#141417] text-[#f5f5f7]" : ""
        }`}
        handleClick={handleLastSevenClick}
      />
      <Button btnContent="This month" btnStyle={`${btnFilterStyle}`} />
      <Button btnContent="Last 3 months" btnStyle={`${btnFilterStyle}`} />
    </header>
  );
};

export default FilterHeader;
