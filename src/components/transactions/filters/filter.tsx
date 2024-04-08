import { IoCloseSharp } from "react-icons/io5";
import { FilterHeader } from ".";

const Filter = () => {
  return (
    <div className="fixed right-1 top-1 bottom-4 z-20 border-2 w-[456px] h-[100vh] bg-white rounded-2xl p-4">
      <header className="flex items-center justify-between text-[24px]">
        <h1 className="text-[#000] font-extrabold">Filter</h1>
        <IoCloseSharp className="cursor-pointer text-3xl" />
      </header>

      <FilterHeader />
    </div>
  );
};

export default Filter;
