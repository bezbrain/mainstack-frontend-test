import { IoCloseSharp } from "react-icons/io5";
import { DateRange, FilterBtns, FilterHeader, TransType } from ".";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { closeFilter } from "../../../management/features/filtersSlice";
import { TransStatus } from "..";
import { closeModal } from "../../../management/features/transactionSlice";

const Filter = () => {
  const { isFilter } = useSelector((store: RootState) => store.filterStore);

  const filterContainerFilter = `fixed top-1 bottom-4 z-20 border-2 z-50 ${
    isFilter
      ? "w-[456px] right-1 transition-all duration-1000"
      : "-right-[600px] transition-all duration-1000"
  } min-h-[100vh] bg-white rounded-2xl p-4 flex flex-col justify-between gap-20 pb-6 overflow-y-auto overflow-x-hidden`;

  const dispatch = useDispatch<AppDispatch>();

  const closeFilterContainer = () => {
    dispatch(closeFilter());
    dispatch(closeModal());
  };

  return (
    <div className={filterContainerFilter} data-testid="filter">
      <div>
        <header className="flex items-center justify-between text-[24px]">
          <h1 className="text-[#000] font-extrabold">Filter</h1>
          <IoCloseSharp
            className="cursor-pointer text-3xl"
            onClick={closeFilterContainer}
            data-testid="close-button"
          />
        </header>
        <FilterHeader />
        <DateRange />
        <TransType />
        <TransStatus />
      </div>

      <FilterBtns />
    </div>
  );
};

export default Filter;
