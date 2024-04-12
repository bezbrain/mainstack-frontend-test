import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { Button } from "../../general/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { openFilter } from "../../../management/features/filtersSlice";
import { toast } from "react-toastify";
import { showModal } from "../../../management/features/transactionSlice";
import { useEffect, useState } from "react";
import { completeNumberFormat } from "../../../utils/convertDateFormat";

const TransHeader = () => {
  const { istransLoading, transactions } = useSelector(
    (store: RootState) => store.transactionStore
  );

  const [lastTransaction, setLastTransaction] = useState<number>(0);

  const dispatch = useDispatch<AppDispatch>();

  const handleShowFilter = () => {
    if (istransLoading) {
      toast.error(
        "Please let all transactions load completely. You may reload page."
      );
      return;
    }
    dispatch(openFilter());
    dispatch(showModal());
  };

  // USE THIS TO HANDLE THE DATE WITHIN WHAT DATE RANGE THE TRANSACTIONS ARE SHOWN
  useEffect(() => {
    let dateNumberArr: number[] = [];
    transactions?.forEach((each) => {
      const dateInNumber = completeNumberFormat(each.date);
      dateNumberArr.push(dateInNumber);
    });
    const maxDateValue = Math.max(...dateNumberArr);
    const getPreviousYear = new Date(maxDateValue).getFullYear();
    const currentYear = new Date().getFullYear();
    const yearDifference = currentYear - getPreviousYear;
    setLastTransaction(yearDifference + 1);
  }, [transactions]);

  return (
    <header className="justify-between sm:flex">
      {/* Left hand side */}
      <div className="leading-6">
        <h1 className="text-[24px] font-extrabold text-[#000]">
          <span>{istransLoading ? 0 : transactions?.length}</span> Transactions
        </h1>
        <p className="text-[14px]">
          Your transactions for the last{" "}
          {istransLoading || transactions.length === 0 ? 0 : lastTransaction}{" "}
          years
        </p>
      </div>
      {/* Right hand side */}
      <div className="flex gap-4 mt-3 sm:mt-0">
        <Button
          btnContent="Filter"
          icon={<FaAngleDown />}
          handleClick={handleShowFilter}
          btnId="open-button"
          // data-testid="open-button"
        />
        <Button btnContent="Export list" icon={<MdOutlineFileDownload />} />
      </div>
    </header>
  );
};

export default TransHeader;
