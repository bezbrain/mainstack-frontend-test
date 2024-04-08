import { transactionTypeData } from "../../../../../utils/data";

const TypeDropdown = () => {
  return (
    <div className="px-4 pb-3 shadow-lg rounded-xl">
      {transactionTypeData.map((each) => {
        const { id, type } = each;
        return (
          <div className="cursor-pointer flex gap-3 mt-6" key={id}>
            <input
              type="checkbox"
              id={type}
              name=""
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
