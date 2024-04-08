import { useState } from "react";
import { TypeDropdown } from "..";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const TransType = () => {
  const [isShowAngle, setIsShowAngle] = useState(true);

  const inputStyle = `h-[48px] w-full rounded-xl px-4 ${
    isShowAngle
      ? "bg-[#edf0f5] border-none"
      : "border-[3px] border-[#141417] bg-inherit"
  } focus:cursor-pointer cursor-pointer focus:outline-none`;

  const handleTransTypeClick = () => {
    setIsShowAngle(!isShowAngle);
  };

  return (
    <div className="mt-6 text-[#141417]">
      <h2 className="font-extrabold mb-1">Transaction Type</h2>

      <div className="relative" onClick={handleTransTypeClick}>
        <input type="text" className={inputStyle} readOnly />
        {isShowAngle && (
          <FaAngleDown className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50" />
        )}
        {!isShowAngle && (
          <FaAngleUp className="absolute top-1/2 right-2 -translate-y-1/2 opacity-50" />
        )}
      </div>

      <TypeDropdown />
    </div>
  );
};

export default TransType;
