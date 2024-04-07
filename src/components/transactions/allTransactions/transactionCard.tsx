import { LuMoveDownLeft } from "react-icons/lu";

interface TransactionCardProps {
  productName: string;
  name: string;
  amount: number;
  date: string;
}

const TransactionCard = ({
  productName,
  name,
  amount,
  date,
}: TransactionCardProps) => {
  return (
    <div className="flex items-center gap-4 justify-between mt-6">
      {/* Left hand side */}
      <div className="flex items-center gap-4 leading-6">
        <div className="bg-[#e3fcf2] w-[48px] h-[48px] rounded-full flex items-center justify-center">
          <LuMoveDownLeft className="text-[#22664a]" />
        </div>
        <div>
          <h3 className="font-semibold">{productName}</h3>
          <p className="text-[14px]">{name}</p>
        </div>
      </div>
      {/* Right hand side */}
      <div>
        <h3 className="font-extrabold text-[#000] text-right">USD {amount}</h3>
        <p className="text-[14px]">{date}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
