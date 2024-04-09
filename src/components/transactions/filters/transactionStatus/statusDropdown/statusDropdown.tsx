import { useDispatch, useSelector } from "react-redux";
import { transactionStatusData } from "../../../../../utils/data";
import { AppDispatch, RootState } from "../../../../../store";
import { ChangeEvent } from "react";
import { checkedInputForStatus } from "../../../../../management/features/filtersSlice";

const StatusDropdown = () => {
  const { filterByStatus } = useSelector(
    (store: RootState) => store.filterStore
  );

  const dispatch = useDispatch<AppDispatch>();

  //   HANDLE INPUT CHANGE
  const handleTransactionStatus = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const checked = e.target.checked;
    // console.log(name, checked);
    dispatch(checkedInputForStatus({ [name]: checked }));
  };

  return (
    <div className="px-4 pb-3 shadow-lg rounded-xl">
      {transactionStatusData.map((each) => {
        const { id, type, name } = each;
        return (
          <div className="cursor-pointer flex gap-3 mt-6" key={id}>
            <input
              type="checkbox"
              checked={filterByStatus[name as keyof typeof filterByStatus]}
              id={type}
              name={name}
              onChange={handleTransactionStatus}
              className="scale-110 cursor-pointer focus:outline-none accent-black"
            />
            <label htmlFor={type} className="w-full cursor-pointer">
              {type}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default StatusDropdown;
