import { LuMoveDownLeft } from "react-icons/lu";

const TransactionCard = () => {
  return (
    <div className="flex items-center justify-between mt-6">
      {/* Left hand side */}
      <div className="flex items-center gap-4 leading-6">
        <div className="bg-[#e3fcf2] w-[48px] h-[48px] rounded-full flex items-center justify-center">
          <LuMoveDownLeft className="text-[#22664a]" />
        </div>
        <div>
          <h3 className="font-semibold">Psychology of Money </h3>
          <p className="text-[14px]">Roy Cash</p>
        </div>
      </div>
      {/* Right hand side */}
      <div>
        <h3 className="font-extrabold text-[#000] text-right">USD 600</h3>
        <p className="text-[14px]">Apr 03,2022</p>
      </div>
    </div>
  );
};

export default TransactionCard;
