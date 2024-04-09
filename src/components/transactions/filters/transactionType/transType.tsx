import { TypeDropdown } from "..";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { toggleTransactionType } from "../../../../management/features/filtersSlice";
import { transactionTypeData } from "../../../../utils/data";
import { useEffect, useState } from "react";

const TransType = () => {
  const { isTransactionType, filter } = useSelector(
    (store: RootState) => store.filterStore
  );

  const [transArr, setTransArr] = useState<string[]>([]);

  //   const {type} = transactionTypeData

  const { store, tipped, withdrawals, chargebacks, cashbacks, refer } = filter;

  const dispatch = useDispatch<AppDispatch>();

  const inputStyle = `h-[48px] w-full rounded-xl pl-4 pr-8 ${
    !isTransactionType
      ? "bg-[#edf0f5] border-none"
      : "border-[3px] border-[#141417] bg-inherit"
  } focus:cursor-pointer cursor-pointer focus:outline-none`;

  //   HANDLE CHANGE FOR THE TRANSACTION TYPE
  const handleTransTypeClick = () => {
    dispatch(toggleTransactionType());
  };

  //   USE THIS FUNCTION TO HANDLE CHECKED DATA IN THE TRANSACTION TYPE INPUT FIELD
  const transactionValues = () => {
    const newTrans = transactionTypeData.map((each) => {
      return each.type;
    });

    const updateTransArr: string[] = [];

    if (store) {
      if (!updateTransArr.includes("Store Transactions")) {
        updateTransArr.push(newTrans[0]);
      }
    }
    if (tipped) {
      if (!updateTransArr.includes("Get Tipped")) {
        updateTransArr.push(newTrans[1]);
      }
    }
    if (withdrawals) {
      if (!updateTransArr.includes("Withdrawals")) {
        updateTransArr.push(newTrans[2]);
      }
    }
    if (chargebacks) {
      if (!updateTransArr.includes("Chargebacks")) {
        updateTransArr.push(newTrans[3]);
      }
    }
    if (cashbacks) {
      if (!updateTransArr.includes("Cashbacks")) {
        updateTransArr.push(newTrans[4]);
      }
    }
    if (refer) {
      if (!updateTransArr.includes("Refer & Earn")) {
        updateTransArr.push(newTrans[5]);
      }
    }

    setTransArr(updateTransArr);
  };

  useEffect(() => {
    transactionValues();
  }, [filter]);

  return (
    <div className="mt-6 text-[#141417]">
      <h2 className="font-extrabold mb-1">Transaction Type</h2>

      <div className="relative" onClick={handleTransTypeClick}>
        <input
          type="text"
          className={inputStyle}
          value={`${transArr.join(", ")}`}
          readOnly
        />
        {!isTransactionType && (
          <FaAngleDown className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50" />
        )}
        {isTransactionType && (
          <FaAngleUp className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50" />
        )}
      </div>

      {isTransactionType && <TypeDropdown />}
    </div>
  );
};

export default TransType;
