import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { Button } from "../../general/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { openFilter } from "../../../management/features/filtersSlice";
import { toast } from "react-toastify";

const TransHeader = () => {
  const { istransLoading } = useSelector(
    (store: RootState) => store.transactionStore
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleShowFilter = () => {
    if (istransLoading) {
      toast.error(
        "Please let all transactions load completely. You may reload page."
      );
      return;
    }
    dispatch(openFilter());
  };

  return (
    <header className="justify-between sm:flex">
      {/* Left hand side */}
      <div className="leading-6">
        <h1 className="text-[24px] font-extrabold text-[#000]">
          <span>24</span> Transactions
        </h1>
        <p className="text-[14px]">Your transactions for the last 7 days</p>
      </div>
      {/* Right hand side */}
      <div className="flex gap-4 mt-3 sm:mt-0">
        <Button
          btnContent="Filter"
          icon={<FaAngleDown />}
          handleClick={handleShowFilter}
        />
        <Button btnContent="Export list" icon={<MdOutlineFileDownload />} />
      </div>
    </header>
  );
};

export default TransHeader;
