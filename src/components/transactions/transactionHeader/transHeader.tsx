import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { Button } from "../../general/button";

const TransHeader = () => {
  return (
    <header className="flex justify-between">
      {/* Left hand side */}
      <div className="leading-6">
        <h1 className="text-[24px] font-extrabold text-[#000]">
          <span>24</span> Transactions
        </h1>
        <p className="text-[14px]">Your transactions for the last 7 days</p>
      </div>
      {/* Right hand side */}
      <div className="flex gap-4">
        <Button btnContent="Filter" icon={<FaAngleDown />} />
        <Button btnContent="Export list" icon={<MdOutlineFileDownload />} />
      </div>
    </header>
  );
};

export default TransHeader;
