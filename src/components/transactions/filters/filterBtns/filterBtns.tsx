import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../general/button";
import { AppDispatch, RootState } from "../../../../store";
import { initiateFilters } from "../../../../management/features/transactionSlice";
import allTransactions from "../../../../management/action/transactions.action";
import {
  closeFilter,
  closeTransactionStatus,
  closeTransactionType,
} from "../../../../management/features/filtersSlice";

const FilterBtns = () => {
  const { dateClickValues } = useSelector(
    (store: RootState) => store.filteringStore
  );

  const { today, lastSevenDays, thisMonth, lastThreeMonths } = dateClickValues;

  const dispatch = useDispatch<AppDispatch>();

  //   APPLY THE SELECTED FILTERS WHEN THE APPLY BTN IS CLICKED
  const applyFiltersClick = () => {
    dispatch(closeFilter());
    dispatch(closeTransactionType());
    dispatch(closeTransactionStatus());

    if (today || lastSevenDays || thisMonth) {
      dispatch(initiateFilters({ today, lastSevenDays, thisMonth })); // Initialize the function to get today's transactions only if a user selects "today" in the filter
    } else {
      dispatch(allTransactions());
    }
  };

  return (
    <div className="flex w-fit mx-auto gap-6">
      <Button
        btnContent="Clear"
        btnStyle="w-[198px] flex justify-center border-[1px] bg-inherit transition-all hover:duration-500 hover:bg-[#141417] hover:text-[#f5f5f7]"
      />
      <Button
        btnContent="Apply"
        btnStyle="w-[198px] flex justify-center border-[1px] bg-[#141417] text-[#f5f5f7] hover:bg-inherit hover:text-[#141417] transition-all hover:duration-500"
        handleClick={applyFiltersClick}
      />
    </div>
  );
};

export default FilterBtns;