import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { SectionWrapper } from "../general/wrappers";
import { Button } from "../general/button";

const Transactions = () => {
  return (
    <SectionWrapper>
      <div className="mt-16">
        <header className="flex justify-between">
          {/* Left hand side */}
          <div className="leading-6">
            <h1 className="text-[24px] font-extrabold text-[#000]">
              <span>24</span> Transactions
            </h1>
            <p>Your transactions for the last 7 days</p>
          </div>
          {/* Right hand side */}
          <div className="flex gap-4">
            <Button btnContent="Filter" icon={<FaAngleDown />} />
            <Button btnContent="Export list" icon={<MdOutlineFileDownload />} />
          </div>
        </header>
      </div>
    </SectionWrapper>
  );
};

export default Transactions;
