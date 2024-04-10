import { TheChart } from "..";
import { Button } from "../../general/button";

const Graph = () => {
  return (
    <div className="iPadAir:w-[60%]">
      <div className="iPhone:flex items-center gap-10 surfaceDuo:gap-20">
        <div>
          <p className="text-[14px] surfaceDuo:text-[16px]">
            Available Balance
          </p>
          <h2 className="text-[20px] surfaceDuo:text-[36px] text-[#000] font-extrabold">
            USD 120,500.00
          </h2>
        </div>
        <Button
          btnContent="Withdraw"
          btnStyle="py-2 px-10 bg-[#3b4147] text-[#f1f1f1] my-2 iPhone:my-0"
        />
      </div>
      <div className="overflow-x-auto">
        <TheChart />
      </div>
    </div>
  );
};

export default Graph;
