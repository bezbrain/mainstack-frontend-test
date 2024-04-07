import { useEffect } from "react";
import { SingleBalance } from "..";
import { WalletLoader } from "../../helpers/skeleton-loaders";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import walletData from "../../../management/action/wallet.action";

const Balances = () => {
  const { isWalletLoading, wallet } = useSelector(
    (store: RootState) => store.walletStore
  );

  const { total_payout, total_revenue, pending_payout, ledger_balance } =
    wallet;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(walletData());
  }, []);

  return (
    <>
      {isWalletLoading ? (
        <WalletLoader />
      ) : (
        <>
          {!isWalletLoading && (
            <div className="mt-8 grid gap-x-12 sm:grid-cols-2 iPadAir:w-[30%] iPadAir:grid-cols-1 iPadAir:mt-0">
              <SingleBalance name="Ledger Balace" amount={ledger_balance} />
              <SingleBalance name="Total Payout" amount={total_payout} />
              <SingleBalance name="Total Revenue" amount={total_revenue} />
              <SingleBalance name="Pending Payout" amount={pending_payout} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Balances;
