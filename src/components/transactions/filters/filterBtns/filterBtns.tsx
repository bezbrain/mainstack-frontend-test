import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../general/button";
import { AppDispatch, RootState } from "../../../../store";
import {
  closeModal,
  initiateFilters,
} from "../../../../management/features/transactionSlice";
import allTransactions from "../../../../management/action/transactions.action";
import {
  clearAllFilter,
  closeFilter,
  closeTransactionStatus,
  closeTransactionType,
} from "../../../../management/features/filtersSlice";
import { clearFilter } from "../../../../management/features/filteringSlice";

const FilterBtns = () => {
  const { dateClickValues, dateRangeValue } = useSelector(
    (store: RootState) => store.filteringStore
  );

  const { typeSelected, statusSelected } = useSelector(
    (store: RootState) => store.filterStore
  );

  const { today, lastSevenDays, thisMonth, lastThreeMonths } = dateClickValues;

  const { startDate, endDate } = dateRangeValue;

  const dispatch = useDispatch<AppDispatch>();

  //   APPLY THE SELECTED FILTERS WHEN THE APPLY BTN IS CLICKED
  const applyFiltersClick = () => {
    dispatch(closeFilter());
    dispatch(closeTransactionType());
    dispatch(closeTransactionStatus());
    dispatch(closeModal());

    if (
      today ||
      lastSevenDays ||
      thisMonth ||
      lastThreeMonths ||
      startDate ||
      endDate
    ) {
      dispatch(
        initiateFilters({
          today,
          lastSevenDays,
          thisMonth,
          lastThreeMonths,
          startDate,
          endDate,
          typeSelected,
          statusSelected,
        })
      );
    } else {
      dispatch(allTransactions());
    }
  };

  const clearFilterClick = () => {
    dispatch(closeFilter());
    dispatch(closeTransactionType());
    dispatch(closeTransactionStatus());

    dispatch(allTransactions());
    dispatch(clearFilter());
    dispatch(clearAllFilter());
    dispatch(closeModal());
  };

  return (
    <div className="flex w-fit mx-auto gap-6">
      <Button
        btnContent="Clear"
        btnStyle="surfaceDuo:w-[198px] flex justify-center border-[1px] bg-inherit transition-all hover:duration-500 hover:bg-[#141417] hover:text-[#f5f5f7]"
        handleClick={clearFilterClick}
      />
      <Button
        btnContent="Apply"
        btnStyle="surfaceDuo:w-[198px] flex justify-center border-[1px] bg-[#141417] text-[#f5f5f7] hover:bg-inherit hover:text-[#141417] transition-all hover:duration-500"
        handleClick={applyFiltersClick}
      />
    </div>
  );
};

export default FilterBtns;
