import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { StatusDropdown } from "..";
import {
  closeTransactionType,
  selectedStatus,
  toggleTransactionStatus,
} from "../../../../management/features/filtersSlice";
import { useEffect } from "react";
import { transactionStatusData } from "../../../../utils/data";

const TransStatus = () => {
  const { isTransactionStatus, filterByStatus, statusSelected } = useSelector(
    (store: RootState) => store.filterStore
  );

  const { successful, pending, failed } = filterByStatus;

  const dispatch = useDispatch<AppDispatch>();

  const inputStyle = `h-[48px] w-full rounded-xl pl-4 pr-8 ${
    !isTransactionStatus
      ? "bg-[#edf0f5] border-none"
      : "border-[3px] border-[#141417] bg-inherit"
  } focus:cursor-pointer cursor-pointer focus:outline-none`;

  //   FUNCTION TO TOGGLE THE TRANSACTION STATUS
  const handleTransStatusClick = () => {
    dispatch(toggleTransactionStatus());
    dispatch(closeTransactionType());
  };

  //   USE THIS FUNCTION TO HANDLE CHECKED DATA IN THE TRANSACTION STATUS INPUT FIELD
  const transactionValues = () => {
    const newStatus = transactionStatusData.map((each) => {
      return each.type;
    });

    const updateTransStatusArr: string[] = [];

    if (successful) {
      if (!updateTransStatusArr.includes("Successful")) {
        updateTransStatusArr.push(newStatus[0]);
      }
    }
    if (pending) {
      if (!updateTransStatusArr.includes("Pending")) {
        updateTransStatusArr.push(newStatus[1]);
      }
    }
    if (failed) {
      if (!updateTransStatusArr.includes("Failed")) {
        updateTransStatusArr.push(newStatus[2]);
      }
    }

    dispatch(selectedStatus(updateTransStatusArr));
    // setTransStatusArr(updateTransStatusArr);
  };

  useEffect(() => {
    transactionValues();
  }, [filterByStatus]);

  return (
    <div className="mt-6 text-[#141417]">
      <h2 className="font-extrabold mb-1">Transaction Status</h2>

      <div className="relative" onClick={handleTransStatusClick}>
        <input
          type="text"
          className={inputStyle}
          value={statusSelected}
          readOnly
        />
        {!isTransactionStatus && (
          <FaAngleDown className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50" />
        )}
        {isTransactionStatus && (
          <FaAngleUp className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50" />
        )}
      </div>

      {isTransactionStatus && <StatusDropdown />}
    </div>
  );
};

export default TransStatus;
