import { LuMoveDownLeft, LuMoveUpRight } from "react-icons/lu";
import { formatDate } from "../../../utils/convertDateFormat";
import { toCapitalLetter } from "../../../utils/toCapitalLetter";

interface TransactionCardProps {
  productName: string;
  name: string;
  amount: number;
  date: string;
  type: string;
  status: string;
}

const TransactionCard = ({
  productName,
  name,
  amount,
  date,
  type,
  status,
}: TransactionCardProps) => {
  return (
    <div className="flex items-center gap-4 justify-between mt-6">
      {/* Left hand side */}
      <div className="flex items-center gap-4 leading-6">
        <div
          className={`w-[48px] h-[48px] rounded-full flex items-center justify-center ${
            type === "deposit" ? "bg-[#e3fcf2]" : "bg-[#fae4e1]"
          }`}
        >
          {type === "deposit" ? (
            <LuMoveDownLeft className="text-[#22664a]" />
          ) : (
            <LuMoveUpRight className="text-[#a32c1c]" />
          )}
        </div>
        <div>
          <h3 className="font-semibold">{productName}</h3>
          <p
            className={`text-[14px] ${
              type === "deposit" ? "" : "text-[#0ea164]"
            }`}
          >
            {type === "deposit" ? name : toCapitalLetter(status)}
          </p>
        </div>
      </div>

      {/* Right hand side */}
      <div>
        <h3 className="font-extrabold text-[#000] text-right">USD {amount}</h3>
        <p className="text-[14px]">{formatDate(date)}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
