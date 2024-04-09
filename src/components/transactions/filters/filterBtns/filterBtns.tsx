import { Button } from "../../../general/button";

const FilterBtns = () => {
  return (
    <div className="flex w-fit mx-auto gap-6">
      <Button
        btnContent="Clear"
        btnStyle="w-[198px] flex justify-center border-[1px] bg-inherit transition-all hover:duration-500 hover:bg-[#141417] hover:text-[#f5f5f7]"
      />
      <Button
        btnContent="Apply"
        btnStyle="w-[198px] flex justify-center border-[1px] bg-[#141417] text-[#f5f5f7] hover:bg-inherit hover:text-[#141417] transition-all hover:duration-500"
      />
    </div>
  );
};

export default FilterBtns;
