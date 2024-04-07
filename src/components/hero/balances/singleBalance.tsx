import { IoMdInformationCircleOutline } from "react-icons/io";

const SingleBalance = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <p>Ledger Balance</p>
        <IoMdInformationCircleOutline
          className="text-xl"
          title="This is my ledger balance"
        />
      </div>
      <p className="text-[#000] text-[28px] font-extrabold">USD 0.00</p>
    </div>
  );
};

export default SingleBalance;
