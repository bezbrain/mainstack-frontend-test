import { Button } from "../../../general/button";

const btnFilterStyle =
  "text-[14px] px-4 py-2 hover:bg-[#edf0f5] bg-inherit border-[1px]";

const FilterHeader = () => {
  return (
    <header className="flex justify-between my-6">
      <Button btnContent="Today" btnStyle={`${btnFilterStyle}`} />
      <Button btnContent="Last 7 days" btnStyle={`${btnFilterStyle}`} />
      <Button btnContent="This month" btnStyle={`${btnFilterStyle}`} />
      <Button btnContent="Last 3 months" btnStyle={`${btnFilterStyle}`} />
    </header>
  );
};

export default FilterHeader;
