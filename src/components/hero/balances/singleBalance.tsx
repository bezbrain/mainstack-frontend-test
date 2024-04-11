import { IoMdInformationCircleOutline } from "react-icons/io";

interface SingleBalanceProps {
  name: string;
  amount: number;
}

const SingleBalance = ({ name, amount }: SingleBalanceProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-1">
        <p>{name}</p>
        <IoMdInformationCircleOutline className="text-xl" title={name} />
      </div>
      <p className="text-[#000] text-[28px] font-extrabold">
        USD {amount}
        {`${amount}`.includes(".") ? "" : ".00"}
      </p>
    </div>
  );
};

export default SingleBalance;
