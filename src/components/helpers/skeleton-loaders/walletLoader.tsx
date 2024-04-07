import Skeleton from "react-loading-skeleton";

const WalletLoader = () => {
  return (
    <div className="mt-8 grid gap-y-3 gap-x-12 sm:grid-cols-2 iPadAir:w-[30%] iPadAir:grid-cols-1 iPadAir:mt-0">
      {Array(4)
        .fill(undefined)
        .map((_, i) => (
          <Skeleton key={i} className="skeleton" height={75} />
        ))}
    </div>
  );
};

export default WalletLoader;
