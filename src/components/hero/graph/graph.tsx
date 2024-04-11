import { useSelector } from "react-redux";
import { TheChart } from "..";
import { Button } from "../../general/button";
import { RootState } from "../../../store";

const Graph = () => {
  const { wallet, isWalletLoading } = useSelector(
    (store: RootState) => store.walletStore
  );

  return (
    <div className="iPadAir:w-[60%]" data-testid="graph">
      <div className="iPhone:flex items-center gap-10 surfaceDuo:gap-20">
        <div>
          <p className="text-[14px] surfaceDuo:text-[16px]">
            Available Balance
          </p>
          <h2 className="text-[20px] surfaceDuo:text-[36px] text-[#000] font-extrabold">
            USD {isWalletLoading ? 0 : wallet?.balance}
          </h2>
        </div>
        <Button
          btnContent="Withdraw"
          btnStyle="py-2 px-10 bg-[#3b4147] text-[#f1f1f1] my-2 iPhone:my-0"
        />
      </div>
      <div className="overflow-x-auto overflow-y-hidden">
        <TheChart />
      </div>
      <div className="-mt-16 py-4">
        <hr className="w-full" />
        <div className="flex justify-between mt-1 text-[14px]">
          <p>Mar 1, 2022</p>
          <p>Mar 31, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Graph;
