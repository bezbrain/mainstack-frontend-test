import { SingleBalance } from "..";
import { WalletLoader } from "../../helpers/skeleton-loaders";

const Balances = () => {
  return (
    <>
      {true ? (
        <WalletLoader />
      ) : (
        <div className="mt-8 grid gap-x-12 sm:grid-cols-2 iPadAir:w-[30%] iPadAir:grid-cols-1 iPadAir:mt-0">
          {Array(4)
            .fill(undefined)
            .map((_, index) => (
              <SingleBalance key={index} />
            ))}
        </div>
      )}
    </>
  );
};

export default Balances;
