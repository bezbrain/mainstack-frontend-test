import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../general/button";
import { AppDispatch, RootState } from "../../../../store";
import { activeToday } from "../../../../management/features/filteringSlice";

const btnFilterStyle =
  "text-[14px] px-4 py-2 hover:bg-[#edf0f5] bg-inherit border-[1px]";

const FilterHeader = () => {
  const { dateClickFilter } = useSelector(
    (store: RootState) => store.filteringStore
  );

  const { today, lastSevenDays, thisMonth, lastThreeDays } = dateClickFilter;

  const dispatch = useDispatch<AppDispatch>();

  const handleTodayClick = () => {
    dispatch(activeToday());
    const data = new Date();
    console.log(data);
  };

  return (
    <header className="flex justify-between my-6">
      <Button
        btnContent="Today"
        btnStyle={`${btnFilterStyle} ${
          today ? "bg-[#141417] text-[#f5f5f7]" : ""
        }`}
        handleClick={handleTodayClick}
      />
      <Button btnContent="Last 7 days" btnStyle={`${btnFilterStyle}`} />
      <Button btnContent="This month" btnStyle={`${btnFilterStyle}`} />
      <Button btnContent="Last 3 months" btnStyle={`${btnFilterStyle}`} />
    </header>
  );
};

export default FilterHeader;
