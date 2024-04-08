import { useDispatch, useSelector } from "react-redux";
import { transactionTypeData } from "../../../../../utils/data";
import { AppDispatch, RootState } from "../../../../../store";
import { checkedInput } from "../../../../../management/features/filtersSlice";
import { ChangeEvent } from "react";

const TypeDropdown = () => {
  const { filter } = useSelector((store: RootState) => store.filterStore);

  //   const { store, tipped, withdrawals, chargebacks, cashbacks, refer } = filter;

  const dispatch = useDispatch<AppDispatch>();

  const handleTransactionType = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const checked = e.target.checked;
    // console.log(name, checked);
    dispatch(checkedInput({ [name]: checked }));
  };

  return (
    <div className="px-4 pb-3 shadow-lg rounded-xl">
      {transactionTypeData.map((each) => {
        const { id, type, name } = each;
        return (
          <div className="cursor-pointer flex gap-3 mt-6" key={id}>
            <input
              type="checkbox"
              checked={filter[name as keyof typeof filter]}
              id={type}
              name={name}
              onChange={handleTransactionType}
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

export default TypeDropdown;
