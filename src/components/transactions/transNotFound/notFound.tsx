import { PiNotebookBold } from "react-icons/pi";
import { Button } from "../../general/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import {
  clearAllFilter,
  closeFilter,
  closeTransactionStatus,
  closeTransactionType,
} from "../../../management/features/filtersSlice";
import allTransactions from "../../../management/action/transactions.action";
import { clearFilter } from "../../../management/features/filteringSlice";

const NotFound = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseFilter = () => {
    dispatch(closeFilter());
    dispatch(closeTransactionType());
    dispatch(closeTransactionStatus());
  };

  const handleClearFilter = () => {
    dispatch(allTransactions());
    dispatch(clearFilter());
    dispatch(clearAllFilter());
  };

  return (
    <div
      className="my-[10vh] flex justify-center items-center"
      onClick={handleCloseFilter}
    >
      <div className="max-w-[370px]">
        <div className="bg-[#edf0f5] w-[48px] h-[48px] flex justify-center items-center rounded-2xl mb-4">
          <PiNotebookBold className="text-2xl" />
        </div>
        <h2 className="text-[28px] leading-[40px] font-extrabold text-[#000]">
          No matching transaction found for the selected filter
        </h2>
        <p className="my-4">
          Change your filters to see more results, or add a new product.
        </p>
        <Button
          btnContent="Clear Filter"
          btnStyle="py-2 hover:bg-[#141417] hover:text-[#f5f5f7] transition-all hover:duration-500"
          handleClick={handleClearFilter}
        />
      </div>
    </div>
  );
};

export default NotFound;
