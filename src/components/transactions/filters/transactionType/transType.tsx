import { TypeDropdown } from "..";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { toggleTransactionType } from "../../../../management/features/filtersSlice";

const TransType = () => {
  const { isTransactionType } = useSelector(
    (store: RootState) => store.filterStore
  );

  const dispatch = useDispatch<AppDispatch>();

  const inputStyle = `h-[48px] w-full rounded-xl px-4 ${
    !isTransactionType
      ? "bg-[#edf0f5] border-none"
      : "border-[3px] border-[#141417] bg-inherit"
  } focus:cursor-pointer cursor-pointer focus:outline-none`;

  const handleTransTypeClick = () => {
    dispatch(toggleTransactionType());
  };

  return (
    <div className="mt-6 text-[#141417]">
      <h2 className="font-extrabold mb-1">Transaction Type</h2>

      <div className="relative" onClick={handleTransTypeClick}>
        <input type="text" className={inputStyle} readOnly />
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
